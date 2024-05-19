function Scorebord(score) {
  if (score >= 80 && score < 100) {
    return "A";
  } else if (score >= 60 && score <= 79) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else {
    return "F";
  }
}
console.log(Scorebord(40));
console.log(Scorebord(95));
console.log(Scorebord(70));
console.log(Scorebord(30));
