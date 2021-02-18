import { Post } from '../interfaces';
import { toDate } from '../lib/format-date';
import AuthorCard from './author-card';

export type MorePostsProps = {
  posts: Post[];
};
const MorePosts = ({ posts }: MorePostsProps) => {
  return (
    <section className="mt-32 grid grid-cols-2 gap-10">
      {posts.map((post: Post) => (
        <article key={post.id} className="flex flex-col px-4">
          <img
            className="w-full object-contain"
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`}
            alt={post.title}
          />
          <div>
            <div>
              <h2 className="text-3xl mt-4 text-gray-900">{post.title}</h2>
              <span className="mt-2 text-gray-600">{toDate(post.published_at)}</span>
            </div>
            <p className="text-lg text-gray-900 mt-4">{post.description}</p>
            <AuthorCard author={post.author} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default MorePosts;
