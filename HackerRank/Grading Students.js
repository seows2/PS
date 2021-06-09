'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const getNextGrade = (grade) => {
        let nextGrade = grade;
        while(true){
            if(nextGrade % 5 === 0) break;
            nextGrade++;
        }
        return nextGrade;
    }
    
    const finalGrade = [];
    
    for(const grade of grades){
        if(grade <= 37) {
            finalGrade.push(grade);
            continue;
        }
        const nextGrade = getNextGrade(grade);
        if(Math.abs(nextGrade - grade) < 3) {
            finalGrade.push(nextGrade);
        } else {
            finalGrade.push(grade);
        }
    }
    
    return finalGrade;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
