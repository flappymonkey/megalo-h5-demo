import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)
const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/page1/index',
      'pages/page2/index'
    ],
    subPackages: [
      {
        root: 'package-main',
        pages: [
          'pages/page1/index',
          'pages/page2/index'
        ]
      }
    ],
    tabBar: {
      color: '#333',
      selectedColor: '#007d37',
      list: [
        {
          pagePath: 'pages/hello/index',
          text: 'home',
          iconPath: 'native/tabbar/home.png',
          selectedIconPath: 'native/tabbar/home_on.png'
        },
        {
          pagePath: 'pages/my/index',
          text: 'my',
          iconPath: 'native/tabbar/mine.png',
          selectedIconPath: 'native/tabbar/mine_on.png'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo project',
      navigationBarTextStyle: 'black'
    }
  }
}
