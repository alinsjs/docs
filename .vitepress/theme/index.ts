/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 13:17:31
 * @Description: Coding something
 */
import { createApp, h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/index.css'
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';// Then register the languages you need
import CodeBox from './component/code-box.vue'
import CodeCompare from './component/code-compare.vue'
import ViewImg from './component/view-img.vue'
// import Playground from './component/playground.vue'
import Text from './component/highlight.vue'
// import HomeSponsors from './components/HomeSponsors.vue'
// import AsideSponsors from './components/AsideSponsors.vue'
// import SvgImage from './components/SvgImage.vue'

hljs.registerLanguage('javascript', javascript);

export default {
  ...Theme,
  Layout() {
    // todo build报错
    // createApp(Playground).mount('#PlayGround');
    return h(Theme.Layout, null, {
      // 'home-features-after': () => h(HomeSponsors),
      // 'aside-ads-before': () => h(AsideSponsors),
    })
  },
  enhanceApp({ app }) {
    app.component('CodeBox', CodeBox);
    app.component('CodeCompare', CodeCompare);
    app.component('ViewImg', ViewImg);
    app.component('Text', Text);
  },
}