export interface AnimeProp {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };

  airedEp: number;

  titles: [
    {
      type: string;
      title: string;
    },
  ];

  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  status: string;
  episodes: number;
  airing: boolean;
  aired: {
    string: string;
  };
  duration: string;
  score: number;
}
