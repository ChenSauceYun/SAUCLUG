// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SAUCLUG',
  tagline: 'SAUCLUG一个Linux团体!',
  url: 'https://sauclug.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://minblue.cc/images/2022/04/14/aqHj.png',
  organizationName: 'SAUCLUG', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SAUCLUG',
        logo: {
          alt: 'sauclug',
          src: 'https://minblue.cc/images/2022/04/14/aqHj.png',
        },
        items: [
          // 侧边栏
          //{
          //  type: 'doc',
          //  docId: 'intro',
          //  position: 'left',
          // label: '简介',
          //},
          //无侧边栏
         

         {to: '/news', label: '新闻', position: 'left'},
         {to: '/about', label: '关于', position: 'left'},
         


          {
            href: 'https://mirrors.minblue.cn',
            label: '镜像站',
            position: 'right',
          },

          




        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '页面',
            items: [
              {
                label: '新闻',
                to: '/news/',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: '运营者',
                href: 'https://chsas.cn',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '运营者',
                href: 'https://chsas.cn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SAUCLUG.CN.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};











module.exports = config;
