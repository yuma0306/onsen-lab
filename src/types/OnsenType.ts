export interface OnsenType {
  id: number;
  name: string;
  slug: string;
  pref: {
    name: string;
    slug: string;
  };
  images: string[];
  desc: string;
};
