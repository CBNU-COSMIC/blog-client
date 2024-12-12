import getInstance from '../instance.ts';

async function checkPassword(password: string) {
  const instance = await getInstance();
  await instance.post('/api/auth/password', JSON.stringify({ password }));
}

export default checkPassword;
