import getInstance from '../instance.ts';

async function getSchedules() {
  const instance = await getInstance();
  const { data } = await instance.get('/api/schedules');

  return data;
}

export default getSchedules;
