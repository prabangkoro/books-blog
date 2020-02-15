module.exports = {
  title: 'My Books',
  themeConfig: {
    sidebar: [
      '/',
      '/about',
      {
        title: '2020',
        path: '/2020/',
        collapsable: false,
        children: [
          '/2020/atomic-habits'
        ]
      }
    ]
  }
}
