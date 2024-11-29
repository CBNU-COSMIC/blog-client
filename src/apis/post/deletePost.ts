import getInstance from '../instance.ts';

async function deletePost(postId: string) {
  const instance = await getInstance();
  await instance.delete(`/api/posts/${postId}`);
}

export default deletePost;
