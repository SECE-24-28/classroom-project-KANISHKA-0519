// Template Literals
// var age = 20;
// var name = 'Kanishka';

// console.log(name);
// console.log(`${name} age is ${age}`);  // Correct template literal
// console.log(name + " age is " + age);  // Normal string concat

// // Map
// var arr = [1, 2, 3, 4, 5];
// var double = arr.map(num => num * 2);
// console.log(double);

// // Filter
// var even = arr.filter(num => num % 2 === 0);
// console.log(even);

// // Reduce
// var total = arr.reduce((sum, num) => sum + num, 0);
// console.log(total);

// var evenCount = arr.map(num => num**3).filter(num => num%2==0).reduce((sum, num) => sum+1, 0);
// console.log(evenCount);

// var student=[
//    { name:"Kani",
//     marks:90},
//     { name:"Mahan",
//     marks:93},
//     { name:"Tharun",
//     marks:87},
//     { name:"Varuna",
//     marks:92}
// ];

//     //filter
//     var studentMark=student.filter(s=>s.marks>88);
//     console.log(studentMark);

//     //map
//     var studentName=student.map(s=>s.name)
//     console.log(studentName);

//     //reduce
//     var totalMarks=student.reduce((sum,s)=>(sum+s.marks),0)
//     console.log(totalMarks)
//     var avg=totalMarks/student.length;
//     console.log(avg)

// //promise
// const promise = new Promise((resolve, reject) => {
//     var success=true;
//     if(success){
//         resolve("Success");
//     }
//     else{
//         reject("Failed");
//     }
// });
// promise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })

// //promise
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Success");
//     },2000);
// });
// promise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })

// const getData=()=>{
//     return fetch("https://jsonplaceholder.typicode.com/posts")
// }
// getData().then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

const getData=async(req,res)=>{
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/posts");
        var data=await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getData();
