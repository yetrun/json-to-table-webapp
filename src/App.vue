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
              <el-tabs type="border-card" style="height: 100%">
                <el-tab-pane>
                  <span slot="label" class="app-tab-label">
                    Schema
                  </span>
                  <div style="height: 100%">
                    <codemirror v-model="source.schema" :options="cmOptions" class="app-codemirror-container" @input="clearValidate('schema')" />
                  </div>
                </el-tab-pane>
                <el-tab-pane v-if="errors.schema" disabled>
                  <span style="color: red" slot="label">{{ errors.schema }}</span>
                </el-tab-pane>
              </el-tabs>
            </pane>
            <pane>
              <el-tabs type="border-card" style="height: 100%">
                <el-tab-pane>
                  <span slot="label" class="app-tab-label">
                    Data
                  </span>
                  <codemirror v-model="source.data" :options="cmOptions" class="app-codemirror-container" @input="clearValidate('data')" />
                </el-tab-pane>
                <el-tab-pane v-if="errors.data" disabled>
                  <span style="color: red" slot="label">{{ errors.data }}</span>
                </el-tab-pane>
              </el-tabs>
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <el-tabs type="border-card" style="height: 100%">
            <el-tab-pane class="a">
              <span slot="label" class="app-tab-label">
                Table
              </span>
              <div class="table-container">
                <div v-html="tableHTML" v-if="tableHTML"></div>
                <el-empty description="请点击导航栏上的生成按钮生成表格" v-else></el-empty>
              </div>
            </el-tab-pane>

            <el-tab-pane v-if="tableGeneratingSummary" disabled>
              <span slot="label">
                数据总量 {{ tableGeneratingSummary.dataCount }} 个
              </span>
            </el-tab-pane>
          </el-tabs>
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
  components: { Splitpanes, Pane, codemirror },
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'darcula',
        lineNumbers: true,
        line: true
      },
      tableHTML: '',
      tableGeneratingSummary: null,
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

            this.tableHTML = generateHTMLTable(dataObject, schemaObject, {
              attributes: {
                table: { class: 'beautiful-table' }
              }
            })

            this.tableGeneratingSummary = {
              dataCount: dataObject.length || 1
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

  // 修改 Tab 标签的字体、颜色
  .app-tab-label {
    font-weight: 700;
    font-size: 1.2em;
    color: $tab-label-text-color;
  }

  // 修改 Element Tab 组件边框的颜色
  .el-tabs--border-card {
    border: 1px solid $pane-border-color;
  }

  // 修改 Element Tab 组件导航栏的颜色
  .el-tabs__header {
    .el-tabs__nav-scroll {
      background: $surround-background;
    }

    .el-tabs__item {
      background: $pane-border-color !important;
      border: none !important;
    }

    // 从第二个孩子开始背景色设置为与 Tab Header 背景色一致;
    .el-tabs__item:nth-child(n+2) {
      background: $pane-header-background !important;
    }
  }

  // Tab 提示的颜色
  .tab-error {
    color: red;
  }

  // 将 Element Tab 组件的内容铺满父容器
  .el-tabs__content {
    height: calc(100% - 39px);
    padding: 0;

    .el-tab-pane {
      height: 100%;
    }
  }

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
