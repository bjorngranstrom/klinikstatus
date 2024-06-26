import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({

  // This object ensures custom CSS edit
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  // Force dark mode on first visit
  appearance: 'dark',

  // Removes .html tag on web URL
  cleanUrls: true,

  markdown: {  
    toc: {
      level: [1,2,3] // Specify which header levels to include in the TOC
    },                                 
    math: true // Enables mathemathics module 
  },

  // changes source markdown directory to /src
  srcDir: 'src',
  base: '/klinikstatus/',
  title: "Klinikstatus",
  description: "Yes",



  // Customizes the website theme and displayed core elements.
  themeConfig: {
    outline: {
      level: 'deep',
      label: 'Table of contents'

    },


    // Displays in the footer section when the website was last updated. Ref: https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      text: 'Senast uppdaterad',
      formatOptions: {
        dateStyle: 'short'
      }
    },

    // Search bar
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Om', link: '/' },
      { text: 'Länkar', link: '/' }
    ],

    //Side bar
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath: 'src',
      collapsed: false,
      capitalizeFirst: true,
      hyphenToSpace: true,
      useTitleFromFileHeading: false,
      useTitleFromFrontmatter: false,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByName: true,
      excludeFilesByFrontmatter: true
    
  

    }),
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
