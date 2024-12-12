import getInstance from '../instance.ts';

async function editPost(postId: string, title: string, content: string) {
  const instance = await getInstance();
  await instance.put(`/api/posts/${postId}`, JSON.stringify({ title, content }));
}

export default editPost;
