import getInstance from '../instance.ts';

async function signIn(body: { userId: string; password: string }) {
  const instance = await getInstance();
  await instance.post('/api/auth/sign-in', JSON.stringify(body));
}

export default signIn;
