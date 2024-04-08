// components/home-bar/home-bar.ts

import type CalendarBar from "../../types/calendar-bar";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList: <CalendarBar[]>[
      { id: 1, name: "周一" },
      { id: 2, name: "周二" },
      { id: 3, name: "周三" },
      { id: 4, name: "周四" },
      { id: 5, name: "周五" },
      { id: 6, name: "周六" },
      { id: 7, name: "周日" },
    ],
    winRect: {
      width: 0,
    },
    lineStyle: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化信息
    tanInit() {
      try {
        const res = wx.getSystemInfoSync();
        this.setData({
          winRect: {
            width: Number(res.windowWidth.toFixed(2)),
          },
          lineStyle: `width: ${
            (res.windowWidth / this.data.navList.length) * 0.7
          }px;`,
        });
      } catch (e) {
        // Do something when catch error
      }
    },
    // 子组件中的某个事件，当需要传递数据给父组件时触发该事件
    triggerCalenderChange(
      event: WechatMiniprogram.TouchEvent<{ index: number }>
    ) {
      // 通过 triggerEvent 触发自定义事件，传递数据给父组件
      const index = event.currentTarget.dataset.index;
      this.triggerEvent("calendarChange", { data: index });
    },
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.tanInit();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
});
