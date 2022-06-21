document.getElementById("he").innerHTML="hello sumit kumar";
function printName(){
    var name="sumit kumar";
    console.log(name);
}
printName();
const persone ={
    name:'sumit',
    age:21

};
console.log(persone.name);
console.log(persone.age);
const integer=[1,2,3];
const updateInteger=integer.map(function(number){
    return number+=1;

});
console.log(updateInteger);
const age=[15,25,12,45];
const adults=age.filter((age)=>  age>=18
);
console.log(adults);

function person (name ,age) {
this.age=age;
this.name=name;
};
//this is prototype method
person.prototype.speak=function(){
    console.log(`Hi my name is ${this.name} and my age is${this.age}`)
};
const sumit=new person("sumit",22);
sumit.speak();
console.log(sumit);
console.log(sumit.name);
console.log(sumit.age);

class god{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    Speak(){
        console.log("sumit become the ceo of the tcs");
    }

}
const shiva=new god('shiva',100);
shiva.Speak();
console.log(shiva);

const arr1=['sumit','arun','subodh'];
const arr2=['thakur','singh','rajput'];
let arr=[];
arr=arr.concat(arr1);
arr.push('title');
arr=arr.concat(arr2);
console.log(...arr);
//spred method
const array=[...arr1,'title',...arr2];
console.log(...array);
