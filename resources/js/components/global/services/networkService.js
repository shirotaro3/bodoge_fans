import axios from 'axios';

const networkService = {
  setOnUnauthenticated: (onUnauthenticated) => axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const status = error.status || error.response.status;
      if (status === 419) {
        onUnauthenticated();
      };
      return Promise.reject(error);
    }
  )
};

export default networkService;