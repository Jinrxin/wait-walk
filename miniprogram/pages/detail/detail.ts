import { bangumiBehavior } from "../../stores/bangumi.store";
import { Character } from "../../types/character";
import type RequestResult from "../../types/request-result";
import type { Subject } from "../../types/subject";

interface BangumiDetail {
  id: string | null;
  subject: Subject;
  index: number;
}

Page({
  behaviors: [bangumiBehavior],
  data: <BangumiDetail>{
    id: null,
    index: 0,
    subject: {},
  },

  /**
   *
   * @param event
   */
  detailChange(event: { detail: { data: number } }) {
    const index = event.detail.data;
    this.setData({
      // scrollTop: 0,
      index: index,
    });
  },

  /**
   * 获取动漫信息
   */
  async getBangumiSubject(id: number) {
    const that = this;
    wx.request({
      url: `https://npm.onmicrosoft.cn/bangumi-database@latest/dist/subject/${id}.json`,
      success(res: RequestResult<Subject>) {
        const tags = res.data.tags.sort((a, b) => b.count - a.count);
        const showTags = tags.filter((tag) => {
          return tag.name.length > 1 && tag.name.length < 4;
        });
        that.setData({
          tags: showTags.slice(0, 4),
          subject: res.data,
          background: `background-image: url(${res.data.images.large})`,
        });
      },
    });
  },

  /**
   * 获取动漫角色信息
   * @param id 动漫ID
   */
  async getSubjectCharacters(id: number) {
    const that = this;
    wx.request({
      url: `https://api.bgm.tv/v0/subjects/${id}/characters`,
      success(res: RequestResult<Character>) {
        console.log(res.data);
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
    // this.getSubjectCharacters(Number(query.id) || 372010);
    
    // console.log('id', JSON.parse(options.id))
  },
});
