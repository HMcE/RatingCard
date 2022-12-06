const buttons = document.querySelectorAll(".number_item");
const submit = document.querySelectorAll(".btn_submit");
const rating = document.querySelectorAll(".span_value");
const card = document.querySelectorAll(".selection_card");
const success = document.querySelectorAll(".selected");

let value;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("list_change"));
    e.target.classList.add("list_change");
    value = e.target.textContent;
  });
});
submit.addEventListener("click", () => {
  rating.textContent = value;
  card.style.display = "none";
  success.style.display = "flex";
});
