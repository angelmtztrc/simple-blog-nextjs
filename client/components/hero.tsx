import Link from 'next/link';
import { Post } from '../interfaces';
import { toDate } from '../lib/format-date';

// components
import AuthorCard from './author-card';

export type HeroProps = {
  post: Post;
};

const Hero = ({ post }: HeroProps) => {
  const publishedAt = toDate(post.published_at);
  return (
    <section>
      <div>
        <img
          className="w-full h-96 object-cover"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`}
          alt={post.title}
        />
      </div>
      <div className="md:grid md:grid-cols-2 mt-10 md:gap-16 lg:gap-8">
        <div>
          <h3 className="text-4xl font-bold text-gray-900 hover:underline">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>{post.title}</a>
            </Link>
          </h3>
          <div className="mt-2">
            <p className="text-base text-gray-800">{publishedAt}</p>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">{post.description}</p>
          <AuthorCard author={post.author} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
