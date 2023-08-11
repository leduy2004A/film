import axios from 'axios'
const axiosApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    header: {
      "content-type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
  axiosApi.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI2MzliYjAxZDIzOTgzNjkyNzE0YzBkN2UxNWE5ZCIsInN1YiI6IjY0ZDQ5OTQxZGQ5MjZhMDFlNjI3OTg2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NOYb__XmIPzNWCFoUoUkZM1glpqM9_zp5L3NnX3w2j0'}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
//   axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axiosApi.interceptors.response.use(
    response => {
      // Nếu phản hồi thành công, trả về dữ liệu
      return response.data;
    },
    error => {
      // Nếu có lỗi phản hồi từ server
      if (error.response && error.response.status === 403) {
        console.error('Lỗi 403 - Quyền truy cập bị từ chối:', error.response.data);
        // Trả về một Promise bị reject với thông báo lỗi
        return null;
      }
      // Nếu không phải lỗi 403, tiếp tục trả về lỗi gốc
      return Promise.reject(error);
    }
  );
  export default axiosApi
