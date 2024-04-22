import { bangumiBehavior } from "../../stores/bangumi.store";
import type RequestResult from "../../types/request-result";
import type { Subject } from "../../types/subject";

interface BangumiDetail {
  id: string | null;
  subject: Subject;
}

Page({
  behaviors: [bangumiBehavior],
  data: <BangumiDetail>{
    id: null,
    subject: {},
  },

  /**
   * 获取动漫信息
   */
  async getBangumiSubject(id: number) {
    const that = this;
    wx.request({
      url: `https://npm.onmicrosoft.cn/bangumi-database@0.2.9/dist/subject/${id}.json`,
      success(res: RequestResult<Subject>) {
        that.setData({
          subject: res.data,
          background: `background-image: url(${res.data.images.large})`,
        });
      },
    });
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
    // if (!query.id) return;
    this.getBangumiSubject(Number(query.id) || 372010);
    // console.log('id', JSON.parse(options.id))
  },
});
