import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { withMermaid } from 'vitepress-plugin-mermaid';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({

  
  ignoreDeadLinks: true, // Ignores dead links in the documentation
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

  // Build hook to copy PDFs
  buildEnd() {
    const filesToCopy = [
      {
        source: 'docs/src/taligenkänning/tik.pdf',
        destination: 'docs/.vitepress/dist/taligenkänning/tik.pdf',
        label: 'tik.pdf'
      },
      {
        source: 'docs/public/robots.txt',
        destination: 'docs/.vitepress/dist/robots.txt',
        label: 'robots.txt'
      },
      {
        source: 'docs/public/sitemap.xml',
        destination: 'docs/.vitepress/dist/sitemap.xml',
        label: 'sitemap.xml'
      },
      {
        source: 'docs/public/google26f115ee6d94ab70.html',
        destination: 'docs/.vitepress/dist/google26f115ee6d94ab70.html',
        label: 'google verification file'
      }
    ];

    for (const file of filesToCopy) {
      try {
        if (!existsSync(file.source)) {
          console.warn(`Skipped ${file.label}: source file not found (${file.source})`);
          continue;
        }

        mkdirSync(dirname(file.destination), { recursive: true });
        copyFileSync(file.source, file.destination);
        console.log(`✓ Copied ${file.label} to dist`);
      } catch (e) {
        console.error(`Failed to copy ${file.label}:`, e);
      }
    }
  },



  // Customizes the website theme and displayed core elements.
  themeConfig: {
    outline: {
      level: [2, 3 ],
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
      { text: 'Hippokrates Lärljunge', link: 'hippokrates-lärljunge/hippokrates-lärljunge.md' },
      { text: 'Om', link: 'om.md' },
      { text: 'Kontakt', link: 'kontakt.md' },
      { text: 'Källkod', link: 'https://github.com/bjorngranstrom/klinikstatus' }
      
      
    ],

    //Side bar
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath: 'src',
      collapsed: true,
      capitalizeFirst: true,
      hyphenToSpace: true,
      useTitleFromFileHeading: false,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: false,
      sortMenusByName: true,
      excludeFilesByFrontmatter: false,
      excludeFiles: ['om.md', 'kontakt.md'],
      excludeFolders: [],
    

    }),
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bjorngranstrom/klinikstatus' }
    ]
  }
}))
