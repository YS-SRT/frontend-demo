// index.js
const app = getApp()
const util = require("../../utils/util.js")

Page({
  data: {
    motto: '点击进入',
    userInfo: {
      avatarUrl: "",
      nickName: "",
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  onShow(){
    wx.hideHomeButton()
  },

  bindViewTap() {
    wx.setStorageSync("userType", "visitor")
    wx.switchTab({
      url: "../aichat/index", //?userType=visitor' //only work for wx.navigateTo
    })
  },
  getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  })
