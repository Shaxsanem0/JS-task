//1
console.log('hello, JavaScript')
//2
let name = 'Anna';
let age = 25;
let city= 'London';
console.log( name, age, city)
//3
let a = 6;
let b = 4;
[a, b]=[b, a]
console.log(a)
console.log(b)
//4
console.log(45+56)
//5
console.log(101-99)
//6
console.log(7*5)
//7
console.log(45/5)
//8
let result= 14%5
console.log(result)
//9
let number=6;
if(number%2===0){
    console.log("chetnoe")
} else{
    console.log("ne chetnoe")
}
//10
let value=5;
if(value<0){
    console.log("otricatelnoe")
}else if(value>0){
    console.log("polojitelnoe")
}else{
    console.log("eto nol")
}
//11
let q=5
let w=4
if(q>w){
    console.log(q)
}else{
    console.log(w)
}// or we can use let max=math.max(q, w)
//12
let e=23;
let r=545;
let t=345;
let max= Math.max(e, r, t)
console.log(max)
//13
let personage=34;
if(personage<18){
    console.log("ne sovershennoletniy")
}else{
    console.log("sovershennoletniy")
}
//14
let number1=15;
if(number%3===0 && number1%5===0){
    console.log("delyncya")
} else{
    console.log("ne delytcya")
}
//15
let monthNumber = 5; 
let months = [
    "",         
    "Январь",     
    "Февраль",   
    "Март",      
    "Апрель",    
    "Май",       
    "Июнь",      
    "Июль",      
    "Август",    
    "Сентябрь",   
    "Октябрь",    
    "Ноябрь",    
    "Декабрь"    
];

console.log(months[monthNumber]);
//16
let dayNumber = 5; 
let day = [
    "",         
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "satyrday",
    "sunday"
];

console.log(day[dayNumber]);
//17
let year=2024;
if(year%4===0){
    console.log("visokosniy")
}else{
    console.log("ne visokosniy")
}
//18
let y = 10;
let u = 5;
let op = '/';

let result1;

if (op === '+') {
    result1 = y + u;
} else if (op === '-') {
    result1 = y - u;
} else if (op === '*') {
    result1 = y * u;
} else if (op === '/') {
    result1 = y / u;
} else {
    result1 = "Ошибка";
}

console.log(result1);
//19
let number2=56;
if(number2>10 && number2<100){
    console.log("chislo vhodit v diapazon")
}else{
    console.log("chislo ne vhodit v diapazon")
}
//20
let ball=74
if(ball>90 && ball<100){
console.log("graet")
}else if(ball>70 && ball<89){
    console.log("good")
}else if(ball> 50 && ball< 69){
    console.log("not bad, but not good")
}else{
    console.log("bad")
}
//21
for(let i=1; i<=100; i++){
    console.log(i)
}
//22
for(let i=100; i>=1; i--){
    console.log(i)}
console.log("-------------")
//23
for(let i=1; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}
console.log("-------------")
//24
for(let i=1; i<=100; i++){
    if(i%2 !==0){
        console.log(i);
    }
}
console.log("-------------")
//25
let sum=0;
for(let i=1; i<=100; i++){
    sum=sum+i
}
console.log(sum)
console.log("-------------")
//26
let sum1=0;
for(let i=2; i<=100; i+=2){
    sum1=sum1+i;
}
console.log(sum1)
console.log("-------------")
//27
let number3=5;
for(let a=1; a<=10; a++){
    console.log(number3+"*"+a+"="+(number3*a))
}
console.log("-------------")
//28
for(let i=1; i<=10; i++){
    for(let o=1; o<=10; o++){
        console.log(i+"*"+o+"="+(i*o))
    }
}
console.log("-------------")
//29
let n=7;
let factorial=1;
for(let m=1; m<=n; m++){
    factorial=factorial*m
}
console.log(factorial)
console.log("-------------")
//30
let num=1234567;
let count=0;
if(num===0){
    count=1;
}else{
    while (num>0){
        num= Math.floor(num/10);
        count++
    }
}
console.log(count)
console.log("-------------")
//31
let numbers=[2, 56, 34, 7, 345, 1, 678, 34, 9, 45, 35]
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);

}
console.log("-------------")
//32
let numbers1=[1, 2, 3, 4, 5, 6]
let sum2=0;
for (let i=0; i<numbers1.length; i++){
    sum2=sum2+numbers1[i]
}
console.log(sum2)
console.log("-------------")
//33
let numbers2=[10, 20, 30, 40, 50]
let sym=0
for (let i=0; i<numbers2.length; i++){
    sym+=numbers2[i]
}
let average=sym/numbers2.length;
console.log(average)
console.log("-------------")
//34
let numbers3=[3, 5, 66, 22, 6, 29, 90]
let max1=numbers[0];
for( let i=1; i<numbers3.length; i++){
    if(numbers3[i]>max1){
        max1=numbers3[i];
    }
}
console.log(max1);
console.log("-------------")
//35
let numbers4=[3, 5, 66, 22, 29, 90]
let min=numbers4[0];
for( let i=1; i<numbers4.length; i++){
    if(numbers4[i]<min){
        min=numbers4[i];
    }
}
console.log(min);
console.log("-------------")
//36
let numbers5=[12, 14, 15, 45, 7 , 23]
let count1=0
for( let i=1; i<numbers5.length; i++){
    if (numbers5[i]%2===0){
        count1++
    }
}
console.log(count1)
console.log("-------------")
//37
let numbers6=[-5, 0, 6, 4, -9, 4]
let plus=[];
for( let i=1; i<numbers6.length; i++){
    if (numbers6[i]>0){
        plus.push(numbers6[i])
    }
}
console.log(plus)
console.log("-------------")
//38
let orig=[1, 2, 3, 4, 5]
let reverse=[]
for(let i=orig.length-1; i>=0; i--){
    reverse.push(orig[i])
}
console.log(reverse)
console.log("-------------")
//39
let numbers7=[12, 14, 15, 45, 7 , 23, 7, 14, 5]
let uniquenumbers=[]
for (let i=0; i<numbers7.length; i++){
    if(!uniquenumbers.includes(numbers7[i])){
        uniquenumbers.push(numbers7[i])
    }
}
console.log(uniquenumbers)
console.log("-------------")
//40
let numbers8=[ 7 , 23, 14, 5]
let max2=numbers8[0]
for (let i=0; i<numbers8.length; i++){
    if(numbers8[i]>max2){
        max2=numbers8[i]
    }
}
let secondMax=-Infinity;
for(let i=0; i<numbers8.length; i++){
    if(numbers8[i]>secondMax && numbers8[i]<max2){
        secondMax=numbers8[i]
    }
}
console.log(secondMax);
console.log("-------------")
//41
function sum3(a, b){
    return a+b;
}
let result2= sum3(3, 56);
console.log(result2)
console.log("-------------")
//42
function Chetnost(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(Chetnost(5))
console.log(Chetnost(8))
console.log("-------------")
//43
function MaxN(numbers9){
    let max3=numbers9[0];
    for(let i=1; i<numbers9.length; i++){
        if(numbers9[i]>max3){
     max3=numbers9[i];
        }
    }
    return max3;
}
let Mynumbers=[6, 2, 8, 9];
let result3=MaxN(Mynumbers);
console.log(result3)
console.log("-------------")
//44
function naoborot(str){
    let reverse="";
for(let i=str.length-1; i>=0; i--){
    reverse=reverse+str[i]
}return reverse;
}
let word="hello";
let result4=naoborot(word)
console.log(result4)
console.log("-------------")
//45
function palindrom(str){
    let reverse="";
for(let i=str.length-1; i>=0; i--){
    reverse=reverse+str[i]
}{
    if(str===reverse){
        return true;
    }else{
        return false;
    }
}
}
let str="mom"
let result5=palindrom(str);
console.log(result5)
console.log("-------------")
// 47
function LongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
let sentence="hello my name is Isabella"
let result6=LongestWord(sentence)
console.log(result6)
console.log("-------------")
// 48
let user = {
    name: "Анна",
    age: 25,
    email: "anna@example.com",
    getInfo: function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Email: ${this.email}`);
    }
};
console.log(user.getInfo())
console.log("-------------")
// 49
function CheapProducts(products, maxPrice) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < maxPrice) {
            result.push(products[i]);
        }
    }
    return result;
}
console.log("-------------")
// 50
let users = [
    { name: "Иван", age: 17, active: true },
    { name: "Ольга", age: 22, active: false },
    { name: "Петр", age: 30, active: true }
];
let adults = users.filter(user => user.age >= 18);
let names = users.map(user => user.name);
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("-------------")