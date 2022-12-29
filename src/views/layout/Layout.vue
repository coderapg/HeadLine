<template>
  <div>
    <router-view />
    <layout-tab-bar />
  </div>
</template>

<script>
import LayoutTabBar from './components/LayoutTabBar'

export default {
  name: 'Layout',
  components: {
    LayoutTabBar
  }
}
</script>

<style lang="less" scoped>
</style>
