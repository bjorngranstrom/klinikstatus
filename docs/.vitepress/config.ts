import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({

 

  // Enables mathemathics module 
  markdown: {  
    toc: {
      level: [2] // Specify which header levels to include in the TOC
    },                                 
    math: true
  },

  // changes source markdown directory to /src
  //srcDir: 'src',
  base: '/klinikstatus/',
  title: "Klinikstatus",
  description: "Yes",



  // Customizes the website theme and displayed core elements.
  themeConfig: {


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
