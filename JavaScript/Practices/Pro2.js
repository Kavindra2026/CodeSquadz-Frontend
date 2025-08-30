function cal() {
  var a = document.querySelectorAll("input, Select");
  console.log(a);
  if (a[2].value == "Add") {
    a[3].value = parseInt(a[0].value) + parseInt(a[1].value);
  } else if (a[2].value == "Sub") {
    a[3].value = parseInt(a[0].value) - parseInt(a[1].value);
  } else if (a[2].value == "Multi") {
    a[3].value = parseInt(a[0].value) * parseInt(a[1].value);
  } else if (a[2].value == "Div") {
    a[3].value = parseInt(a[0].value) / parseInt(a[1].value);
  } else {
    alert("pleas select anyone operation");
  }
}
