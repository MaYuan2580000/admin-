import requset from '../utils/request'
import qs from 'qs'; //jquey

export const getlogin = (username,pwd) => {
    return requset({
      method: 'post',
      url: '/index.php/home/v1/login',
      // module=aapp&action=index&app=index&access_id=22&store_type=2
      data: qs.stringify({
        username,
        pwd
      })
    });
  };
  
  export const getuserList = (data) => {
    return requset({
      method: 'get',
      url: '/index.php/home/v5/getuser',
      // module=aapp&action=index&app=index&access_id=22&store_type=2
      data:data
    });
  };
  export const deleUser = (id) => {
    console.log(id)
    return requset({
      method: 'post',
      url: '/index.php/home/v5/deleteUser',
      // module=aapp&action=index&app=index&access_id=22&store_type=2
      data: qs.stringify({
       id:id
      })
    });
  };
  export const addUser = (data) => {
    return requset({
      method: 'post',
      url: '/index.php/home/v5/add',
      // module=aapp&action=index&app=index&access_id=22&store_type=2
      data
    });
  };

  export const updateUser = (data) => {
    return requset({
      method: 'post',
      url: '/index.php/home/v5/updateUser',
      // module=aapp&action=index&app=index&access_id=22&store_type=2
      data
    });
  };
  export const selfindUser = (data) => {
    console.log(data,'++++')
    return requset({
      method: 'get',
      url: '/index.php/home/v5/findUser?'+data,
    });
  };
