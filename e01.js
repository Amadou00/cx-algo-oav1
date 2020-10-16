function howManyCamelCase(str){
    let nbWords = 0;
    if (str != ""){
        nbWords = 1;
    }
    for (let i = 0; i < str.length; i++)
    {
        let codeAs = str.charCodeAt(i);
        if (codeAs >= 65 && codeAs <= 90){
            nbWords += 1;
        }
    }
    return nbWords;
}
console.log(howManyCamelCase("exempleDeMotsCollé"));