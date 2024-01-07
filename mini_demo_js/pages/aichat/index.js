// pages/aichat/index.js
const app = getApp()
const util = require("../../utils/util.js")
const aiMockMsgs = ["你太聪明了，我都不知道这些！","我只能寻求chatGPT的帮助了。","我们一起找找答案吧！"]
Page({

  data: {
    mess : "",
    content: [{
      "id" : 1, 
      "text" : "你好，我是YS-SRT机器人，有什么问题可以直接咨询我的，嘿嘿！",
      "date" : util.formatTime()
    }], 
    mineAvatorSrc : "/images/avatar/default_avatar.png",
    aiAvatorSrc : "/images/avatar/ai_avatar.png",
    
	},

  onLoad(params) {
    // let userType = params.userType
    // console.log("userType", userType)
    // if (!userType) userType = wx.getStorageSync("userType") 
    // this.setData({username: userType}) 

  },
  onReady() {
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
     util.shareWithFriend()
  },
   
  sendMessage(){
  let that = this;
  let mess = that.data.mess;
	let content = that.data.content;
	let date = util.formatTime();
    wx.showLoading({
      title: '发送ing...',
      mask: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {
        let his = content.concat([{
          "id" : 0, 
          "text" : mess,
          "date" : date
        }])
        that.setData({
             content: his,
             mess:"",
             toBottom : `item${that.data.content.length - 1}`
        })
        console.log(this.data)

        wx.hideLoading({noConflict: true,
          success: (res) => {},
          fail: (res) => {},
          complete:(res) =>{
            this.appendAIResp(aiMockMsgs[util.randomIndex(aiMockMsgs.length)])
          },
        })

        // invoke real AI Proxy here
        // resp = this.invokeAIProxy(that.data.content)
        // this.appendAIResp(resp)
      },
    })
  },

  invokeAIProxy(content){
    let his = ""
    for(item in content){
      his += item.id === 1? `AI:${item.text}`: `Human:${item.text}`
    }
    return chatGPTClient.sendMessage(his).slice(his.length)
  },

  appendAIResp(resp){
    let his = this.data.content.concat([{
      "id":1,
      "text":resp,
      "date": util.formatTime()
    }])
    this.setData({
      content: his,
      toBottom : `item${this.data.content.length - 1}`
    })
  },

  avoidWarn(){
    //WTF
  }
  
})