//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://oskpmz186.bkt.clouddn.com/WechatIMG293.jpeg',
      'http://oskpmz186.bkt.clouddn.com/WechatIMG296.jpeg',
      'http://oskpmz186.bkt.clouddn.com/WechatIMG295.jpeg',
      'http://oskpmz186.bkt.clouddn.com/WechatIMG297.jpeg',
      'http://oskpmz186.bkt.clouddn.com/WechatIMG294.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    s_name: ''
  },
  onLoad: function () {
    const self = this
    wx.request({
      url: app.globalData.baseUrl + '/admin/index/test',
      method: 'GET',
      success: function (res) {
        console.log(res)
        self.setData({
          s_name: res.data.data.s_name,
          s_owner: res.data.data.s_owner,
          s_tel: res.data.data.s_tel,
          s_addr: res.data.data.s_addr,
          s_intro: res.data.data.s_intro
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  onShow: function() {

  },
  markertap(e) {
    console.log(e)
  },
  onShareAppMessage: function(res) {
    return {
      title: this.data.s_name+'欢迎您',
      path: 'pages/index/index',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      }
    }
  },
  callOwner: function() {
    wx.makePhoneCall({
      phoneNumber: '13548667520',
    })
  }
})
