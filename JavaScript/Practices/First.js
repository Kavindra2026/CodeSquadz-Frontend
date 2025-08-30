function one() {
  alert("First alert");
  var a = prompt("Enter name", "Kavindra Singh");
  console.log(a);
  console.log(typeof a);
}
function changebg() {
  var a = prompt("Enter the bgColor");
  document.bgColor = a;
  var b = prompt("enter text color");
  document.fgColor=b;
}
function calulator(){
   var a=parseInt(prompt("enter first"));
   var b= parseInt(prompt("enter first"));
   var c=  a+b;
   console.log(c);
}
