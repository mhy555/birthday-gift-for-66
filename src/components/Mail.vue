<template lang="html">
  <div class="mail">
    <article v-if="content" v-html="htmlFromMarkdown"></article>
  </div>
</template>

<script>
import api from '../api'
import marked from '../utils/vendor.js'

export default {
  created() {
    this.getArticle()
  },
  computed: {
    htmlFromMarkdown () {
      return marked(this.content)
    }
  },
  data() {
    return {
      content: null
    }
  },
  methods: {
    getArticle() {
      api.getDetail(this.$route.params.hash).then((res) => {
        this.content = res;
      })
    }
  }
}
</script>

<style lang="less">
.mail {
  padding: 0 15% 30px 16%;
  font-family: monospace;
  color: #282828;
  font-size: 16px;
  h1 {
    font-size: 19px;
    padding: 10px 0;
    font-weight: bold;
  }
  pre {
    background: #f7f7f7 !important;
    padding: 16px;
    overflow-x: auto;
  }

  code {
    background: #f7f7f7;
    font-family: monospaceFontFamily !important;
  }
}
</style>
