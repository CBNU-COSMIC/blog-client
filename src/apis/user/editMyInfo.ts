import getInstance from '../instance.ts';

async function editMyInfo(body: { username: string; nickname: string; email: string; phone: string; birth: string }) {
  const instance = await getInstance();
  await instance.put('/api/users', JSON.stringify(body));
}

export default editMyInfo;
