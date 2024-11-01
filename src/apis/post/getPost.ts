import getInstance from '../instance.ts';

async function getPost() {
  const instance = await getInstance();
  const { data } = await instance.get('/mocks/notifications.json');

  return data.list;
}

export default getPost;
