let chocolate = 100;
let pork = "200";
let total = chocolate + pork;
console.log(total);
Number(pork);
let newtotal = chocolate + Number(pork);
console.log(newtotal);
console.log(typeof total);
console.log(typeof newtotal);

let sukiTeenoi = 500;
let Oshine = "800";
let RestaurangOne = "sukiTeenoi";
let RestaurangTwo = "Oshine";
let messageofMe = `Today, I have ${RestaurangOne} and ${RestaurangTwo} that pay ${
  sukiTeenoi + Number(Oshine)
} Baht`;
console.log(messageofMe);
console.log(typeof sukiTeenoi);
console.log(typeof Oshine);
console.log(typeof messageofMe);

let DrinkingWater = 0;
let Sparking = 18;
let greenTea = "20";
let greenTeaBrand = `Oishi greentea lamon`;
let DrinkingWaterbrand = `Singha`;
let Sparkingbrand = `Pepsi`;
let sentent = `What are you offering today? \nWe have ${greenTeaBrand}, ${Sparkingbrand} and water brand ${DrinkingWaterbrand}. \nWhat do you want ser? Give me ${Sparking} and ${greenTea}, please. \nAll of this is ${
  Sparking + Number(greenTea)
}. \nthank you.`;
console.log(sentent);
console.log(typeof sentent);
console.log(typeof greenTea);
console.log(typeof Sparking);
