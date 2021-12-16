<template>
  <div style="height: 100%" class="app-panel">
    <el-tabs type="border-card" style="height: 100%">
      <el-tab-pane>
        <span slot="label" class="app-panel-title">
          {{ title }}
        </span>

        <div style="height: 100%">
          <slot></slot>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="prompt" disabled>
        <span :style="{ color: promptColor }" slot="label">{{ prompt }}</span>
      </el-tab-pane>
      <el-tab-pane v-if="$slots.prompt" disabled>
        <template slot="label">
          <slot name="prompt"></slot>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: String,
    prompt: String,
    promptType: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    promptColor () {
      if (this.promptType === 'error') {
        return 'red'
      } else {
        return undefined
      }
    }
  }
}
</script>

<style lang="scss">
$main-background: #060606; // 主要的背景色，用于 Header、Spliter、页面背景等
$main-border-width: 18px; // 主要的边框宽度，每个 SplitPane 的边框宽度，Spliter 的宽度都应该应用这个宽度

$panel-title-color: #a9adbc; // 本 Panel 的标题颜色
$panel-outline-color: #1d1e22; // 本 Panel 带有一个薄薄的边框，这是它的颜色

.app-panel {
  // 修改 Tab 标签的字体、颜色
  .app-panel-title {
    font-weight: 700;
    font-size: 1.2em;
    color: $panel-title-color;
  }

  // 修改 Element Tab 组件边框的颜色
  .el-tabs--border-card {
    border: 1px solid $panel-outline-color;
  }

  // 修改 Element Tab 组件导航栏的颜色
  .el-tabs__header {
    .el-tabs__nav-scroll {
      background: $main-background;
    }

    .el-tabs__item {
      background: $panel-outline-color !important;
      border: none !important;
    }

    // 从第二个孩子开始背景色设置为与 Tab Header 背景色一致;
    .el-tabs__item:nth-child(n+2) {
      background: $main-background !important;
    }
  }

  // 将 Element Tab 组件的内容铺满父容器
  .el-tabs__content {
    height: calc(100% - 39px);
    padding: 0;

    .el-tab-pane {
      height: 100%;
    }
  }
}
</style>
