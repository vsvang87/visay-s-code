const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

//using for each methods
buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    //if class list contains decrease then it will decrease the value
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    //setting colors for decrease and increase
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});
