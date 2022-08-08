function inverteString(string) {
    let TheString = "";

    for (var i = string.length - 1; i >= 0; i--) { 
        TheString += string[i]; 
    }
    return console.log(TheString); 
}
 
inverteString('Temos uma string invertida!');