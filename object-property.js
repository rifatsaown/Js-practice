var computer ={
    Processor: "Ryzen7 4800H",
    Ram: "8GB",
    SSD: "512gb",
    HDD: "1Tb",
    GraphicsCard: "GTX 1660ti GDDR6 6GB",
}

console.log(computer);
computer.Ram = "16GB";
var storage = "HDD";
computer[storage]= "Nar Ar";
console.log(computer);