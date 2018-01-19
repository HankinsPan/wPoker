//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')

Page({
  data: {
    mode: 'scaleToFill',
    src: '../../images/ic_arrow_down.png'
  },


  loadMore(e) {
  },

  getNextDate() {
    const now = new Date()
    now.setDate(now.getDate() - this.index++)

    console.log('getNextDate ->', now);

    return now
  },

  onLoad() {
    let that = this

  }
})
