// Call stack example

// function greet(){
//     console.log("Hello World");
// }

// greet()

function one(){
    console.log("Function one called");
}

function two(){
    one() //two kai andar one call hua hai to callstack [one]
    console.log("Function two called")
}

function three(){
    two() //three kai andar two call hua hai to callstack [two]
    console.log("Function three called")
}

three() //sab sai pahela ye function call hoga kyu kisabse pahle ye call hua hai, ye line sab sai 
// necha hai callstack[three]


//callstack [three -> two -> one ye flow hoga]
//output
// execute hua function one() uska kam katham
// abhi call stack [three -> two]
//execute hua function two uska kam katham
// abhi call stack [three]
//execute hua function three uska kam katham
// to abhi callstack[empty hai]

// final output
// function one called
// function two called
// function three called