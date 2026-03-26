// alert("page Working")

// simple settimeout code

// console.log("Data 1 printing....");

// setTimeout(() => {
//   console.log("Data 2 printing...");
// }, 2000);

// console.log("End of the data");

// promise with settimeout
// let data = new Promise(function(resolve,reject){
// setTimeout(function(){
// //   reject("Data failed to load...");
//   resolve("Data loaded...");
// }, 2000);
// })

// data.then(function(result){
//     console.log(result)
// })

// function fetchData() {
//   return new Promise(function (resolve, reject) {

//     setTimeout(function () {
//       resolve("User data received");
//     //   reject("Something went wrong"); 
//     }, 3000);

//   });
// }

// // promise call
// fetchData()
//   .then((message) => {
//     console.log(message); // success case
//   })
//   .catch((error) => {
//     console.error(error); // error case
//   });

const myPromise = new Promise((resolve, reject) => {
  const success = true; // In a real scenario, this might depend on a network request

  setTimeout(()=>{
    if (success) {
    // If the operation is successful, call resolve() with a result
    resolve("Operation successful! Data fetched.");
  } else {
    // If the operation fails, call reject() with an error
    reject("Operation failed.");
  }
  },3000)
});

myPromise
  .then((message) => {
    // Handle the fulfillment (success) case
    console.log(message);
  })
  .catch((error) => {
    // Handle the rejection (failure) case
    console.error(error);
  });

// Output in console (if success is true):
// Operation successful! Data fetched.
