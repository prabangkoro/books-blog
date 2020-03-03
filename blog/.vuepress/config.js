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
          '/2020/tentang-kamu',
          '/2020/jika-kita-tak-pernah-jatuh-cinta',
          '/2020/jika-kita-tak-pernah-jadi-apa-apa',
          '/2020/aroma-karsa'
        ]
      }
    ]
  }
}
