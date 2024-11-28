import axios, { AxiosInstance } from 'axios';

async function getInstance(): Promise<AxiosInstance> {
  const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASED_SERVER_URL as string,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
}

export default getInstance;
