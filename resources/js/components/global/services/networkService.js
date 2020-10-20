import axios from 'axios';

const networkService = {
  init: ({
    onUnauthenticated,
    onInternalServerError,
    onRequest,
    onResponse
  } = {}) => {
    axios.interceptors.response.use(
      response => {
        onResponse();
        return response;
      },
      error => {
        console.log(error);
        onResponse();
        const status = error.status || error.response.status;
        if (status === 419) {
          onUnauthenticated();
        };
        if (status === 401) {
          onUnauthenticated();
        };
        if (status === 500) {
          onInternalServerError();
        };
        return Promise.reject(error);
      }
    );
    axios.interceptors.request.use(
      config => {
        onRequest();
        return config;
      },
      error => {
        console.log(error);
      }
    )
  }
};

export default networkService;