/*
 * @Author: 王云飞
 * @Date: 2022-01-10 15:17:26
 * @LastEditTime: 2022-01-17 13:39:46
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
const moment = require('moment');
const path = require('path')
module.exports = {
  title: '飞云的博客',
  description: '飞云的博客, 记录日常, 享受生活',
  base: '/tmier-blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    sidebarDepth: 5,
    huawei: true,
    lastUpdated: '上次更新',
    subSidebar: 'auto',
    author: '飞云',
    nav: [
      { text: '首页', link: '/'},
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // {
      //   text: '顶部菜单',
      //   items: [
      //     { text: 'Github', link: 'wwww.baidu.com'},
      //     { text: '掘金', link: 'juejin.cn'}
      //   ]
      // }
    ],
    sidebar: [
      {
        title: '飞云的博客',
        path: '/',
        collapsable: false,
      },
      {
        title: 'JS基础',
        collapsable: false,
        path: '/js-base/array',
        children: [
          {title: '数组', path: '/js-base/array'}
        ]
      },
      {
        title: 'JS高级',
        collapsable: false
      },
      {
        title: 'TS学习',
        collapsable: false,
        children: [
        ]
      },
      {
        title: 'Vue高级',
        collapsable: false
      },
      {
        title: '旁门左道',
        collapsable: true,
        path: '/unprofessional-skills/git',
        children: [
          {
            title: 'Gitee图床',
            path: '/unprofessional-skills/how-to-use-gitee-picgo'
          },
          {
            title: 'Git快捷手册',
            path: '/unprofessional-skills/git'
          },
          {
            title: 'Test',
            path: '/unprofessional-skills/test'
          },
        ]
      },
      {
        title: '工作文档',
        path: '/work/approve-self-select',
        collapsable: false,
        children: [
          {title: '发起人自选-自测', path: '/work/approve-self-select'}
        ]
      }
    ]
  },
  head: [
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?13d8831a22c884494a514f8cf6f85a3f";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  plugins: [
    [path.resolve(__dirname, '../../docs/.vuepress/vuepress-plugin-code-copy/index.js'), {'copybuttonText': '点击复制','copiedButtonText': '复制完成'}]
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     'ga': '' // UA-00000000-0
    //   }
    // ]
  ]
}