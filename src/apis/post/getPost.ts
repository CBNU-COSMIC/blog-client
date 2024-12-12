import getInstance from '../instance.ts';

async function getPost(boradId: string, page: string) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/posts?boardId=${boradId}&page=${page}`);

  return data;
}

export default getPost;
