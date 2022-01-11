/*
 * @Author: 王云飞
 * @Date: 2022-01-10 15:17:26
 * @LastEditTime: 2022-01-11 10:53:33
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
module.exports = {
  title: 'TS文档',
  description: 'TS记录',
  base: '/tmier-blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/'},
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: '顶部菜单',
        items: [
          { text: 'Github', link: 'wwww.baidu.com'},
          { text: '掘金', link: 'juejin.cn'}
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false,
        children: [
          {title: '学前必读', path: '/'}
        ]
      },
      {
        title: 'TS学习',
        path: '/learn-ts/learn-start',
        collapsable: false,
        children: [
          {title: 'TS邂逅', path: '/learn-ts/learn-start'},
          {title: 'TS类型', path: '/learn-ts/ts-types'}
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
  }
}