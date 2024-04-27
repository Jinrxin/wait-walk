// 简介
export interface CharacterNoun {
  images: {
    small: string;
    grid: string;
    large: string;
    medium: string;
  };
  name: string;
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
// 详细信息
export interface CharacterDetail {
  birth_mon: string | null;
  gender: string;
  birth_day: string | null;
  birth_year: string | null;
  blood_type: string | null;
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
      value: [
        {
          k: string;
          v: string;
        },
        {
          k: string;
          v: string;
        },
        {
          k: string;
          v: string;
        },
        {
          k: string;
          v: string;
        },
        {
          k: string;
          v: string;
        },
        {
          k: string;
          v: string;
        }
      ];
    },
    {
      key: string;
      value: string;
    },
    {
      key: string;
      value: [
        {
          v: string;
        },
        {
          v: string;
        }
      ];
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

// 角色信息
export interface Character {
  noun: CharacterNoun;
  detail: CharacterDetail;
}
