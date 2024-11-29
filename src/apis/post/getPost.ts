import getInstance from '../instance.ts';

async function getPost(boradId: string, page: number) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/posts?boardId=${boradId}&page=${page}`);

  console.log(data);

  return data;
}

export default getPost;
