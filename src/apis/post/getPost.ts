import axios from 'axios';

async function getPost() {
  const { data } = await axios.get('/mocks/notifications.json');

  return data.list;
}

export default getPost;
