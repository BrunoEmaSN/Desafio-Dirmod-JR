export default class Keyboard {
    constructor(){
        this.keyboards = this.buildKeys();
    }

    buildKeys(){
        const keyboards = new Object();
        let count = 0;
        for(let i = 2; i <= 9; i++){
            let typeKeboard = i == 7 || i == 9 ? 4 : 3;
            for(let j = 1; j <= typeKeboard; j++){
                let letters = (count + 10).toString(36).toUpperCase();
                keyboards[letters] = {
                    key: i,
                    value: this.repeatValues(i, j)
                };
                count++;
            }
        }

        keyboards[' '] = { key: 0, value: 0 };
        return keyboards;
    }

    repeatValues(i, j){
        let values = '';
        for(let x = 1; x <= j; x++){
            values += `${i}`
        }

        return values;
    }

    keyboardSequence(str, alphabet){
        let result = '';
        let letters = str.toUpperCase().split('');
        for(let i = 0; i < letters.length; i++){
            if(i > 0){
                let key1 = alphabet[letters[i]].key;
                let key2 = alphabet[letters[i - 1]].key;
                if(key1 === key2){
                    result += ' ' + alphabet[letters[i]].value;
                }
                else{
                    result += alphabet[letters[i]].value;
                }
            }
            else{
                result += alphabet[letters[i]].value;
            }
        }
        return result;    
    }
}