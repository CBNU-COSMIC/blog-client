import getInstance from '../instance.ts';

async function writePost(body: { board_id: string; title: string; content: string }) {
  const instance = await getInstance();
  await instance.post('/api/posts', JSON.stringify(body));
}

export default writePost;
