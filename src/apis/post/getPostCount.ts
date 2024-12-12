import getInstance from '../instance.ts';

async function getPostCount(boradId: string) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/boards/${boradId}/posts/count`);

  return data;
}

export default getPostCount;
