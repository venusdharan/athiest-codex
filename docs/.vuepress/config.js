const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
module.exports = {
    lang: 'en-US',
    title: 'Atheist Codex',
    description: 'Athiest Data Bank',
    theme: defaultTheme({
        // default theme config
        //home:"Athiest Codex",
        contributors : false,
        navbar: [
            // nested group - max depth is 2
            {
              text: 'Logic',
              children: [
                {
                  text: 'Fallacy',
                  children: ['/logic/fallacy'],
                },
              ],
            },
            // control when should the item be active
            {
              text: 'philosophy',
              children: [
                
                {
                  text: 'Crash course',
                  link: '/philosophy/crashcourse',
                },
                {
                  text: 'Ontological Arguments',
                  link: '/philosophy/OntologicalArguments',
                },
                {
                  text : 'Category Mistakes',
                  link : '/philosophy/CategoryMistakes',
                },
                {
                  text : 'Gish gallop',
                  link : '/philosophy/Gishgallop',
                },
                {
                  text : 'Quote Mining',
                  link : '/philosophy/QuoteMining',
                }
              ],
            },
            {
                text: 'History',
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
            {
                text: 'Science',
                children: [
                  {
                    text : 'Tree Of Life',
                    link : '/science/TreeOfLife',
                  }
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
