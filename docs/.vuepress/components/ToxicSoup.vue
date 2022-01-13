<!--
 * @Author: 王云飞
 * @Date: 2022-01-13 16:02:19
 * @LastEditTime: 2022-01-13 16:24:06
 * @LastEditors: 王云飞
 * @Description: 
 * 
-->
<template>
 <div class="soup">{{soupContent}}</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['slot-key'],
  data() {
    return {
      soupContent: '我是一碗毒鸡汤, 干了!'
    }
  },
  mounted () {
    this.getSoupData()
    // document.querySelector(`.${this.$style.example}`)
    //   .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  },
  methods: {
    async getSoupData() {
      const res = await axios.get('https://iiter.cn/api/soup')
      let { data } = res.data
      this.soupContent = data.title
    }
  }
}
</script>
<style>
  .soup {
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    border: 1px solid rgba(175, 166, 166,.45);
    border-radius: 10px;
    color: #3eaf7c;
    letter-spacing: 2px;
  }
</style>