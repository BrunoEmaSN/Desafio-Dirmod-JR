import Keyboard from "./utils/keyboard.js";

const main = () => {
    const keyboard = new Keyboard();
    let s1 = 'hi';
    let result = keyboard.keyboardSequence(s1);
    console.log(result);
}

main();