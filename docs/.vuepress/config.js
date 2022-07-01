const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
module.exports = {
    lang: 'en-US',
    title: 'Atheist Codex',
    description: 'This is my first VuePress site',
    theme: defaultTheme({
        // default theme config
        //home:"Athiest Codex",
        navbar: [
            // nested group - max depth is 2
            {
              text: 'Group',
              children: [
                {
                  text: 'SubGroup',
                  children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                },
              ],
            },
            // control when should the item be active
            {
              text: 'Group 2',
              children: [
                {
                  text: 'Always active',
                  link: '/',
                  // this item will always be active
                  activeMatch: '/',
                },
                {
                  text: 'Active on /foo/',
                  link: '/not-foo/',
                  // this item will be active when current route path starts with /foo/
                  // regular expression is supported
                  activeMatch: '^/foo/',
                },
              ],
            },
          ],
      }),
      plugins: [
        backToTopPlugin(),
        searchPlugin({
            // options
        }),
        nprogressPlugin(),
        pwaPlugin({
            // options
        }),
      ],
  }