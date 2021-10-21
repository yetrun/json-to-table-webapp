<template>
  <!-- 左右分开，一边是 JSON 源代码，一边是表格 -->
  <div id="app">
    <div>
      <textarea v-model="dataText" />
    </div>
    <div>
      <textarea v-model="schemaText" />
    </div>
    <button @click="generateTableHTML">生成</button>
    <div v-html="tableHTML"></div>
  </div>
</template>

<script>
import { generateHTMLTable } from 'json5-to-table'

export default {
  name: 'App',
  data () {
    return {
      dataText: JSON.stringify([
        { a: 1, b: 2 },
        { a: 3, b: 4 }
      ]),
      schemaText: '',
      tableHTML: 'HTML Table 将展示在此'
    }
  },
  computed: {
    dataObject () {
      try {
        return JSON.parse(this.dataText)
      } catch (ex) {
        if (ex instanceof SyntaxError) {
          return []
        } else {
          throw ex
        }
      }
    },
    schemaObject () {
      try {
        return JSON.parse(this.schemaText)
      } catch (ex) {
        if (ex instanceof SyntaxError) {
          return null
        } else {
          throw ex
        }
      }
    }
  },
  methods: {
    generateTableHTML () {
      this.tableHTML = generateHTMLTable(this.dataObject, this.schemaObject)
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
#app {
  width: 100%;
  display: flex;

  > div {
    width: 50%;

    textarea {
      width: 100%;
    }
  }
}
</style>
