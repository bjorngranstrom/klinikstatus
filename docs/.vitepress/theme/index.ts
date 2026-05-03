// .vitepress/theme/index.js
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import Ref from './components/Ref.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  ...DefaultTheme,
  Layout: CustomFooter,
  enhanceApp({ app }) {
    app.component('Ref', Ref)
  }
}

