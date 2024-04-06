// components/home-bar/home-bar.ts

import type HomeBar from "../../types/home-bar"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList: <HomeBar[]>[
      { id: 1, name: "推荐" },
      { id: 2, name: "前端" },
      { id: 3, name: "后端" },
      { id: 4, name: "动漫" },
      { id: 5, name: "漫画" },
      { id: 6, name: "其他" }
    ],
    winRect: {
      width: 0
    },
    lineStyle: '',
    lineWrapperStyle: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tanInit() {
      try {
        const res = wx.getSystemInfoSync()
        this.setData({
          winRect: {
            width: Number(res.windowWidth.toFixed(2))
          },
          lineStyle: `width: ${res.windowWidth / this.data.navList.length * 0.60}px; background: black;`,
          lineWrapperStyle: `width: ${(res.windowWidth / this.data.navList.length).toFixed(2)}px; `
        })
      } catch (e) {
        // Do something when catch error
      }
    }
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.tanInit()
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})