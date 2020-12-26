import Person from './person_class.js';

class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id=id;
    }
    print(){
        super.print();
        console.log(`Id= ${this.id}`);
    }
}
export default Student;