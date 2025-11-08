/* let gamename = "sdfgdfgfdx" ;
 console.log(gamename);
 let balance=120
  let another= new Number(120);
console.log(typeof balance);
 console.log( typeof another); 
  let firstname=null;
console.log(firstname);
let username="varsh";
console.log(username);

let  sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);
let obj={};
console.log(obj);
console.log(typeof obj);
let today= new Date();
console.log(today.getDate);

let heros =["a","b","c","true"];
console.log(heros[1]);
console.log(true +"9678");
let value="2abc";
console.log(typeof Number(value));
console.log(Number(null));

// */
// let num1=12;
// let num2=10;
// console.log("helloo");
// if(num1>num2){
//   console.log("Varshini");
// }
// console.log("worldd");

// let score="23";

// if(typeof score === "number"){
//   console.log("Its a number");
// }
// else{
//   console.log("Nope not a number its a ");
// }


// let teaflavours=["greentea","blacktea","oolongtea"];

// console.log(teaflavours[2]);


// let cities=["london","tokyo","paris","newyork"];

// let favcity = cities[3];

// console.log(favcity);
// let teaorders=["chai","icedtea","matcha","earlgrey"];
// teaorders.pop();
// teaorders.push("masala chai");
// console.log(teaorders);
//
// let popteas=["greentea","oolongtea","chai"];
// let softteas=popteas[0];
// console.log(softteas);
//
// let europeancities=["paris","rome"];
// let asiancities=["tokyo","bangkok"];
// let world=europeancities.concat(asiancities);
// console.log(world);

// let citylist=["kyoto","London","capetown","vancouver"];

//   let islondoninlist=citylist.includes("London");
// console.log(islondoninlist);

// let sum=0;
// let n=0;
// while(n<=5){
//   sum=sum+n;
//   n++
// }
// // console.log(sum);

// let countdown=[];
// let n=5;
// while(n>=1){
//   countdown.push(n);
// console.log(countdown);
//   n--;
// }


// let teacollection=[];
// let tea
// do {
//   prompt('enter fav tea (type "stop" to finish')
//   if(tea == "stop"){
// teacollection.push(tea);
//   } 
  
// } while (tea != "stop");


// let num=0;
// let i=1;
// do {
// num+=i;
// i++;
// }
// while(i<=3);
// // console.log(sum);

// let countries=["london","newyork","paris","berlin"];
// let newcountries=[];
// for(let i=0;i<countries.length;i++){
//   if(countries[i] === "paris"){
// continue;  }
//   newcountries.push(countries[i]);
// }
// console.log(newcountries);



// let teas=["earlgrey","greentea","chai","oolongtea"];
// let availteas=[];
// teas.forEach(tea=>{
//   console.log(tea);
// })

// let numbers=[1,2,3,4,5];
// let smallnumbers=[];
// for(const num of numbers  ){
//   if (num===4){
// continue  }
// smallnumbers.push(num);
// }
// console.log(smallnumbers);



// let citypop={
//   "london":8900000,
//   "newyork":8400000,
//   "paris":2200000,
//   "berlin":3500000,
// }

// let city={} 

// for (let m = 0; m <55; m++) {
//   const element = m;
//   console.log(element);
  
// // }


// let aray=[1,2,3,4,5];

// let m=0;

// aray.forEach((m) => {
// console.log(aray);

// }); 


// let states=["andhra","telangana","kerela","goa"];

// states.forEach((states,index) => {
//   console.log((states,index));
// });

// for (const i in states) {
//   if (!states.hasOwn(states, i)) continue;
  
//   const element = states[i];
//
// // }

// for (const i of states) {
  //
// }
//
// 
// 
// 
// 
// 
// 
// let worldcities=["tokyo","berlin","sydney","paris"];
// let travel=[];
// worldcities.forEach(function (city)  {
//   if(city==='sydney'){
//   return;
//   }  
//   travel.push(city)
// });
// // console.log(travel);

// let calculate=(price,quantity) =>  price*quantity;

// let total=calculate(499*100);
// console.log(total)

//   function maketea(tea){
//     return "maketea: ${tea}";
//   }
// function processtea (teafn){
// return teafn('earlgrey')
//   }
//   let order=processtea(maketea);
// // console.log(order);

// function ctm(){
//   function fn(teatype){
//   return "making ${teatype}";
//   }
// }

// 
// 
// 
// 

// function car(make,model){
//   this.make=make;
//   this.model=model;

// }
// let mycar = new car("tata","nano");
// console.log(mycar)



//encapuslation

 
 
// class bankaccount{
//   #balance=0;

//   deposit(amount){
//     this.#balance +=amount;
//     return this.#balance
//   }
//   getbalance(){
//     return '${this.#balance}';
//   }
// }
// let account= new bankaccount()
// console.log(account.balance);




