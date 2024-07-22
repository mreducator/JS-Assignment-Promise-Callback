//display an error
async function getListOfPosts(){
    try{
     const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
     const data = await response.json();
     console.log(data)
    }catch(error){
      console.log(error)
    }
 
 }
 getListOfPosts();