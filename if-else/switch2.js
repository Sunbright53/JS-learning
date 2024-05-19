function Animal(type) {
  let AnimalType;
  switch (type) {
    case "Cat":
      AnimalType = 3000;
      break;
    case "Dog":
      AnimalType = 5000;
      break;
    case "Fish":
      AnimalType = 200;
      break;
    default:
      AnimalType = 0;
  }
  return AnimalType + AnimalType * (7 / 100);
}
console.log(Animal("Cat"));
console.log(Animal("Cat") + Animal("Fish"));
