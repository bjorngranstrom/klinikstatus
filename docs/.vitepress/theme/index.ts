// .vitepress/theme/index.ts
import './custom.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Ref from './components/Ref.vue'
import CorrectedSodium from './components/CorrectedSodium.vue'
import CustomFooter from './components/CustomFooter.vue'
const theme: Theme = {
  ...DefaultTheme,
  Layout: CustomFooter,
  enhanceApp({ app }) {
    app.component('Ref', Ref)
    app.component('CorrectedSodium', CorrectedSodium)
  }
}

export default theme

