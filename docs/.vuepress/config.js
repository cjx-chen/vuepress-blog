module.exports = {
  base: "/vuepress-blog/",
  // 网站标题
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    // 显示代码行号
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}