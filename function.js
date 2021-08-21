// function declare
function fanOn() {
    console.log("Douraiya ja Fan On kor");}
// function Call
fanOn();

function singara(money){
    console.log("Singara anar tk ", money);
    console.log("Mama Singara den");
    var singaraPrice= 5;
    var singaraNumber = money / singaraPrice;
    return singaraNumber;
}

var taka = 250;
var singara1 = singara(taka);
console.log("Ai nen Singara" , singara1);