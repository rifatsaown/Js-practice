// find index fromm array 
var randomName = ["rat", "rif", "hablu", "dablu", "kablu"];
var randomNumber = [20,50,60,74,45,63];
// Array Position Start With 0 1 2 3 4 ...
var indexName = randomName.indexOf("hablu");
console.log(indexName);

var indexName2 = randomName[3];
console.log(indexName2);

var indexNumber = randomNumber.indexOf(45);
console.log(indexNumber);

// Array Element Change
console.log(randomNumber);
randomNumber[1] = 53;
randomNumber[2] = 62;
console.log(randomNumber);

// Array Element Change 2
console.log(randomName);
randomName[0]="Ratri";
randomName[1]="Rifat";
console.log(randomName);