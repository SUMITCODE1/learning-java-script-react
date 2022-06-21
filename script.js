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
