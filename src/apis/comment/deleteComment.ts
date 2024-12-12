import getInstance from '../instance.ts';

async function deleteComment(commentId: string) {
  const instance = await getInstance();
  await instance.delete(`/api/comments/${commentId}`);
}

export default deleteComment;
