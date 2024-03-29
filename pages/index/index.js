//index.js

var WxParse = require('../../utils/wxParse/wxParse.js');
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
    s_name: '',
    grids: [{
      title: "灯箱",
      logo: "/resources/icon/灯箱.png",
      src: "/pages/itemList/itemList?cat_id=1",
      cat_id: 1
    },
    {
      title: "字",
      logo: "/resources/icon/字.png",
      src: "/pages/itemList/itemList?cat_id=2",
      cat_id: 2
    },
    {
      title: "标牌",
      logo: "/resources/icon/标牌.png",
      src: "/pages/itemList/itemList?cat_id=3",
      cat_id: 3
    },
    {
      title: "喷画",
      logo: "/resources/icon/喷画.png",
      src: "/pages/itemList/itemList?cat_id=4",
      cat_id: 4
    }, 
    {
      title: "促销",
      logo: "/resources/icon/促销.png",
      src: "/pages/itemList/itemList?cat_id=5",
      cat_id: 5
    },
    {
      title: "展柜",
      logo: "/resources/icon/展柜.png",
      src: "/pages/itemList/itemList?cat_id=6",
      cat_id: 6
    },
    {
      title: "店招",
      logo: "/resources/icon/店招.png",
      src: "/pages/itemList/itemList?cat_id=7",
      cat_id: 7
    },
    {
      title: "印刷",
      logo: "/resources/icon/印刷.png",
      src: "/pages/itemList/itemList?cat_id=8",
      cat_id: 8
    },
    {
      title: "设计",
      logo: "/resources/icon/设计.png",
      src: "/pages/itemList/itemList?cat_id=9",
      cat_id: 9
    },
    {
      title: "全部",
      logo: "/resources/icon/全部.png",
      src: "/pages/itemList/itemList?cat_id=0",
      cat_id: 0
    }]
  },
  onLoad: function () {
    const self = this
    wx.request({
      url: app.globalData.baseUrl + '/api/v1/shop/show',
      method: 'GET',
      success: function (res) {
        console.log(res)
        self.setData({
          s_name: res.data.data.s_name,
          s_owner: res.data.data.s_owner,
          s_tel: res.data.data.s_tel,
          s_addr: res.data.data.s_addr,
          s_intro: res.data.data.s_intro
        });
        var intro = res.data.data.s_intro;
        WxParse.wxParse('intro', 'html', intro, self, 5);
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
