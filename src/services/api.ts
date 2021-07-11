import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',   
});

api.interceptors.response.use(
  response => {
    const responseData = { ...response };
    responseData.config.params.endtime =  new Date();
    responseData.headers.duration = responseData.config.params.endtime - responseData.config.params.startTime;
    return responseData;
  }
); 

api.interceptors.request.use(
  config => {
    const configData = { ...config };
    configData.params = { startTime: new Date() };
    return configData;
  }
);

export default api;
