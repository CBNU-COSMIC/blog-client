import getInstance from '../instance.ts';

async function writeSchedule(body: {
  title: string;
  content: string;
  started_at: string;
  ended_at: string;
  color: string;
}) {
  const instance = await getInstance();
  const { data } = await instance.post('/api/schedules', JSON.stringify(body), {
    withCredentials: true,
  });

  return data;
}

export default writeSchedule;
