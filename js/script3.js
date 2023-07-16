
//1. function defination
let myFunction =(name)=>{
    console.log('hello ' +name);
}
//2. calling
myFunction('Ranu');


// spread/copy  OPerator
let a = ['Ranu',"Tannu",`Mannu`];
console.log(a);

//array.lenth
//object.member
console.log(a.length);

let b = [...a,"krishti",'krtika'];
console.log(b);
console.log(b.length);

var paragraf=''
for(var i=0; i<b.length;i++){
    console.log(b[i]);
    paragraf = paragraf + b[i]+' ';
}
console.log(paragraf);