// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  let y = Number.isInteger(year);
  let m = Number.isInteger(month);
  let d = Number.isInteger(day);
  if (y && m && d) {
    return true;
  } else return false;
}

function checkOverEighteenFn(year, month, day) {
  let birthday = new Date();
  let y = birthday.getFullYear();
  let m = birthday.getMonth() + 1;
  let d = birthday.getDate();
 
  let ry = y - year;
  let rm = m - month;
  console.log(rm);
  let rd = d - day;
  if (y - year > 18 && month <= 12 && day <= 31) return true;
  return false;
 
}
function calculateAgeFn(year, month, day) {
  let f1 = checkParamsFn(year, month, day);
  let f2 = checkOverEighteenFn(year, month, day);

  let y = new Date().getFullYear();

  if (f1 && f2) {
    let age = y - year;

    return age;
  } else {
    return "error:";
  }
}
// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;