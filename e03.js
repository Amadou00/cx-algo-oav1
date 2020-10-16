function marsos(str){
    let sos = "SOS";
    let suite = "";
    let erreur = 0;
    for (let i = 0; i < str.length; i+=3)
    {
        if (str[i] != sos[0]){
            erreur += 1;
        }
        if (str[i+1] != sos[1]){
            erreur += 1;
        }
        if (str[i+2] != sos[2]){
            console.log(suite)
            erreur += 1;
        }

    }
    return erreur;
}

console.log(marsos("SOFSOSSISSOWSOS"));