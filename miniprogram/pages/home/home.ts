// pages/home/home.ts

import type Calendar from "../../types/bangumi-calendar";
import type RequestResult from "../../types/request-result";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    // 返回 0-6，0 表示星期天，1 表示星期一，以此类推
    dayOfWeek: null as number | null,
    activeIndex: 0,
    bangumiCalendar: [] as Calendar[],
  },

  /**
   * 日期选择回调
   * @param event
   */
  calendarChange(event: any) {
    const dataFromChild = event.detail.data;
    this.setData({
      scrollTop: 0,
      activeIndex: dataFromChild,
    });
  },

  /**
   * 获取动漫日历
   */
  async getCalendarData() {
    const that = this;
    wx.request({
      url:
        "https://npm.onmicrosoft.cn/bangumi-database@0.0.11/dist/calendar.json",
      success(res: RequestResult<Calendar[]>) {
        that.setData({
          bangumiCalendar: res.data,
        });
      },
    });
  },

  /**
   * 获取今天是周几
   */
  getTodayOfWeek() {
    // 返回 0-6，0 表示星期天，1 表示星期一，以此类推
    const today = new Date().getDay();
    this.setData({
      dayOfWeek: today,
    });
  },

  bangumiInit() {
    this.setData({
      activeIndex: this.data.dayOfWeek || 0,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          homeHeight: `height: calc(${res.windowHeight}px - var(--height-navigation) - ${res.safeArea.top}px)`,
        });
      },
    });
    this.getCalendarData();
    this.getTodayOfWeek();
    this.bangumiInit();
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
