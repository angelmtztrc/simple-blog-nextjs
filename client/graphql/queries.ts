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

export const GET_POST = gql`
  query getPost($where: JSON!) {
    posts(where: $where) {
      id
      slug
      title
      tags
      description
      image {
        url
      }
      content
      author {
        username
        picture {
          url
        }
      }
      published_at
    }
  }
`;
