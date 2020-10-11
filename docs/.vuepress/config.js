module.exports = {
  title: '星域世界管理员手册',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      ['/', '欢迎页'],
      ['/common-commands', '常见指令'],
      ['/some-examples', '常见案例'],
      ['/how-to-make-client', '制作客户端教程'],
      ['/useful-commands', 'CMI 指令'],
      {
          title: '中文文案排版与 Markdown',
          collapsable: true,
          children: [
              '/text/chinese-copywriting-guidelines.html',
              '/text/Markdown.html'
            ]
      }
    ],
    lastUpdated: '最后更新 ',
    repo: 'mcstaralliance/staff-manual',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '帮助我们完善这个页面',
    smoothScroll: true
  },
  evergreen: true
}
