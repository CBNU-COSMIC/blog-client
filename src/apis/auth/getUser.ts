import getInstance from '../instance.ts';

async function getUser() {
  const instance = await getInstance();
  const { data } = await instance.get('/api/auth/user', {
    withCredentials: true,
  });

  return data;
}

export default getUser;
