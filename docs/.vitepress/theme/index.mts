import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import ESCTPage from './components/ESCTPage.vue'
import ESTTPage from './components/ESTTPage.vue'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(HomePage)
    })
  },
  enhanceApp({ app }) {
    // register your custom global components
    app.component('ESCTPage', ESCTPage)
    app.component('ESTTPage', ESTTPage)
  }
} 