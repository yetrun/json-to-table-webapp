<template>
  <el-container>
    <el-header>
      <el-button @click="generateTableHTML">生成</el-button>
    </el-header>

    <el-main>
      <!-- 左右分开，一边是 JSON 源代码，一边是表格 -->
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form ref="sourceForm" :rules="rules" :model="source" label-width="60px" hide-required-asterisk>
            <el-form-item label="Schema" prop="schema">
              <el-input type="textarea" rows="10" v-model="source.schema" @input="clearValidate('schema')" />
            </el-form-item>
            <el-form-item label="Data" prop="data">
              <el-input type="textarea" rows="20" v-model="source.data" @input="clearValidate('data')" />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div v-html="tableHTML" v-if="tableHTML"></div>
          <el-empty description="请点击导航栏上的生成按钮生成表格" v-else></el-empty>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
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

export default {
  name: 'App',
  data () {
    return {
      tableHTML: '',
      source: {
        data: JSON.stringify([
          { a: 1, b: 2 },
          { a: 3, b: 4 }
        ]),
        schema: ''
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
      this.$refs.sourceForm.validate(isValid => {
        try {
          if (isValid) {
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
      this.$refs.sourceForm.clearValidate(prop)
    }
  }
}
</script>

<style lang="scss">
</style>
