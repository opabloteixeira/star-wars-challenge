import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',   
});

api.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    newConfig.params = { startTime: new Date() };
    return newConfig;
  }
);

api.interceptors.response.use(
  response => {
    const newRes = { ...response };
    newRes.config.params.endtime =  new Date();
    newRes.headers.duration = newRes.config.params.endtime - newRes.config.params.startTime;
    return newRes;
  }
); 

export default api;
