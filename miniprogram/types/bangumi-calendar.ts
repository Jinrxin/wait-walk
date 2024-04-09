interface WeekDay {
  id: number;
  en: string;
  cn: string;
  ja: string;
}

export interface BangumiItem {
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
export default interface Calendar {
  weekday: WeekDay;
  items: BangumiItem[];
}
