function domselector() {
  // var a = document.getElementById('one');
  // var a = document.getElementsByClassName('first');
  // var a = document.getElementsByTagName('p');
  // var a = document.querySelector('.first,#one');
  // var a = document.querySelectorAll('.first,#one');
  var a = (document.getElementById("one").innerHTML = "ttttt");
  console.log(a);
  console.log(typeof a);
  alert(a);
}

function domselector1() {
  var a = document.querySelectorAll("p,input");
  console.log(a);
  a[5].value = "kumar";
  a[1].innerHTML = "this is mytext <span>sdkfjsdhfjsdhf</span> <hr>";
  a[2].innerText = "only pass content here...";
}
