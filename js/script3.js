
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

let b = [...a,"krishti",'krtika',];
let b1 = [...a,"krishti",'krtika',...a];
console.log(b);
console.log(b.length);

var paragraf=''
for(var i=0; i<b.length;i++){
    console.log(b[i]);
    //paragraf = paragraf + b[i]+' '; //not optimized slow
    paragraf += b[i]+' '; // optmized fast
    paragraf += b1[i]+' '; // optmized fast
}
console.log(paragraf);