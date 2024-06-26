Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    show: {
      // 显示隐藏导航，隐藏的时候navigation-bar的高度占位还在
      type: Boolean,
      value: true,
      observer: '_showChange'
    },
    delta: {
      // back为true的时候，返回的页面深度
      type: Number,
      value: 1
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    displayStyle: ''
  },

  /**
   * 初始化导航栏位置信息
   */
  lifetimes: {
    attached() {
      const rect = wx.getMenuButtonBoundingClientRect()
      wx.getSystemInfo({
        success: (res) => {
          const isAndroid = res.platform === 'android'
          const isDevtools = res.platform === 'devtools'

          this.setData({
            ios: !isAndroid,
            // 无中生有， 初始化导航栏位置
            leftWidth: `width: ${44}px`,
            innerWidth: `width: ${res.windowWidth}px`,
            innerPaddingRight: `padding-right: ${res.windowWidth - rect.left}px`,
            safeAreaTop: isDevtools || isAndroid ? `height: calc(var(--height) + ${res.safeArea.top}px); padding-top: ${res.safeArea.top}px` : ``
          })
        }
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _showChange(show: boolean) {
      this.setData({
        displayStyle: `display: ${show ? '' : 'none'}`
      })
    },
    // 返回上一页
    back() {
      const data = this.data
      if (data.delta) {
        wx.navigateBack({
          delta: data.delta
        })
      }
      this.triggerEvent('back', { delta: data.delta }, {})
    }
  },
})
