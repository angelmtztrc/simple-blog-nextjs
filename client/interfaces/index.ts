export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  tags: string;
  content: string;
  author: {
    username: string;
    picture: {
      url: string;
    };
  };
  published_at: string;
  updatedAt: string;
}
