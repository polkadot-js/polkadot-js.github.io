module.exports = {
  base: '/',
  title: 'polkadot-js',
  description: 'A collection of tools and interafces for the Polkadot project',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Apps UI', link: 'https://polkadot.js.org/apps/' },
      { text: 'API Docs', link: 'https://polkadot.js.org/api/' },
      { text: 'Utility Docs', link: 'https://polkadot.js.org/common/' },
      { text: 'GitHub', link: 'https://github.com/polkadot-js/polkadot-js.github.io' }
    ],
    sidebar: [
      '/REPOS.md',
      '/CONTRIBUTING.md'
    ]
  }
};
