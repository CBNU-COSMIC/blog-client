import getInstance from '../instance.ts';

async function getMyInfo() {
  const instance = await getInstance();
  const { data } = await instance.get('/api/users/me');

  return data;
}

export default getMyInfo;
