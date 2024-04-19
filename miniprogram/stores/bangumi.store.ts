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
  // },

  // 动漫数据合集
  setBangumiData: action((data: BangumiData) => {
    bangumiStore.bangumiData = data;
  }),
  // 动漫放送日历
  setBangumiCalendar: action((data: Calendar[]) => {
    data.forEach((day) => {
      day.items.forEach((item) => {
        if (item.data) {
          item.data.shanghaiTime = item.data.shanghaiTime
            .split(" ")[1]
            .substring(0, 5);
        }
        if (item.nextEpisode) {
          item.nextEpisode = item.nextEpisode
            .toString()
            .padStart(2, "0");
        }
      });
    });
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
