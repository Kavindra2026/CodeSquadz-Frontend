function first() {
  alert("first message");
  console.log("this is message");
  // document.write("this is  first program");
  var a = prompt("enter fullname", "ravi");
  console.log(a);
  console.log(typeof a);
}

function changeback() {
  var a = prompt("enter color");
  var b = prompt("enter text color");
  document.bgColor = a;
  document.fgColor = b;
}

function calcu() {
  var first, second, third;
  // first = eval(prompt("enter first number"));
  // second = eval(prompt("enter second number"));
  first = parseInt(prompt("enter first number"));
  second = parseInt(prompt("enter second number"));
  third = first + second;
  console.log(third);
  console.log(typeof first);
}
