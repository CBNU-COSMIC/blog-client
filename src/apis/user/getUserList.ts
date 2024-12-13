import getInstance from '../instance.ts';

async function getUserList() {
  const instance = await getInstance();
  const { data } = await instance.get('/api/users');

  return data;
}

export default getUserList;
