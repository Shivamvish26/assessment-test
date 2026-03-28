export function createTask(id, title) {  //ye ek function hai jo task banata hai
  return { //function ek object ko return kar raha hai means jab function call hoga data wapad milega
    id: id,
    title: title, //ye id, title and completed ye object hai (fields)
    completed: false,  //ye ek defaukt value hai jab kabhi bhi task add hoga to uska completed as an false hoga.
  };
}


// export => isko hum dusri file mai use kar sakte hai (pura function ko)
// id and title => parameters hai
