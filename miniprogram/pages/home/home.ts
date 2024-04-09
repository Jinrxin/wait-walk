// pages/home/home.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
  },

  /**
   * 日期选择回调
   * @param event
   */
  calendarChange(event: any) {
    const dataFromChild = event.detail.data;
    this.setData({
      activeIndex: dataFromChild,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const rect = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          // 无中生有， 初始化导航栏位置
          homeHeight: `height: calc(${res.windowHeight}px - var(--height-navigation) - ${res.safeArea.top}px)`,
          // containerHeight: `height: calc(${res.windowHeight}px - var(--height-navigation) - ${res.safeArea.top}px - var(--height-calender)- var(--height-second-navigation) - var(--height-tip))`,
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
