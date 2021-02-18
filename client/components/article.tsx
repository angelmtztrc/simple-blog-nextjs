import Link from 'next/link';
import { Post } from '../interfaces';
import { toDate } from '../lib/format-date';

// components
import AuthorCard from './author-card';

export type ArticleProps = {
  post: Post;
};
const Article = ({ post }: ArticleProps) => {
  return (
    <article key={post.id} className="flex flex-col">
      <img
        className="w-full object-contain"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`}
        alt={post.title}
      />
      <div>
        <div>
          <h3 className="text-3xl mt-4 text-gray-900 hover:underline">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>{post.title}</a>
            </Link>
          </h3>
          <span className="mt-2 text-gray-600">{toDate(post.published_at)}</span>
        </div>
        <p className="text-lg text-gray-900 mt-4">{post.description}</p>
        <AuthorCard author={post.author} />
      </div>
    </article>
  );
};

export default Article;
