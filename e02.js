function IsAPangrams(str){
    str = str.toLowerCase();
    let pangram = false;
    let lstAsMaj = [];
    let lstAsMin = [];
    let ind = [];
    let count = 0;
    for (let i = 0; i < 25; i++)
    {
        lstAsMaj.push(i+65);
        lstAsMin.push(i+97);
        
    }
    for (let i = 0; i < str.length; i++)
    {
        let y = 0;
        const codeAs = str.charCodeAt(i);
        ind.push(codeAs);
    }
    ind = Array.from(new Set(ind));
    for (let i = 0; i < ind.length; i++)
    {
        if (lstAsMin.includes(ind[i])){
            count ++;
        }
        if (count == 25){
            pangram = true;
        }
    }
    return pangram;
}

console.log(IsAPangrams("The quick brown fox jumps over the lazy dog"));
console.log(IsAPangrams("Hello Efrei"));
//Vérifier aussi pour les maj.