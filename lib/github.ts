import { gql, GraphQLClient } from 'graphql-request';
import type { Query } from '../types/github';

export const getGitHubData = async () => {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${process.env.GH_TOKEN}`
    }
  });

  const query = gql`
    {
      user(login: "msmps") {
        repositories(last: 4, isFork: false, privacy: PUBLIC) {
          nodes {
            id
            name
            url
            description
          }
        }
      }
    }
  `;

  const response: Query = await client.request(query);
  return response;
};
