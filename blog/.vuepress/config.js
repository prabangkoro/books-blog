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
        collapsable: false,
        children: [
          '/2020/atomic-habits',
          '/2020/tentang-kamu'
        ]
      }
    ]
  }
}
