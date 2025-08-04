const students = ["Ethan", "Maryam", "Fatma", "Aline"];

// const colors = ["blue", "red", "green", "yellow"];
import chalk from "chalk";

// function loop(table){
//     table.forEach(line => {
//             console.log(chalk.blue(line));
//             console.log(chalk.red(line));
//             console.log(chalk.green(line));
//             console.log(chalk.yellow(line));
//     });
// }

// loop(students);

console.log(chalk.blue(students[0]));
console.log(chalk.red(students[1]));
console.log(chalk.green(students[2]));
console.log(chalk.yellow(students[3]));