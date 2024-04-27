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
    navList: [
      { id: 1, name: "简介" },
      { id: 2, name: "角色" },
      { id: 3, name: "放送" },
      { id: 4, name: "制作" },
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
            ((res.windowWidth - 12) / this.data.navList.length) * 0.5
          }px;`,
        });
      } catch (e) {
        // Do something when catch error
      }
    },
    // 子组件中的某个事件，当需要传递数据给父组件时触发该事件
    triggerDetailChange(
      event: WechatMiniprogram.TouchEvent<{ index: number }>
    ) {
      // 通过 triggerEvent 触发自定义事件，传递数据给父组件
      const index: number = event.currentTarget.dataset.index;
      this.triggerEvent<{ data: number }>("detailChange", { data: index });
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
