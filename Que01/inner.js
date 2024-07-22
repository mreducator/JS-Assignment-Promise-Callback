const integer = [1,2,3,4,5,6,7,8,9,10];

function passingInteger(digits, fn){
  let doubleInt = digits.map((num)=>{
     return num*2
  });
  fn(doubleInt)
  
}
passingInteger(integer,doubleInteger);
function doubleInteger(integer){
  console.log(integer)
}