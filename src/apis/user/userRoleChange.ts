import getInstance from '../instance.ts';

async function userRoleChange(nickname: string, role: string) {
  const instance = await getInstance();
  await instance.put(`/api/users/${nickname}/role`, JSON.stringify({ role }));
}

export default userRoleChange;
