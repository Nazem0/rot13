function rot13() {
    const input = document.getElementById('encrypted').value
    const charReg = RegExp("[A-Za-z]");
    let code = [];
    for (let i = 0; i < input.length; i++) {
        if (charReg.test(input[i])) {
            let charCode = input.charCodeAt(i)
            if (charCode >= 65 && charCode <= 90) {
                for (let j = 0; j < 13; j++) {
                    charCode--;
                    if (charCode < 65) { charCode = 90 }
                }
            }
            else if (charCode >= 97 && charCode <= 122) {
                for (let j = 0; j < 13; j++) {
                    charCode--;
                    if (charCode < 97) { charCode = 122 }
                }
            }
            code.push(String.fromCharCode(charCode));
        }
        else {
            code.push(input[i]);
        }
    }
    const decrypted = document.getElementById('decrypted');
    decrypted.innerText = code.toString().replaceAll(",", "");
    console.log(code.toString().replaceAll(",", ""));
    return decrypted.innerText
}


function encryptRot13() {
    const input = document.getElementById('decrypted_').value
    const charReg = RegExp("[A-Za-z]");
    let code = [];
    for (let i = 0; i < input.length; i++) {
        if (charReg.test(input[i])) {
            let charCode = input.charCodeAt(i)
            if (charCode >= 65 && charCode <= 90) {
                for (let j = 0; j < 13; j++) {
                    charCode++;
                    if (charCode > 90) { charCode = 65 }
                }
            }
            else if (charCode >= 97 && charCode <= 122) {
                for (let j = 0; j < 13; j++) {
                    charCode++;
                    if (charCode > 122) { charCode = 97 }
                }
            }
            code.push(String.fromCharCode(charCode));
        }
        else {
            code.push(input[i]);
        }
    }
    const encrypted_ = document.getElementById('encrypted_');
    encrypted_.innerText = code.toString().replaceAll(",", "");
    console.log(code.toString().replaceAll(",", ""));
    return encrypted_.innerText
}