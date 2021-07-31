import Keyboard from "./utils/keyboard.js";
import Inquirer from "inquirer";

const main = () => {
    const keyboard = new Keyboard();
    Inquirer.prompt({
        name: 'res',
        message: 'write a message (only letters):'
    }).then(answer => {
        let result = keyboard.keyboardSequence(answer.res);
        console.log(result);
    });
}

main();
