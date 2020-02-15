module.exports = {
  title: 'My Books',
  themeConfig: {
    sidebar: [
      '/',
      '/about',
      'workflow',
      {
        title: '2020',
        path: '/2020/',
        children: [
          '/2020/atomic-habits'
        ]
      }
    ]
  }
}
