let youName = true;
let herName = false;
let us = youName + herName;
console.log(typeof youName);
console.log(typeof herName);

//ถ้าต้องการรับผู้มาสมัครงานโดยมาเงื่อนไข 1.ไม่เคยมีประวัติอาชญากรรม 2.เป็นผู้ชาย และ3. ร่างกายพิการ
//กำหนดให้ ไม่ประวัติอาชญากรรม Variable คือ Blacklist  มีค่าเป็น true
//เพศชาย Variable คือ Male มีค่าเป็น true
//ร่างกายปกติ variable คือ NormalBody มีค่าเป็น true
//Reassign เป็น Recruitment
//๋Jimmy มีประวัติ 1.มีประวัติอาชญากรรม 2.เป็นผู้ชาย และ3. ร่างกายปกติ

let nameFrist = "Jimmy";
let Blacklist = true;
let Male = true;
let NormalBody = true;

let Recruitment = !Blacklist && Male && NormalBody;
let RecruitmentName = nameFrist + " " + String(Recruitment);
console.log(Recruitment);
console.log(RecruitmentName);
console.log(typeof Recruitment);
console.log(typeof RecruitmentName);

//Somchai bought oranges expensive more than Mangos 10 baht/
//He bought an apple for 20 baht that cheap more Mango 5 bath
//Now, he has money 10 bath. Does he now have more than the price of the fruit?

let apple = "20";
let mango = Number(apple) + 5;
let oranges = mango + 10;
let PriceofFruit = Number(apple) + mango + oranges;
console.log(PriceofFruit);
let Somchai = 10;
let MoneyNow = Somchai > PriceofFruit;
console.log(MoneyNow);

//ตลาด หวังเจ้าซี่ มีเนื้อสัตว์ขายได้แก่ เนื้อหนู 10 กรัม ไข่ 2 ฟอง แซลม่อน 20 กรัม จู๋หมู 1 อัน และ เนื้อเป็ด 3 กิโลกรัม โดยจะกำหนด Variable ดังนี้ Rat  Egg Salmon Pigdick and Duck
//ร้านอาหาร มู่หวังจี่ ต้องการซื้อ เนื้อหนู 5 กรัม ไข่ 1 ฟอง แซลม่อน 30 กรัม จู๋หมู 10 อัน และ เนื้อเป็ด 30 กิโลกรัม

let Rat = 10;
let Egg = 2;
let Salmon = 20;
let Pigdick = 1;
let Duck = 3;
let RatBuy = 5;
let EggBuy = 1;
let SalmonBuy = 30;
let PigdickBuy = 10;
let DuckBuy = 30;
let ResRat = Rat >= RatBuy;
let ResEgg = Egg >= EggBuy;
let ResSalmon = Salmon >= SalmonBuy;
let ResPigdick = Pigdick >= PigdickBuy;
let ResDuck = Duck >= DuckBuy;
let ResBuy = ResRat && ResEgg && ResSalmon && ResPigdick && ResDuck;
console.log(ResRat);
console.log(ResEgg);
console.log(ResSalmon);
console.log(ResPigdick);
console.log(ResDuck);
console.log(ResBuy);
console.log(typeof ResDuck);
console.log(typeof EggBuy);

let EqualityOne = 1 == "1";
console.log(EqualityOne);
let EqualityTwo = 1 == "2";
console.log(EqualityTwo);
let EqualityThree = 1 != 1;
console.log(EqualityThree);
let EqualityFour = 5 != 8;
console.log(EqualityFour);
