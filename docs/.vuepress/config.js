module.exports = {
  base: "/vuepress-blog/",
  // 网站标题
  title: '嘻嘻不想干活',
  description: '给我个班上吧',
  dest: './dist',
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
    // 显示代码行号
    lineNumbers: true
  },
  themeConfig:{
    sidebar: 'auto',
    nav: [
      {text: "主页", link: "/"      },
      { text: "前端", link: "/frontend/"},
      { text: "算法", link: "/algorithm/" }
    ]
  }
}