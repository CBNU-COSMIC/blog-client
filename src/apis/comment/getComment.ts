import getInstance from '../instance.ts';

async function getComment(postId: string) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/comments?postId=${postId}`);

  return data;
}

export default getComment;
