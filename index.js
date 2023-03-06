"use strict"
class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length
    }

    getMarksSum() {
        return this.marks.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

class Group {
    _students = [];

    addStudent(student) {
        if (this.#isStudent(student) === true) {
            this._students.push(student)
        }
    }

    #isStudent(student) {
        return student instanceof Student
    }

    getAverageMarkOfGroup() {
        return this.getAverageMarksSum() / this._students.length
    }

    getAverageMarksSum(){
        let AverageMarksSum = 0
        for (const studentOfArray of this._students) {
             AverageMarksSum += studentOfArray.getAverageMark();
        }
        return AverageMarksSum
    }

    get students() {
        return this._students
    }
}


const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10])); // средний балл = 8

console.log(group.students)
console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);
console.log(group.getAverageMarksSum())
// Выводим средний балл группы
console.log(group.getAverageMarkOfGroup() === (9 + 9.5 + 8) / 3);

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);
console.log(group.students)