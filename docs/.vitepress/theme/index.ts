// .vitepress/theme/index.js
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import Ref from './components/Ref.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Ref', Ref)
  }
}

