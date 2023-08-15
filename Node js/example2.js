// const person ={
//     name: 'sekar',
//     age: 30,
//     gender: 'male'
// }
// module.exports = person;
class Person1{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    greeting(){
        console.log(`He is ${this.name} and his age is ${this.age}`)
    }
   
}
module.exports=Person1