// single condition
var money = 250;
var money2 = 250;
if (money != money2) {
    console.log("Rifat Is Boroloks"); }
else{
    console.log('Rifat is Gorib');}

// multiple condition
var job = true;
var money3 = 1500;
var house = true;
if (job == true && money3 > 10000) {
    console.log("Valo POLA!!");
}

else{
    console.log("bekar pola");
}


if (job == true || money3 > 10000) {
    console.log("Valo POLA!!");
}
else if (money3 >= 10000) {
    console.log("Valo POLA!!");
}

else{
    console.log("bekar pola");
}


if ((job == true || money3 > 10000) && house == true) {
    console.log("Valo POLA!!");
}
else{
    console.log("bekar pola");
}