import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Link {
    id: ID!
    originalUrl: String!
    shortCode: String!
    clicks: Int!
    createdAt: String!
  }

  type Query {
    getLink(shortCode: String!): Link
    getAnalytics(shortCode: String!): Int
  }

  type Mutation {
    createShortLink(originalUrl: String!): Link!
    incrementClicks(shortCode: String!): Link
  }
`;
