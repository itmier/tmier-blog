const moment = require('moment');
module.exports = {
  title: 'Tmier的博客',
  description: 'Tmier的博客, 记录日常, 享受生活',
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
    author: 'Tmier',
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
        title: 'Tmier的博客',
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
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}