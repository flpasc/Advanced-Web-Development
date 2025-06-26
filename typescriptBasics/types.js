"use strict";
const allStudents = [
    {
        firstName: 'Florian',
        lastName: 'Schoene',
        age: 33,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
    {
        firstName: 'Paul',
        lastName: 'Peterson',
        age: 24,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
    {
        firstName: 'Max',
        lastName: 'Meier',
        age: 23,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
    {
        firstName: 'Peter',
        lastName: 'Strich',
        age: 21,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
    {
        firstName: 'Anna',
        lastName: 'Schroetert',
        age: 28,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
    {
        firstName: 'Julia',
        lastName: 'Saenger',
        age: 34,
        grades: {
            sport: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            art: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
            maths: [undefined, 1, 'A', 1, 1, 'B', 1, 1],
        },
    },
];
const createDivider = (nameline) => {
    return '='.repeat(nameline.length);
};
const fillEmptyGrades = (gradesArray) => {
    return gradesArray.map((grade) => grade !== null && grade !== void 0 ? grade : '*');
};
const capitaliseWord = (word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);
    return firstLetter + remainingLetters;
};
const listStudents = (studentsArray) => {
    return studentsArray
        .map((student) => {
        const nameline = `${student.firstName} ${student.lastName} (${student.age})`;
        const divider = createDivider(nameline);
        const subjectGradeLines = Object.entries(student.grades).map(([subject, grades]) => {
            const formattedGrades = fillEmptyGrades(grades);
            const uppercaseSubject = capitaliseWord(subject);
            return `${uppercaseSubject}: ${formattedGrades.join(',')}`;
        });
        const grades = `Grades:\n${subjectGradeLines.join('\n')}`;
        return `${nameline}\n${divider}\n${grades}`;
    })
        .join('\n\n\n\n');
};
console.log(listStudents(allStudents));
