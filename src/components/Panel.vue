<template>
  <el-tabs type="border-card" style="height: 100%">
    <el-tab-pane>
      <span slot="label" class="app-tab-label">
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
$surround-background: #060606;
$pane-border-color: #1d1e22;
$pane-border-width: 18px;
$tab-label-text-color: #a9adbc;
$pane-header-background: #060606;

.app-main {
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
