export const ajax=function(protoOptions){
   var ajaxOptions = {
       url:'url',
       method:'GET',
       async:true,
       data:null,
       dataType:'text'
   };
   var options = Object.assign(ajaxOptions,protoOptions);
   return new Promise((resolve,reject)=>{
       var xhr = new XMLHttpRequest();
       xhr.open(options.method||'get',options.url,options.async);
    //    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
       //如果请求传递参数是form data类型的数据key=1&key=2，必须设置请求头的信息
       xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
       //如果请求传递的参数是request payload类型的数据,也就是请求传递的参数是json格式的时候
    //    xhr.setRequestHeader('Content-Type','application/json')
    //    xhr.setRequestHeader('Content-Type','application/json')
    if(options.contenType === 'josn'&&(options.method === 'post' || options.method === 'POST')){
        xhr.setRequestHeader('Content-Type','application/json')
    }else{
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    }
       xhr.onreadystatechange=function(){
           if(xhr.readyState === 4){
                 if(xhr.status === 200){
                     try{
                         var json = JSON.parse(xhr.responseText)
                         resolve(json)
                     } catch{
                         reject(new Error('解析json数据失败'))
                     }
                 }else{
                     reject(new Error(xhr.statusText))
                 }
           }
       };
       if(options.method === 'post' || options.method === 'POST'){
              xhr.send(options.data||null)
       }else{
           xhr.send();
       }
   })
}

