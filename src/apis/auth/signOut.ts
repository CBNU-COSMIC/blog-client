import getInstance from '../instance.ts';

async function signOut() {
  const instance = await getInstance();
  await instance.post('/api/auth/sign-out');
}

export default signOut;
