/*
person.ts
justin bishop
feb 27, 2024
typescript practice
*/

//build the class

export class Person {
    //properties
    firstName: string;
    lastName: string;

    //constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getters 
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}