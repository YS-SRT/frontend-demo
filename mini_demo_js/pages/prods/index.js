// pages/prods/index.ts
const app = getApp()
const util = require("../../utils/util.js")
const prodMockData = require("../../mock-data/prod-data.js")

Page({

  data: {
    imagePath: "/images/prod/",
    banner:[
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/swiper1.png`},
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/swiper2.png`},
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/swiper1.png`},
      {"link":"/pages/login/login", "imageUrl":`${util.swiperImgDir}/swiper2.png`},
    ],
    categoryList: prodMockData.getCategoryList(),
    prodList: prodMockData.getAllProds()
  },


  onLoad() {
    //self.getProdData(30)
    console.log(this.data.prodList)
    console.log()
  },


  onShow() {
    // bottom tab
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  onHide() {
    //生命周期函数--监听页面隐藏
  },

  onUnload() {
     //生命周期函数--监听页面卸载
  },

  onPullDownRefresh() {
     //页面相关事件处理函数--监听用户下拉动作
  },

  onReachBottom() {
     //页面上拉触底事件的处理函数
  },

  onShareAppMessage() {
    util.shareWithFriend()
  },

  tabChangeHandle(e) {
    //this.getProdData(pid=e.detail.value);
    console.log(e.detail)
  },
  clickHandle(e){
     console.log(e.detail)
  }, 
  tabIndex(e){
    console.log(e.detail)
  },
  getProdData(limit, pid){
     let url = app.globalData.apiBase + "prods/getTop?each_limit=" + limit

     wx.showLoading({
      title: '获取数据中...',
      mask: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {
        wx.request({
          url: url,
          dataType: "json",
          success: (resp)=>{
              self.paserProdResp(resp.data)
          },
          fail:(resp)=>{
            console.log(resp)
          }
        })

        wx.hideLoading(
          {noConflict: true,
            success: (res) => {},
            fail: (res) => {},
            complete:(res) =>{
            },
          }
        )
      }
     })


     
  },
  paserProdResp(data){
     //paser data
     this.setData({
       prodCollection: paseredData
     })
  }

  

})