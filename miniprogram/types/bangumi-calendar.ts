interface WeekDay {
  id: number;
  en: string;
  cn: string;
  ja: string;
}
// 日历数据
export interface BangumiItemByCalendar {
  id: number;
  url: string;
  type: number;
  name: string;
  name_cn: string;
  summary: string;
  air_date: string;
  air_weekday: number;
  rating: {
    total: number;
    count: {
      [key: string]: number;
    };
    score: number;
  };
  rank: number;
  images: {
    large: string;
    common: string;
    medium: string;
    small: string;
    grid: string;
  };
  collection: {
    doing: number;
  };
}
// 日历类型
export interface Calendar {
  weekday: WeekDay;
  items: BangumiItemByCalendar[];
}

// 总数据
export interface BangumiItem {
  title: string;
  titleTranslate: {
    "zh-Hans": [string];
  };
  type: string;
  lang: string;
  officialSite: string;
  begin: string;
  broadcast: string;
  end: string;
  comment: string;
  sites: [
    {
      site: string;
      id: string;
    },
    {
      site: string;
      id: string;
      begin: string;
      broadcast: string;
    }
  ];
  image: string;
}

// 动漫数据类型
export interface BangumiData {
  items: BangumiItem[];
  calendar: Calendar[];
}
