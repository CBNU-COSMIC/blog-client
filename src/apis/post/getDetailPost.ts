import getInstance from '../instance.ts';

async function getDetailPost(postId: string) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/posts/${postId}`);

  return data;
}

export default getDetailPost;
