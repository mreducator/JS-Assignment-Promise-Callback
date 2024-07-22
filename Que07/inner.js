async function getCombineData(){
    const [data1,data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>res.json()),

    ]
        
    );
    const combineDta = {
        todo: data1, 
        posts: data2
    }
    return combineDta
}
getCombineData().then((data)=>console.log(data))