// const { click } = require("@testing-library/user-event/dist/click");

let butn=document.getElementById("btn");


butn.addEventListener("click",verify);


function myPromise(age,name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age>=18)
          { console.log("sussecc");
              resolve(`Welcome, ${name}. You can vote`);}
            else
           {
            console.log("err");
             reject(`Oh sorry ${name}. You aren't old enough.`);}
        },4000);
       
    })
}
function verify()
{
    let age=document.getElementById("age").value;
    let name=document.getElementById("name").value;

   myPromise(age,name).then((data)=>
    {
        // console.log("sussecc");
        alert(data);
    })
    .catch((data)=>{
        // console.log(data);
        alert(data);

    });  
    
}





// Create a Promise that resolves after 4 seconds
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve('Success!');
//       } else {
//         reject('Error!');
//       }
//     }, 4000);
//   });
  
//   // Handle resolved value
//   myPromise.then((value) => {
//     alert(value);
//   }).catch((error) => {
//     alert(error);
//   });