import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
  srcDir: 'src',
  base: '/klinikstatus/',
  title: "Klinikstatus",
  description: "Yes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Kirurgi',
        collapsed: false,
        items: [
          { text: 'Appendicit', link: '/kirurgi/appendicit'},  
        ],        
      },
      {
        text: 'Internmedicin',
        collapsed: false,
        items: [
          { text: 'Erysipelas', link: '/internmedicin/erysipelas'}, 
        ],
      },
      {
        text: 'Kardiologi',
        collapsed: false,
        items: [
          { text: 'STEMI', link: '/kardiologi/stemi'},
        ],
     },
     {
        text: 'Infektion',
        collapsed: false,
        items: [
          { text: 'Diagnos 1'}
      ],
    },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
