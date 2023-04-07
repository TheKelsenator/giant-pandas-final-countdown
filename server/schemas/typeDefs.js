const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Project {
    _id: ID
    name: String
    createdAt: String
    projectText: String
    comments: [Comment]!
}

type Comment {
    _id: ID
    commentText: String
    createAt: String
}

type Query {
    projects: [Project]!
    project(projectId: ID!): Project
}

type Mutation {
    addProject(name: String!, projectText: String!): Project
    addComment(commentId: ID!, commentText: String!): Project
    removeProject(projectId: ID!): Project
    removeComment(projectId: ID!, commentId: ID!): Project
}
`;

module.exports = typeDefs;