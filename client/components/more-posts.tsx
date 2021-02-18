import { Post } from '../interfaces';

// components
import Article from './article';

export type MorePostsProps = {
  posts: Post[];
};
const MorePosts = ({ posts }: MorePostsProps) => {
  return (
    <section className="mt-32 ">
      <h2 className="text-3xl font-extrabold mb-5">More Articles</h2>
      <div className="grid grid-cols-2 gap-10">
        {posts.map((post: Post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
