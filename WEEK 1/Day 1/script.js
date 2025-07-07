// /--------------------------Datetype/----------------------------------------------
// let name  = "mostafa";
// console.log(typeof name);
// name = 25;
// console.log(typeof name);
// let flag = true ;
// console.log(typeof flag);
// let name;
// console.log(typeof name);
// console.log(name );
//  let name = null;
//  console.log(typeof name);
// /---------------------------let var const----------------------------
// const age = 25;
// age = "30";
// console.log(age); ////////error
// {
//     let obj= "nti"
//     console.log(obj);

// } *******scope block {}
//  function heelo(){
//     let x=10;
//     if (x==10){
//         var obj="nti"
//     }
//     console.log(obj);
//  }
// heelo();
//  console.log(obj);
// -------------------------math operation ------------------------------------------
//  const now = 2025;
//  const birth = 1995;
//  const age = now - birth;
//  console.log(age);
//  const n = "15";
//  const b = "10";
//  const a = n-b ;
//  console.log(a);
// const x = 10;
// const y =5;
// const z = x+y;
// console.log(z);
// const x = "10";
// const y = "5";
// const z = x+y;
// console.log(z); //105
// let x = 10;
// x+=10;
// // console.log(x);
// x*=2;
// console.log(x);
// x--; x-1
// x++;x+1
// /----------------function----------------------------/
// Function Declaration
// function hello (name){
//     console.log("hello" + name)
// }
// hello();
// // defullt pra
// function hello(name='mostafa'){
//     console.log("hello" + name );
// }
// hello("mariem");
// -------------------------Function Expression------------------
// let hello = function (){
//     console.log("hello");
// }
// hello();
// console.log(typeof hello);
// let sum = function(x,y){
//     return x+y;
// }
// // sum(5,5);
// console.log(sum(5,5));
// // ---------------------Arrow Function--------------------
// const hello = (name)=>{
//     console.log("hello"+name);
// }
// hello("mostaaf");
// -------------------------Hoisting ---------------------------------
// console.log(x);
// var x = 5;
// console.log(x);
// console.log(x);
// let x = 5;
// console.log(x);
// console.log(x);
// const x = 5;
// console.log(x);
// hello();
// function hello(){
//     console.log("hello from hoisting")
// }
// hello();
// let hello = function(){
//     console.log("hello from hoisiting")
// }
// console.log(x);
//   x= 10; ref error not dif
// ---------------------Type Conversion-----------------
// let x = 1999;
// console.log( typeof String(x));
// console.log(typeof x);
// let x = "222";
// console.log( typeof Number(x));
// let y = "abc";
// console.log(Number(y));
// ------------------------String concatenation ---------------------
// let fname = "ali";
// let lname = "omer";
// let age = 25;
// console.log("myname"+fname+lname+age);
// console.log(`my name ${fname} ${lname} and my age ${age}`);


// const obj = {
//     name:"ali",
//     age:25,
//     flag:true,
//     friend:["omer","eman"],
//     hello: ()=> console.log("hello from obj")
// }
// // console.log(obj);
// // console.log(obj.name);
// // console.log(obj.friend);
// let x = "age";
// console.log(obj[x]);
//  ==&===
// let x = 20;
// // if(x==20){
// //     console.log(true);
// // }
// if(x===20){
//     console.log(true);
// }else{
//     console.log(false);
// }
// ? -------------------------------??
// Ternary Operator ?
// const x = 50;
// x<=100 ? console.log("l like short way ") : console.log("short way but false");
// let name = null;
// Nullish ??
// let currntName = name?? "Admin" ;            
// console.log(currntName);
// Falsy Values
// 0,flase,"",null,undefined,NaN
// let y = "hamde";
// let x = 0
// if (x){
//     console.log("hello");
// }else{console.log("falsy value")};
// . switch statement---------------------------
// let day = "thrday";
// switch(day){
// case"friday": console.log("not right day ");
// break;
// case "sunday":console.log("its today");
// break;
// case"thrday":console.log("not right day 2")
// // case 
// // case
// break;
// default: console.log ("hello from default");
// }
// let name = prompt("Enter your name");
// console.log(name);
// console.log(typeof name);





// let p = document.getElementsByTagName("p");
// console.log(p); // html col
// console.log(p[0]); //p


// let hh = document.getElementById("head1");
// console.log(hh); //h1


// let cls = document.getElementsByClassName("bgRed");
// console.log(cls);

// let pp = document.querySelector(".bgRed");
// console.log(pp);

let pp =document.querySelectorAll(".bgRed");
console.log(pp);

pp[1].setAttribute("id",5);
console.log(pp[1]);

let x = document.getElementById(5);
console.log(x);






















 
 


 

