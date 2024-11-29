import getInstance from '../instance.ts';

async function deleteSchedule(scheduleId: number) {
  const instance = await getInstance();
  await instance.delete(`/api/schedules/${scheduleId}`, {
    withCredentials: true,
  });
}

export default deleteSchedule;
