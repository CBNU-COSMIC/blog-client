import getInstance from '../instance.ts';

async function editComment(commentId: string, content: string) {
  const instance = await getInstance();
  await instance.put(`/api/comments/${commentId}`, JSON.stringify({ content }));
}

export default editComment;
