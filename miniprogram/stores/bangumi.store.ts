import { observable, action } from "mobx-miniprogram";
import { BehaviorWithStore } from "mobx-miniprogram-bindings";

import type {
  Calendar,
  BangumiItem,
  BangumiData,
} from "../types/bangumi-calendar";

export const bangumiStore = observable({
  // 变量
  bangumiData: {} as BangumiData,
  bangumiList: [] as BangumiItem[],
  bangumiCalendar: [] as Calendar[],

  // 番剧放送日历
  // get bangumiCalendar() {
  //   if (!this.bangumiData.calendar) return [];

  //   return calendar;
  // },

  // 动漫数据合集
  setBangumiData: action((data: BangumiData) => {
    bangumiStore.bangumiData = data;
  }),
  // 动漫放送日历
  setBangumiCalendar: action((data: Calendar[]) => {
    bangumiStore.bangumiCalendar = data;
  }),
});

export const bangumiBehavior = BehaviorWithStore({
  storeBindings: {
    store: bangumiStore,
    fields: ["bangumiCalendar", "setBangumiCalendar"],
    actions: ["update"],
  },
  pageLifetimes: {
    show: function () {
      // console.log(bangumiStore);
    },
  },
});
