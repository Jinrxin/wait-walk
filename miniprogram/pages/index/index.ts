// pages/home/home.ts
import { bangumiStore, bangumiBehavior } from "../../stores/bangumi.store";

import type { Calendar, BangumiData } from "../../types/bangumi-calendar";
import type RequestResult from "../../types/request-result";

Page({
  behaviors: [bangumiBehavior],
  data: {
    scrollTop: 0,
    activeIndex: 0,
    dayOfWeek: null as number | null, // 返回 0-6，0 表示星期天，1 表示星期一，以此类推
  },

  /**
   * 日期选择回调
   * @param event
   */
  calendarChange(event: { detail: { data: number } }) {
    const index = event.detail.data;
    this.setData({
      scrollTop: 0,
      activeIndex: index,
    });
  },

  /**
   * 获取动漫数据
   */
  async getBangumiData() {
    wx.request({
      url: "https://npm.onmicrosoft.cn/bangumi-database@latest/dist/data.json",
      success(res: RequestResult<BangumiData>) {
        bangumiStore.setBangumiData(res.data);
      },
    });
  },
  /**
   * 获取动漫日历数据
   */
  async getCalendarData() {
    wx.request({
      url:
        "https://npm.onmicrosoft.cn/bangumi-database@latest/dist/calendar.json",
      success(res: RequestResult<Calendar[]>) {
        // 获取周日的番组
        const sunday = res.data.slice(6, 7);
        // 获取其它日期的番组
        const otherDays = res.data.slice(0, 6);
        const calendar: Calendar[] = [...sunday, ...otherDays];
        bangumiStore.setBangumiCalendar(calendar);
      },
    });
  },
  /**
   * 数据初始化
   */
  async bangumiInit() {
    // 页面高度计算
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          homeHeight: `height: calc(${res.windowHeight}px - var(--height-navigation) - ${res.safeArea.top}px)`,
        });
      },
    });
    await this.getCalendarData();
    await this.getBangumiData();
    // 返回 0-6，0 表示星期天，1 表示星期一，以此类推
    const today = new Date().getDay();
    this.setData({
      dayOfWeek: today,
      activeIndex: today || 0,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.bangumiInit();
  },
});
