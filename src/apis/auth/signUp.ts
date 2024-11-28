import getInstance from '../instance.ts';

async function signUp(body: {
  userId: string;
  password: string;
  email: string;
  username: string;
  nickname: string;
  birth: string;
  phone: string;
}) {
  const instance = await getInstance();
  await instance.post('/api/auth/sign-up', JSON.stringify(body));
}

export default signUp;
