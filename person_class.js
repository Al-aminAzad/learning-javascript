class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    print(){
        console.log(`My name is ${this.name} and ${this.age} years old`);
    }
}
export default Person;