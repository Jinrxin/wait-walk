// components/bangumi-card/bangumi-card.ts

import type { BangumiItemByCalendar } from "../../types/bangumi-calendar";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bangumi: {
      type: Object,
      value: {} as BangumiItemByCalendar,
      observer: function () {
        this.setData({
          loading: true,
        });
      },
      // 箭头函数无this
      // observer: function(newValue, oldValue){
      // }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    load() {
      setTimeout(() => {
        this.setData({
          loading: false,
        });
      }, 100);
    },
    error() {
      this.setData({
        loading: false,
      });
    },
    tap(
      event: WechatMiniprogram.TouchEvent<{ id: number }>
    ) {
      // 通过 triggerEvent 触发自定义事件，传递数据给父组件
      const id: number  = event.currentTarget.dataset.id;    
      this.triggerEvent<{ data: number }>("triggerTap", { data: id });
    },
  },
});
