let Student1_1 = {
  Name: "Manoph",
  Lastname: "Pasunasa",
  Nickname: "Rocky",
  Age: 5,
};

let Student1_2 = {
  Name: "Varuna",
  Lastname: "Minotota",
  Nickname: "Jumma",
  Age: 6,
};

let Student1_3 = {
  Name: "Paffuri",
  Lastname: "Kiolupa",
  Nickname: "Opally",
  Age: 6,
};

let Student1_4 = {
  Name: "Selfy",
  Lastname: "Haminato",
  Nickname: "Sel",
  Age: 5,
};

let Student1_5 = {
  Name: "Matoshi",
  Lastname: "Dontoid",
  Nickname: "Mato",
  Age: 7,
};

console.log(Student1_2.Lastname);
console.log(Student1_4);
console.log(Student1_5.Nickname);

delete Student1_1.Age;
console.log(Student1_1);
Student1_1.Age = 6;
console.log(Student1_1);
console.log(Student1_2["Age"]);
delete Student1_2["Age"];
Student1_2["Age"] = 7;
console.log(Student1_2["Age"]);

//ร้านอาหารมีเมนูอยู่ 3 course โดย
//1.Start 2.Main 3.Dessert และ 4.Drink
//Course 1 : Start(ซุปมะม่วงปลาแซลม่อนเค็ม) Main(ข้าวมันไก่ทอดสไตน์เกาหลีเหนือ ย่างที่เกาหลีใต้) Dessert(ขนมปังเนยพริกไทยดำท็อปด้วยขิงผัดเผ็ด)
//Course 2 : Start(ซุปไก่ต้มไวน์แดงที่หมักจากมะม่วงหาว) Main(เนื้อเป็ดพริกไทยขาวยัดด้วยตะไคร้นำเข้าจากอเมริกา) Dessert(ไอศครีมตับห่านบดโรยด้วยผักชี)
//Course 2 : Start(ไข่ต้มบรั่นดีไทยที่หมักจากข้าวต้มเมื่อสองปีก่อน) Main(ป่นปลาทูและน้ำพริกแมวน้ำย่างจากญี่ปุ่น) Dessert(น้ำแข็งไสจากขั้วโลกใต้ราดด้วยเลือดเจ้าของ)

let Course1 = {
  Start: "ซุปมะม่วงปลาแซลม่อนเค็ม",
  Main: "ข้าวมันไก่ทอดสไตน์เกาหลีเหนือ ย่างที่เกาหลีใต้",
  Dessert: "ขนมปังเนยพริกไทยดำท็อปด้วยขิงผัดเผ็ด",
};
let Course2 = {
  Start: "ซุปไก่ต้มไวน์แดงที่หมักจากมะม่วงหาว",
  Main: "เนื้อเป็ดพริกไทยขาวยัดด้วยตะไคร้นำเข้าจากอเมริกา",
  Dessert: "ไอศครีมตับห่านบดโรยด้วยผักชี",
};
let Course3 = {
  Start: "ไข่ต้มบรั่นดีไทยที่หมักจากข้าวต้มเมื่อสองปีก่อน",
  Main: "ป่นปลาทูและน้ำพริกแมวน้ำย่างจากญี่ปุ่นา",
  Dessert: "น้ำแข็งไสจากขั้วโลกใต้ราดด้วยเลือดเจ้าของ",
};

console.log(Course1);
Course1["Price"] = 3580;
Course2["Price"] = 4576;
Course3.Price = 2755;
console.log(Course1["Price"]);
console.log(Course2);
