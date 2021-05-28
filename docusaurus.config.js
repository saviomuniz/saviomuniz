/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sávio Muniz',
  tagline: 'A father-gamer software engineer',
  url: 'https://saviomuniz.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'saviomuniz', // Usually your GitHub org/user name.
  projectName: 'saviomuniz', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sávio Muniz',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/resume',
          position: 'left',
          label: 'Resume',
        },
        {
          to: '/docs/health-improvement',
          position: 'left',
          label: 'Articles'
        },
        {to: '/blog', label: 'Journal', position: 'left'},
        {
          href: 'https://github.com/saviomuniz/saviomuniz',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Sávio Muniz, built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/saviomuniz/saviomuniz/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/saviomuniz/saviomuniz/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
};
