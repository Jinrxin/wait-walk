import { bangumiBehavior } from "../../stores/bangumi.store";

interface BangumiDetail {
  id: string | null;
}

Page({
  behaviors: [bangumiBehavior],
  data: <BangumiDetail>{
    id: null,
  },

  /**
   * 数据初始化
   */
  async init() {
    // 页面高度计算
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: `height: calc(${res.windowHeight}px - var(--height-navigation) - ${res.safeArea.top}px)`,
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(query: Record<string, string | undefined>) {
    this.init();
    // 接收参数
    this.setData({
      id: query.id,
    });
    // console.log('id', JSON.parse(options.id))
  },
});
