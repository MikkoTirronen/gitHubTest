/* 
    More Classes
*/

let students = [
    {name: "Jake", birthYear: 1980, marks: 80},
    {name: "John", birthYear: 1979, marks: 60},
    {name: "Abby", birthYear: 1990, marks: 70},
    {name: "Carter", birthYear: 2000, marks: 85},
    {name: "Dave", birthYear: 2010, marks: 62},
    {name: "Allison", birthYear: 1967, marks: 49},
    {name: "Isak", birthYear: 1949, marks: 30},
    {name: "Gerald", birthYear: 1996, marks: 83},
    {name: "George", birthYear: 2001, marks: 19},
]

class Student {
    constructor (firstName, birthYear, marks){
        this.name = firstName
        this.birthYear = birthYear
        this.marks = marks
    }
    getAge(){
        return 2021 - this.birthYear
    }
    getFirstName(){
        return this.name
    }
    getMarks(){
        return this.marks
    }
    gerAgeAtYear(year){
        return year - this.birthYear
    }
    changeBirthYear(newBirthYear){
        return this.birthYear = newBirthYear
    }
} 

const student1 = new Student("Mikko", 2001, 19)
console.log( student1.getFirstName())
console.log( student1.getAge())
console.log( student1.getMarks())