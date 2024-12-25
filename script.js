let grades = [];
let number_students = 12;
for (let i = 0; i < number_students; i++) {
    grades.push(Math.floor(Math.random() * 100) + 1);
}
let maxMark = Math.max(...grades);
let minMark = Math.min(...grades);
let sum = 0;
for (let i = 0; i < number_students; i++) {
    sum += grades[i];
}
let medMark = Math.floor(sum / number_students);


let filterP = grades.filter(mark => mark >= 60);
let filterN = grades.filter(mark => mark < 60);

let grades_letters = [];
for (let j = 0; j < number_students; j++) {
    if (80 < grades[j] && grades[j] < 101) {
        grades_letters.push("A")
    }
    if (60 < grades[j] && grades[j] < 80) {

        grades_letters.push("B")
    }
    if (40 < grades[j] && grades[j] < 60) {

        grades_letters.push("C")
    }
    if (20 < grades[j] && grades[j] < 40) {

        grades_letters.push("D")
    }
    if (grades[j] < 20) {

        grades_letters.push("E")
    }
}

console.log("оценки: " + grades.join(" "));
console.log("максимальная оценка: " + maxMark);
console.log("минимальная оценка: " + minMark);
console.log("средняя оценка: " + medMark);
console.log("количество студентов, получивших положительную оценку: " + filterP.length);
console.log("количество студентов, получивших отрицательную оценку: " + filterN.length);
console.log("оценки (буквы): " + grades_letters.join(" "));


