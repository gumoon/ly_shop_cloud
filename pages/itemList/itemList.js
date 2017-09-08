// itemList.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    grids: [{
      title: "1111",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG293.jpeg"
    },
    {
      title: "2222",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG296.jpeg"
      },
      {
        title: "3333",
        pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG296.jpeg"
    }, 
    {
      title: "4444",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG293.jpeg"
    },
    {
      title: "5555",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG296.jpeg"
    },
    {
      title: "6666",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG296.jpeg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.cat_id);
    var aI = 1;
    if ('undefined' !== typeof options.cat_id) {
      aI = options.cat_id;
    }

    wx.request({
      url: app.globalData.baseUrl + '/api/v1/shop/listByCatId',
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
        });
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉');
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: function(){
        console.log('loading success');
      }
    });
    var newarray = [{
      title: "xxxx",
      pic_url: "http://oskpmz186.bkt.clouddn.com/WechatIMG294.jpeg"
    }];

    this.setData({
      grids: this.data.grids.concat(newarray)
    });
    console.log('onReachBottom');
    setTimeout(function(){
      wx.hideLoading();
    }, 2000)
    // 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})