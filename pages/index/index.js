//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')

Page({
  data: {
    mode: "scaleToFill",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 2000,
  },

  onLoad() {
    var array = this.data.imgUrls;

    console.log("fuck imgUrls ->", this.data.imgUrls);
  }


})