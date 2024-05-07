interface Noun {
  images: {
    small: string;
    grid: string;
    large: string;
    medium: string;
  };
  name: string;
  name_cn: string | null;
  avatar: string | null;
  relation: string;
  actors: [
    {
      images: {
        small: string;
        grid: string;
        large: string;
        medium: string;
      };
      name: string;
      short_summary: string;
      career: string[];
      id: number;
      type: number;
      locked: boolean;
    }
  ];
  type: number;
  id: number;
}

interface Detail {
  birth_mon: null | string;
  gender: string;
  birth_day: null | string;
  birth_year: null | string;
  blood_type: null | string;
  images: {
    small: string;
    grid: string;
    large: string;
    medium: string;
  };
  summary: string;
  name: string;
  infobox: [
    {
      key: string;
      value: string;
    },
    {
      key: string;
      value: string;
    }
  ];
  stat: {
    comments: number;
    collects: number;
  };
  id: number;
  locked: boolean;
  type: number;
  nsfw: boolean;
}

export interface Character {
  noun: Noun;
  detail: Detail | null;
}

export interface CharacterList {
  noun: Noun[];
  detail: Detail[];
}
