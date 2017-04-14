<template lang="html">
  <!-- 根据官网的api，指令模块来学习每个指令的使用 -->
  <div class="directive">
    <!-- v-text -->
    <div v-text="vText"></div>

    <!-- v-html -->
    <!-- 与v-text的区别，html标签会被解析 -->
    <div v-html="vHtml"></div>

    <!-- v-show -->
    <div v-show="vShow">如果这段文字可见，说明vShow = true</div>

    <!-- v-if,v-else,v-else-if -->
    <div v-if="vIf === 1">如果这段文字可见，说明vIf = 1</div>
    <div v-else-if="vIf === 2">如果这段文字可见，说明vIf = 2</div>
    <div v-else>如果这段文字可见，说明vIf != 1,2</div>

    <!-- v-for -->
    <div class="v-for">
      <span v-for="item in vFor">{{item}}</span>
    </div>

    <!-- v-for -->
    <div class="v-for">
      <span v-for="item in vFor">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vText: 'v-text',
      vHtml: '<span>v-html</span>',
      vShow: true,
      vIf: 2,
      vFor: ['apple', 'pear', 'banana', 'pineapple']
    }
  }
}
</script>

<style lang="sass">
  .v-for
    &::before
      content: '这是v-for出来的内容：'
    span
      margin: 0 20px
</style>
