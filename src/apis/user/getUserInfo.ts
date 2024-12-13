import getInstance from '../instance.ts';

async function getUserInfo(nickname: string) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/users/${nickname}`);

  return data;
}

export default getUserInfo;
