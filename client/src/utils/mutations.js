import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($projectText: String!) {
    addProject(projectText: $projectText) {
      _id
      projectText
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($projectId: ID!, $commentText: String!) {
    addComment(projectId: $projectId, commentText: $commentText) {
      _id
      projectText
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
