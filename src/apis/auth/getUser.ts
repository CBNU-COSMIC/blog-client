import getInstance from '../instance.ts';

async function getUser() {
  const instance = await getInstance();
  const { data } = await instance.get('/api/auth/user');

  return data;
}

export default getUser;
