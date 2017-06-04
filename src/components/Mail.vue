<template lang="html">
  <div class="mail">
    <div class="home" @click="goHome"></div>
    <div class="back" @click="goList"></div>
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
    },
    goHome() {
      this.$router.push('/home');
    },
    goList() {
      this.$router.push('/mailList');
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
  .home {
    width: 50px;
    height: 50px;
    background: url('../../assets/home.png') no-repeat center;
    background-size: contain;
    position: absolute;
    top: 20px;
    left: 30px;
    cursor: pointer;
  }
  .back {
    width: 50px;
    height: 50px;
    background: url('../../assets/back.png') no-repeat center;
    background-size: contain;
    position: absolute;
    top: 80px;
    left: 30px;
    cursor: pointer;
  }
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
