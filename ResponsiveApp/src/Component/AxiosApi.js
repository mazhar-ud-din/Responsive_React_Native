import axios from 'axios'
//getRequest
export const AxiosGetRequest=async()=>{
 const response=await axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/posts',
});
return response;
}
//getPost
export const AxiosPostRequest=async(data)=>{
    console.log(data)
    const response=await axios({
       method:'post',
       url:'https://jsonplaceholder.typicode.com/posts',
       data:data
   });
   return response;
   }
   //PutPost
export const AxiosPutRequest=async(id,data)=>{
    const response=await axios({
       method:'put',
       url:'https://jsonplaceholder.typicode.com/posts/'+id,
       data:data
   });
   return response;
   }

    //PatchPost
export const AxiosPatchRequest=async(id,data)=>{
    const response=await axios({
       method:'put',
       url:'https://jsonplaceholder.typicode.com/posts/'+id,
       data:data
   });
   return response;
   }  

   //DeletePost
export const AxiosDeleteRequest=async(id)=>{
    const response=await axios({
       method:'delete',
       url:'https://jsonplaceholder.typicode.com/posts/'+id,
   });
   return response;
   }