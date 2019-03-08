// pages/welcome/welcome.js
Page({
  data: {
    nickName: '',
    avatar: '',
    animation:"running"
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function(res){
        that.setData({
          nickName: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        });
      },
      fail: function(res) {
        console.log('fail!');
      }
    });
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.title = '略略略'
    innerAudioContext.epname = '花粥'
    innerAudioContext.singer = '花粥'
    innerAudioContext.coverImgUrl = 'https://img3.doubanio.com/view/group_topic/l/public/p28430810.webp'
    innerAudioContext.src = 'http://192.168.100.139/lueluelue.mp3'
    innerAudioContext.loop = true;
    innerAudioContext.play()
    this.music = innerAudioContext;
  },
  viewTap: function () {
    wx.switchTab({
      url: '../home/home',
    });
  },
  music_control:function(){
    if (this.data.animation == "running") {
      this.music.pause()
      this.setData({ animation: "paused" })
    } else {
      this.music.play();
      this.setData({ animation: "running" })
    }
  }
})