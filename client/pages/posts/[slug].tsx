import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../interfaces';
import { gqlClient } from '../../lib/graphql-client';
import { GET_ALL_POSTS, GET_POST } from '../../graphql/queries';
import { toDate } from '../../lib/format-date';

// components
import Layout from '../../components/layout';
import AuthorCard from '../../components/author-card';
import Markdown from '../../components/markdown';

export type ArticleProps = {
  post: Post;
};

const Article = ({ post }: ArticleProps) => {
  const { title, image, tags, author, published_at, content } = post;
  return (
    <Layout title={title}>
      <article>
        <img
          className="w-full object-fill"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
          alt={title}
        />
        <div className="mt-10">
          <div className="mb-4">
            <h1 className="text-5xl font-extrabold text-gray-900">{title}</h1>
            <div className="w-20 h-2 bg-gray-900"></div>
          </div>
          <ul className="flex items-center space-x-2">
            {tags &&
              tags.split(',').map((tag: string) => (
                <li className="text-xs bg-gray-800 text-white px-2 py-1 rounded-lg" key={tag}>
                  {tag}
                </li>
              ))}
          </ul>
          <div className="mt-10 prose lg:prose-lg w-full max-w-full">
            <Markdown content={content} />
          </div>
          <div className="mt-5 flex items-center justify-between space-x-8">
            <AuthorCard author={author} />
            <p className="mt-4 text-gray-800">{toDate(published_at)}</p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

// fetch data of the post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await gqlClient.query({
    query: GET_POST,
    variables: {
      where: {
        slug: params?.slug || ''
      }
    }
  });

  return {
    props: { post: data.posts[0] }
  };
};

// generate routes in pre-build time
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await gqlClient.query({ query: GET_ALL_POSTS });
  const posts: Post[] = data.posts;

  // get the path we want
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
};

export default Article;
