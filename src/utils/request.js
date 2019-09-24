import axios from 'axios'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
const service = axios.create({
    timeout:9000,
    baseURL:process.env.VUE_APP_BASE_URL
})

service.interceptors.request.use(
    function(config){
           config.headers['token'] = '123'
         return config
    },
    function(error){
        return Promise.reject(error)
    }
)
  // 响应的拦截器
  service.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      return response;
    },
    function(error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  
  export default service;