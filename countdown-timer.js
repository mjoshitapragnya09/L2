let seconds = prompt("Enter number of seconds:");

let timer = setInterval(() => {
  console.log(seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      clearInterval(timer);
      console.log("Countdown Stopped by User");
    }
  });
}, 500);
