import axios, { AxiosInstance } from 'axios';

async function getInstance(): Promise<AxiosInstance> {
  const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASED_SERVER_URL as string,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const excludeEndpoints = ['/api/auth/sign-up', '/api/posts'];
      const isExcluded = excludeEndpoints.some((endpoint) => config.url?.includes(endpoint));

      if (!isExcluded) {
        config.withCredentials = true;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
}

export default getInstance;
