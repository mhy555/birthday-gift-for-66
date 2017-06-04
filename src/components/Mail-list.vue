<template lang="html">
  <div class="list-view">
    <div class="item-container" v-for="item in items">
      <router-link :to="'/mail/' + item.sha" :key="item.sha" class="item-title">
        {{ item.title }}
      </router-link>
      <div class="date">
        {{ item.date }}
      </div>
      <div class="time-ago">
        {{ item.date | timeago }}
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  components: {

  },
  created() {
    this.getList()
  },
  data() {
    return {
      items: null
    }
  },
  methods: {
    getList() {
      api.getList().then((list) => {
        console.log('list', list);
        this.items = list;
      })
    }
  }
}
</script>

<style lang="less">
.list-view {
  .item-container {
    padding: 30px 0 30px 40%;
    font-family: monospace;
    color: #282828;
    .item-title {
      font-size: 18px;
      padding: 10px 0;
    }
    .date {
      display: inline-block;
      font-size: 14px;
      line-height: 18px;
      margin-left: 20px;
      color: #666;
    }
    .time-ago {
      margin-top: 10px;
      color: #999;
    }
  }
}
</style>
