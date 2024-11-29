import getInstance from '../instance.ts';

async function getDetailSchedule(scheduleId: number) {
  const instance = await getInstance();
  const { data } = await instance.get(`/api/schedules/${scheduleId}`);

  return data;
}

export default getDetailSchedule;
