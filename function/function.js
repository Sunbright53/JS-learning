function addNum(a, b, c) {
  let result = a + b + c;
  return result;
}
let resuleAdd = addNum(10, 15, 20);
console.log(resuleAdd);

function CalRubicArea(d, e, f) {
  let resultArea = d * e * f;
  return resultArea;
}
let ResultRuArea = CalRubicArea(10, 20, 30);
console.log(ResultRuArea);

function CircleArea(r) {
  let resultCir = 3.14 * (r * r);
  return resultCir;
}
let CircleCal1 = CircleArea(20);
console.log(CircleCal1);

function PowerCal(User, Ft) {
  let CalPowerless150 =
    User * Ft + 8.19 + Ft + (User * Ft + 8.19 + Ft) * (7 / 100);
  return CalPowerless150;
}
let PowerHome1Cal = PowerCal(70, 3.972);
console.log(PowerHome1Cal);

function NameHome(X) {
  return `let go to ${X}`;
}
let HomeSunbright = NameHome("Sunbright house");
console.log(HomeSunbright);

function Hometown(name, address) {
  return `Do you wanna go to ${name}. That allright, where is it? You are going to the state here and ask someone of address ${address}.`;
}
let Sentence = Hometown(
  "Majunija",
  "145/24, Wallstress, Pendison road, Thailun"
);
console.log(Sentence);

let Dota2Hero = function (X) {
  return `${X} is my favarite hero`;
};
let Myhero = Dota2Hero("Orge Magi");
console.log(Myhero);

console.log(typeof Dota2Hero); //type=>
console.log(typeof Myhero);
