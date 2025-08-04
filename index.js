const students = ["Ethan", "Maryam", "Fatma", "Aline", "Zaher", "Benjamin"];

const colors = ['blue', 'red', 'green', 'yellow', 'magenta', 'cyan', 'grey'];

import chalk from "chalk";

function loop(table){
    for (const line of table) {
        console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](line));
    }
    // const color = colors[i];
    // table = table[i];
    // for (let i = 0; i < table.length; i++) {
    //         console.log(chalk.color(student));
    //     }
}

loop(students);

// console.log(chalk.blue(students[0]));
// console.log(chalk.red(students[1]));
// console.log(chalk.green(students[2]));
// console.log(chalk.yellow(students[3]));