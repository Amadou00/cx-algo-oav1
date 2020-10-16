//4.1
function count(lst, str){
    let nbOccurrences = 0;
    lst.forEach(element => {
        if (str == element){
            nbOccurrences += 1;
        } 
    });
    return nbOccurrences;
}
//console.log(count(["g","c","g","g","c","g","c","g","c"], "g"));

//4.2
function average(lst){
    let ave = 0;
    let count = 0;
    lst.forEach(element => {
        ave += element;
        count++;
    });
    return ave/count;
}
//console.log(average([12,14,12,12,12,12]));

//4.3
function Min(lst){
    let rep = Math.min.apply(Math, lst);
    return rep;
}
//console.log(Min([7,6,1,2,9]))

//4.4
function Max(lst){
    let rep = Math.max.apply(Math, lst);
    return rep;
}
//console.log(Max([7,6,1,9,4]));

//4.6
function Shift(lst){
    const firstElement = lst.shift();
    console.log(lst);
    return firstElement;
}
//console.log(Shift([7,6,1,9,4]))

//4.7
function Diff(lst){
    let max = Max(lst);
    
}