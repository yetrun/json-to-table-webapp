<template>
  <el-container>
    <el-header>
      <el-button @click="generateTableHTML">生成</el-button>
    </el-header>

    <el-main class="app-main">
      <!-- 左右分开，一边是 JSON 源代码，一边是表格 -->
      <splitpanes>
        <pane size="35">
          <splitpanes horizontal style="height: calc(100vh - 100px)">
            <pane>
              <el-tabs type="border-card">
                <el-tab-pane label="Schema">
                  <codemirror v-model="source.schema" :options="cmOptions" style="height: 100%" @input="clearValidate('schema')" />
                </el-tab-pane>
                <el-tab-pane v-if="errors.schema" disabled>
                  <span slot="label">{{ errors.schema }}</span>
                </el-tab-pane>
              </el-tabs>
            </pane>
            <pane>
              <el-tabs type="border-card">
                <el-tab-pane label="Data">
                  <codemirror v-model="source.data" :options="cmOptions" style="height: 100%" @input="clearValidate('data')" />
                </el-tab-pane>
                <el-tab-pane v-if="errors.data" disabled>
                  <span slot="label">{{ errors.data }}</span>
                </el-tab-pane>
              </el-tabs>
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <el-tabs type="border-card">
            <el-tab-pane label="Table">
              <div v-html="tableHTML" v-if="tableHTML"></div>
              <el-empty description="请点击导航栏上的生成按钮生成表格" v-else></el-empty>
            </el-tab-pane>
          </el-tabs>
        </pane>
      </splitpanes>
    </el-main>
  </el-container>
</template>

<script>
import Schema from 'async-validator'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import { generateHTMLTable, parseDataToSchema } from 'json5-to-table'

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

const validator = new Schema({
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
  components: { Splitpanes, Pane },
  data () {
    return {
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      },
      tableHTML: '',
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
  methods: {
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
      // this.$refs.sourceForm.clearValidate(prop)
    }
  }
}
</script>

<style lang="scss">
.app-main {
  height: calc(100vh - 60px);

  .CodeMirror {
    height: 100%;
  }

  .el-tabs {
    height: 100%;
  }

  .el-tabs__content {
    height: calc(100% - 39px);
    padding: 0;
  }

  .el-tab-pane {
    height: 100%;
  }

  .el-form-item {
    height: 100%;
    margin-bottom: 0;
  }

  .el-form-item__content {
    height: calc(100%);
    line-height: 1em;
    font-size: 1em;
  }

  .splitpanes__pane {
    box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;
    /* padding: 10px; */
  }

  .splitpanes--vertical > .splitpanes__splitter {
    min-width: 18px;
    background: blue;
  }

  .splitpanes--horizontal > .splitpanes__splitter {
    min-height: 18px;
    background: blue;
  }
}
</style>
