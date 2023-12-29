import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  environment: 'gcp-starter',
  apiKey: '5e1395d8-6335-4194-bca5-e1ef4185d492',
});
const index = pinecone.index('searchapi');

export const getResults = async () => {
  const queryResponse = await index.query({
    vector: [],
    topK: 8,
    includeValues: false,
    includeMetadata: true,
  });

  return queryResponse;
};
