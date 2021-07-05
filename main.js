// Declaring HTML Elements
const buttons = document.querySelectorAll(".btn");
const countShow = document.getElementById("counter-value");

let count = 0; // Set initial value Zero

buttons.forEach((btn) => {
  //Looping for our three buttons
  btn.addEventListener("click", function (e) {
    const currentBtn = e.currentTarget.classList; //storing class for different button
    if (currentBtn.contains("increase")) {
      count++;
    } else if (currentBtn.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    // Styling Color for counter value

    if (count < 0) {
      countShow.style.color = "#d20505";
    } else if (count > 0) {
      countShow.style.color = "#158201";
    } else {
      countShow.style.color = "#000";
    }

    countShow.textContent = count;
  });
});
