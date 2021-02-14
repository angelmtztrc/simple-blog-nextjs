import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      id
      slug
      title
      description
      image {
        url
      }
      tags
      content
      author {
        username
        picture {
          url
        }
      }
      published_at
      updatedAt
    }
  }
`;
