/* 
    Classes
*/
class Animal {
    constructor (name, legs){
        this.name = name
        this.legs = legs
    }
    speech(){
        return `${this.name} Makes a noise`
    }
    numberOfLegs(){
        return `This animal has ${this.legs} legs`
    }
}

const dog = new Animal("Dog", 4)
console.log(dog.speech())
console.log(dog.numberOfLegs())

const cat = new Animal("Cat", 4)
console.log(cat.speech())
console.log(dog.numberOfLegs())

const spider = new Animal("Spider", 8)
console.log(spider.speech)
console.log(spider.numberOfLegs())

// here is a new line of code i would like to push to github 
