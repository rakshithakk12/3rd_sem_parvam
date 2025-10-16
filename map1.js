const numbers=[1,2,3,4,5,6];
const evens=numbers.filter((num)=>num%2==0);
console.log(evens);

const words=["cat","elephant","snakes","dragons"];
const longWords=words.filter((word)=>word.length>4);
console.log(longWords);

const prices=[50,25,35,500,25];
const affordable=prices.filter((price)=>price<100);
console.log(affordable);