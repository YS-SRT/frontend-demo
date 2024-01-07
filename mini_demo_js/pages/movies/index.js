// pages/friends/index.js
const app = getApp()
const util = require("../../utils/util.js")

Page({

  data: {
    banner:[
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/movie1.png`},
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/movie2.png`},
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/movie3.png`},
    ]
  },

  onLoad() {
  },
  onReady() {
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }

  },
  onHide() {
  },
  onUnload() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
    util.shareWithFriend()
  }
})