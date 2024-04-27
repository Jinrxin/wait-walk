// 动漫主题类型
interface SubjectTag {
  name: string;
  count: number;
}

interface SubjectInfobox {
  key: string;
  value: string;
}

export interface Subject {
  id: number;
  eps: number;
  volumes: number;
  locked: boolean;
  nsfw: boolean;
  type: number;
  date: string;
  platform: string;
  images: {
    small: string;
    grid: string;
    large: string;
    medium: string;
    common: string;
  };
  summary: string;
  name: string;
  name_cn: string;
  tags: SubjectTag[];
  infobox: SubjectInfobox[];
  rating: {
    rank: number;
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
    score: number;
  };
  total_episodes: number;
  collection: {
    on_hold: number;
    dropped: number;
    wish: number;
    collect: number;
    doing: number;
  };
}
