let menu = {
  ข้าว: ["ข้าวมันไก่", "ข้าวราดแกงเขียวหวาน", "ข้าวยำเป็ดย่าง"],
  ขนม: ["พุดดิ้ง", "แอแคร", "ทองหยอด"],
  น้ำดื่ม: ["โคล่า", "เลม่อนโซดา", "น้ำเปล่า"],
};
console.log(menu);

console.log(menu.ข้าว[0]);
console.log(menu.ข้าว[2]);
console.log(menu.ขนม[2]);
console.log(menu.น้ำดื่ม[1]);

menu.ข้าว.push("ข้าวแกงกะหรี่แมว");
menu.ข้าว.unshift("สเต็กคาปิบาล่า");
console.log(menu.ข้าว);
menu.ขนม.push("ข้าวโพดแท่งอบกรอบ");
menu.ขนม.push("เล็บขบราดซอสกีวี่ทารองเท้า");
console.log(menu.ขนม);
menu.ขนม.unshift("ขนมสไลม์ต่างโลก");
console.log(menu.ขนม);
console.log(menu.ขนม[0], menu.ขนม[5]);
menu.ขนม[3] = "ขนมนมแมวท้องสามเดือน";
console.log(menu.ขนม[3]);
console.log(typeof menu.ขนม[5]);

let num = {
  OnetoTen: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  EleventoTwenty: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};
console.log(num.OnetoTen.length);
console.log(num.EleventoTwenty.length);
console.log(num);
console.log(num.OnetoTen[1], num.OnetoTen[9]);
console.log(num.EleventoTwenty[0] + num.OnetoTen[0]);
console.log(
  num.OnetoTen[5] >= num.EleventoTwenty[8] ||
    num.EleventoTwenty[10] < num.EleventoTwenty[2]
);

num.OnetoTen[1] = 0;
console.log(num.OnetoTen[1]);
num.OnetoTen.push(12);
console.log(num.OnetoTen);
num.OnetoTen.unshift(0);
console.log(num.OnetoTen);
num.EleventoTwenty.push(11.2);
console.log(num.EleventoTwenty);
num.EleventoTwenty.unshift(20.15);
console.log(num.EleventoTwenty);

num.EleventoTwenty.pop();
num.EleventoTwenty.shift();
console.log(num.EleventoTwenty);
console.log(num.EleventoTwenty.length);
console.log(typeof num.EleventoTwenty);
console.log(typeof num.OnetoTen);
console.log(typeof num);
console.log(typeof num.EleventoTwenty[2]);
console.log(Array.isArray(num.EleventoTwenty[2]));
console.log(Array.isArray(num.EleventoTwenty));
console.log(Array.isArray(num));
