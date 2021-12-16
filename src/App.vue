<template>
  <el-container>
    <div v-show="false">
      <input type="file" ref="fileInput.schema" />
      <input type="file" ref="fileInput.data" />
    </div>

    <el-header class="app-header">
      <el-button type="info" @click="generateTableHTML">生成</el-button>

			<el-dropdown @command="readFile">
				<el-button type="info">
					导入 JSON<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="schema">导入模式文件</el-dropdown-item>
					<el-dropdown-item command="data">导入数据文件</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
    </el-header>

    <el-main class="app-main">
      <!-- 左右分开，一边是 JSON 源代码，一边是表格 -->
      <splitpanes>
        <pane size="33">
          <splitpanes horizontal class="app-code-pane">
            <pane size="33">
              <Panel
                title="Schema" 
                :prompt="errors.schema"
                promptType="error"
              >
                <codemirror v-model="source.schema" :options="cmOptions" class="app-codemirror-container" @input="clearValidate('schema')" />
              </Panel>
            </pane>
            <pane>
              <Panel
                title="Data"
                :prompt="errors.data"
                promptType="error"
              >
                <codemirror v-model="source.data" :options="cmOptions" class="app-codemirror-container" @input="clearValidate('data')" />
              </Panel>
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <Panel
            title ="Table"
          >
            <div class="table-container">
              <div v-html="table.html" v-if="table.html"></div>
              <el-empty description="请点击导航栏上的生成按钮生成表格" v-else></el-empty>
            </div>

            <el-tooltip 
              effect="dark" 
              content="内核耗时指生成表格 HTML 源码的时间，剩下的耗时是加载 DOM 所花费的时间" 
              placement="top-start"
              slot="prompt"
              v-if="table.summary"
            >
              <span>
                数据总量 {{ table.summary.dataCount }} 个，
                内核运行耗时 {{ table.summary.timeConsuming }} ms
              </span>
            </el-tooltip>
          </Panel>
        </pane>
      </splitpanes>
    </el-main>
  </el-container>
</template>

<script>
import Validator from 'async-validator'
import { generateHTMLTable, parseDataToSchema } from 'json5-to-table'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/darcula.css'

import Panel from '@/components/Panel'

const validateJSONText = (rule, value, callback) => {
  try {
    if (value) {
      JSON.parse(value)
    }
    callback()
  } catch (ex) {
    if (ex instanceof SyntaxError) {
      callback(new Error('JSON 格式错误'))
    } else {
      throw ex
    }
  }
}

const validator = new Validator({
  schema: [
    { validator: validateJSONText, trigger: 'none' }
  ],
  data: [
    { required: true, message: '请输入 Data 内容', trigger: 'none' },
    { validator: validateJSONText, trigger: 'none' }
  ]
})

export default {
  name: 'App',
  components: { Splitpanes, Pane, codemirror, Panel },
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'darcula',
        lineNumbers: true,
        line: true
      },
      table: {
        html: '',
        summary: null
      },
      source: {
        data: JSON.stringify([
          { a: 1, b: 2 },
          { a: 3, b: 4 }
        ]),
        schema: ''
      },
      errors: {
        data: null,
        schema: null
      },
      rules: {
        schema: [
          { validator: validateJSONText, trigger: 'none' }
        ],
        data: [
          { required: true, message: '请输入 Data 内容', trigger: 'none' },
          { validator: validateJSONText, trigger: 'none' }
        ]
      }
    }
  },
  mounted () {
    this.$refs['fileInput.data'].addEventListener('change', e => this.setFileContent('data', e), false);
    this.$refs['fileInput.schema'].addEventListener('change', e => this.setFileContent('schema', e), false);
  },
  methods: {
    readFile (field) {
      const ref = `fileInput.${field}`
      this.$refs[ref].click()
    },
    setFileContent (field, e) {
      const files = e.target.files
      const file = files[0]

      const reader = new FileReader()

      reader.onload = e => {
        const text = e.target.result
        this.source[field] = text
      }

      reader.readAsText(file)
    },
    generateTableHTML () {
      const start = Date.now()

      validator.validate(this.source, (_, errors) => {
        try {
          if (errors) {
            this.errors = {
              schema: errors.schema && errors.schema[0].message,
              data: errors.data && errors.data[0].message,
            }
          } else {
            let dataObject = this.source.data && JSON.parse(this.source.data)
            let schemaObject = this.source.schema && JSON.parse(this.source.schema)

            if (!schemaObject) {
              schemaObject = parseDataToSchema(dataObject)
              this.source.schema = JSON.stringify(schemaObject, null, 2)
            }

            this.table.html = generateHTMLTable(dataObject, schemaObject, {
              attributes: {
                table: { class: 'beautiful-table' }
              }
            })

            this.table.summary = {
              dataCount: dataObject.length || 1,
              timeConsuming: Date.now() - start
            }
          }
        } catch (ex) {
          // element 表单的 validate 方法好像会吃掉异常，因此主动地打印出来求结果
          console.error(ex)
          throw ex
        }
      })
    },
    clearValidate (prop) {
      this.errors[prop] = null
    }
  }
}
</script>

<style lang="scss">
$surround-background: #060606;
$table-background: #f2f2f2;
$pane-border-color: #1d1e22;
$pane-border-width: 18px;
$tab-label-text-color: #a9adbc;
$pane-header-background: #060606;

.app-header {
  background: $surround-background;

  display: flex;
  align-items: center;

  // 去掉菜单的边框
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  * {
    margin: 0 8px;
  }
}

.app-main {
  height: calc(100vh - 60px);
  padding: 0;
  border: $pane-border-width solid $surround-background;
  border-top: none;

  // 修改 splitpanes 的 spliter 的宽度、颜色
  .splitpanes--vertical > .splitpanes__splitter {
    min-width: $pane-border-width;
    background: $surround-background;
  }
  .splitpanes--horizontal > .splitpanes__splitter {
    min-height: $pane-border-width;
    background: $surround-background;
  }

  // CodeMirror 内部的 textarea 高度 100%
  .app-codemirror-container {
    height: 100%;
    .CodeMirror { height: 100%; }
  }

  .table-container {
    background: $table-background;
    height: 100%;
    overflow: auto;
  }
}
</style>
