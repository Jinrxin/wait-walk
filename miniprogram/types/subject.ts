// 动漫主题类型
export interface Subject {
  id: number;
  url: string;
  type: number;
  name: string;
  name_cn: string;
  summary: string;
  eps: number;
  eps_count: number;
  air_date: string;
  air_weekday: number;
  rating: {
    total: number;
    count: {
      "1": number;
      "2": number;
      "3": number;
      "4": number;
      "5": number;
      "6": number;
      "7": number;
      "8": number;
      "9": number;
      "10": number;
    };
    score: 7.5;
  };
  rank: 838;
  images: {
    large: string;
    common: string;
    medium: string;
    small: string;
    grid: string;
  };
  collection: {
    wish: number;
    collect: number;
    doing: number;
    on_hold: number;
    dropped: number;
  };
}
