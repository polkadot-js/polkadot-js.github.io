module.exports = {
  base: '/',
  title: 'polkadot-js',
  description: 'A collection of tools, interfaces and libraries around the Polkadot project. Polkadot does JavaScript.',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Polkadot/Substrate Apps', link: 'https://polkadot.js.org/apps/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: 'https://polkadot.js.org/api/' },
          { text: 'Utilility Reference', link: 'https://polkadot.js.org/common/' },
          { text: 'UI Library Reference', link: 'https://polkadot.js.org/ui/' },
        ]
      },
      { text: 'GitHub Org', link: 'https://github.com/polkadot-js/' }
    ],
    search: false,
    sidebar: [
      '/REPOS.md',
      '/CONTRIBUTING.md'
    ]
  }
};
