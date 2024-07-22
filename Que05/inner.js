let uName = 'Mithun';

function takeUserInput(userName){
   return new Promise((resolve,reject)=>{
        let error = false;
        if(error == false){
            resolve({
                 name: `Hello ${userName}`
            })
             
        }else{
            reject({
                error:'Something Went Wrong'
            })
        }
   })
}
takeUserInput(uName)
.then((data)=>{
    return data.name
})
.then((userName)=>console.log(userName))
.catch((err)=>{
    console.log(err)
})
