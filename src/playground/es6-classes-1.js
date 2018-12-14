class Person {
    constructor(name = 'Anonymous', age = 0, music = 'nothing') {
        this.name = name;
        this.age = age;
        this.music = music;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old and likes to listen to ${this.music}. `
    }
};

class Student extends Person {
    constructor(name, age, music, major) {
        super(name, age, music);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += `Their major is ${this.major}.`
        }
        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, music, homeLocation){
        super(name, age, music);
        this.homeLocation = homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.homeLocation) {
            greeting += ` I'm travelling from ${this.homeLocation}.`
        }
        return greeting
    }
}

const me = new Traveler('Jayme Ramsay', 36, 'Christmas songs', 'Atlanta');
console.log(me.getGreeting()); 

const other = new Traveler();
console.log(other.getGreeting());