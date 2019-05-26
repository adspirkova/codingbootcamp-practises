class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    email () {
        return `${this.firstName.toLowerCase()}@springfield.com`;
    }
}

const maggie = new Person ('Maggie', 'Simpson', 3);


const homer = {
    firstName: 'Homer',
    lastName: 'Simpson',
    age: 39,
    greet: ()=> {
        console.log('Hi from Homer');
    },
    email: function () {
        return `${this.firstName.toLowerCase()}@springfield.com`;
    },
};

const marge = {
    firstName: 'Marge',
    lastName: 'Simpson',
    age: 36,
    greet: ()=> {
        console.log('Hi from Homer');
    },
    email: function () {
        return `${this.firstName.toLowerCase()}@springfield.com`;
    },
};