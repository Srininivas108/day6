//Fix the code to get the largest of three.
aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,5,3);

//Fix the code to Sum of the digits present in the number
   function add(n)
{
let sum = 0;
while(n){
    sum+= n%10;
    n=Math.floor(n/10);
}
 return sum;
}
let n = 124;
console.log(add(n));

//Fix the code to gen Title caps.
var arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = num.reduce((a,b)=>a+b)
console.log(sum);

//Fix the code to return the Prime numbers
var newArray=[1,3,2,5,10];
myPrime=newArray.filter((num)=> {
 for(var i=2;i<= Math.sqrt(num);i++){
 if(num%i===0) return false;
 }
 return true;
});
console.log(myPrime);

//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr);

//Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for(var i = 0; i <arr.length; i++){
    sum += arr[i];
   
     }
     console.log(sum);
})(arr);

//Fix the code to reverse.
(function(str){
 var str1 = str.split('').reverse().join('');
 console.log(str1); 
})('abcd')

//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce((a,c)=> {
    if(c%2 !==0) {
        return a+c;
    }
    return a
},0)
console.log(s);