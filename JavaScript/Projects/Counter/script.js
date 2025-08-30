let a = document.querySelectorAll("h2, input");
let count = 0;
let intervalId = null;

function update() {
  a[0].innerText = count;
}

a[1].addEventListener("mouseover", function () {
  intervalId = setInterval(() => {
    count--;
    update();
  }, 100);
});

a[1].addEventListener("mouseout", function () {
  clearInterval(intervalId);
  intervalId = null;
});

a[2].addEventListener("mouseover", function () {
  count = 0;
  update();
});

a[2].addEventListener("mouseout", function () {
  clearInterval(intervalId);
});

a[3].addEventListener("mouseover", function () {
  intervalId = setInterval(() => {
    count++;
    update();
  }, 100);
});
a[3].addEventListener("mouseout", function () {
  clearInterval(intervalId);
});

//   update();
// }
// function decrement() {
//   count--;
//   update();
// }
// function reset() {
//   count = 0;
//   update();
// }
