import { GetStaticProps } from 'next';
import { Post } from '../interfaces';
import { gqlClient } from '../lib/graphql-client';
import { GET_ALL_POSTS } from '../graphql/queries';

// components
import Layout from '../components/layout';

export type HomePageProps = {
  hero: Post;
  posts: Post[];
};

const HomePage = ({ hero, posts }: HomePageProps) => {
  console.log(hero, posts);
  return (
    <Layout title="Home">
      <h1>Hello World!</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await gqlClient.query({ query: GET_ALL_POSTS });
  const posts: Post[] = data.posts;

  return {
    props: {
      hero: posts[0],
      posts: posts.slice(1)
    }
  };
};

export default HomePage;
