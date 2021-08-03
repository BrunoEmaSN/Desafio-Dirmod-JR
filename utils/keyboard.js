export default class Keyboard {
    constructor(){
        this._keyboards = this.buildKeys();
    }

    get keyboards() {
        return this._keyboards;
    }

    buildKeys(){
        const keyboards = new Object();
        let count = 0;
        let typeKeyboard;
        for(let i = 2; i <= 9; i++){
            if(i == 7 || i == 9){
                typeKeyboard = 4;
            }
            else{
                typeKeyboard = 3;
            }
            for(let j = 1; j <= typeKeyboard; j++){
                let letters = (count + 10).toString(36).toUpperCase();
                keyboards[letters] = this.repeatValues(i, j);
                count++;
            }
        }

        keyboards[' '] = 0;
        return keyboards;
    }

    repeatValues(i, j){
        let values = '';
        for(let x = 1; x <= j; x++){
            values += `${i}`
        }

        return values;
    }

    keyboardSequence(str){
        if(str.length === 0) throw new Error('empty value');
        let result = '';
        let alphabet = this._keyboards;
        let letters = str.toUpperCase().split('');
        for(let i = 0; i < letters.length; i++){
            if(alphabet[letters[i]] === undefined) throw new Error('only letters are allowed');
            if(i > 0){
                let key1 = alphabet[letters[i]][0];
                let key2 = alphabet[letters[i - 1]][0];
                if(key1 === key2){
                    result += ' ' + alphabet[letters[i]];
                }
                else{
                    result += alphabet[letters[i]];
                }
            }
            else{
                result += alphabet[letters[i]];
            }
        }
        return result;    
    }
}
