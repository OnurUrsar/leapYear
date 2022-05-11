function isLeap(year) {
  var leap = "Leap year.";
  var notLeap = "Not leap year.";
  if (year % 4 !== 0) {
    return notLeap;
  }
  if (year % 100 !== 0) {
    return leap;
  }
  if (year % 400 !== 0) {
    return notLeap;
  }
  else {
    return leap;
  }
}
