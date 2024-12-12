import getInstance from '../instance.ts';

async function writeComment(body: { post_id: string; content: string }) {
  const instance = await getInstance();
  await instance.post('/api/comments', JSON.stringify(body));
}

export default writeComment;
