<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './styles/common.less';
#app {
  height: 100%;
  width: 100%;
  min-width: 1024px;
  overflow: hidden;
}
</style>
