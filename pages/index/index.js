//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    src: "http://img3.imgtn.bdimg.com/it/u=1262844727,1897845955&fm=214&gp=0.jpg",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    console.log('onLoad');
    wx.setNavigationBarTitle({
      title: '浏阳云商汇',
    })
  },
  markertap(e) {
    console.log(e)
  },
  onShareAppMessage: function(res) {
    return {
      title: '浏阳金狮广告欢迎您',
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
