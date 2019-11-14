// import Mock from 'mockjs'
// import MockAdapter from 'axios-mock-adapter'
// import request from '../utils/request'
// import Urls from '../utils/apiUrl'
// export default{
//     init(){
//         //通过axios-mock-adapter生成代理api地址，设置几秒验车，响应的延迟
//         let mockAdapter = new MockAdapter(request,{delayResponse:2000})
//         //mockAdapter.onGet(请求接口地址).reply(http状态码，响应的数据)
//         mockAdapter.onPost(Urls.userlistUrl).reply(200,{
//             data:Mock.mock({
//                 "list|1-10":[
//                     {
//                         name:'@cname()',
//                         age:'@integer(18,120)',
//                         webUrl:"@url('http')",
//                         address:'@county(true)',
//                         phone:"@string('number',11)",
//                         "id|+1": 0,
//                     }
//                 ]
//             })
//         })
//         mockAdapter.onGet('/api/user/list').reply(function(config){
//              return [200,{
                  
//              }]
//         })
//         mockAdapter.onPost('/api/user/delete').reply(function(config){
//             console.log(config)
//             return [200,{
//                 id:config.id,
//                 data:{
                    
//                 }
              
//             }]
//        })
//         // mockAdapter.onPost('/api/login').reply(200,{
//         //     name:Mock.Random.cname(),
//         //     token:Mock.Random.string(32)
//         // })
//         mockAdapter.onPost(Urls.loginUrl).reply(function(config){
//             let data = JSON.parse(config.data)
//             if(data.username === 'tom'&& data.password === '123456'){
//                return[200,{
//                      code:200,
//                      msg:'登录成功',
//                      data:{
//                          name:Mock.Random.cname(),
//                          token:Mock.Random.string(32)
//                      }
//                }]
//             }else{
//                 return [
//                     200,{
//                     code:'4001',
//                     meg:'登录失败',
//                     data:{}
//                     }
//                 ]
//             }
//         })
//     }
// }

import Mock from 'mockjs'

import tableAPI from './mockIndex'

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', tableAPI.getUserList)
Mock.mock(/\/user\/remove/, 'get', tableAPI.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', tableAPI.batchremove)
Mock.mock(/\/user\/add/, 'post', tableAPI.createUser)
Mock.mock(/\/user\/edit/, 'post', tableAPI.updateUser)