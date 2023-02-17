//GET
export const  GetRequest=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const ResJson= await response.json()
    return ResJson;
}

//POST
export const  PostRequest=async(data)=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(data),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
    })
    const ResJson= await response.json()
    return ResJson;
}

//UPDATE

export const  PutRequest=async(data)=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PUT',
        body:JSON.stringify(data),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
    })
    const ResJson= await response.json()
    return ResJson;
}//PATCH

export const  PatchRequest=async(data)=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PUT',
        body:JSON.stringify(data),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
    })
    const ResJson= await response.json()
    return ResJson;
}

//DELETE

export const  DeleteRequest=async(data)=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'DELETE',
       
    })
    console.log(response)
    return response
}




