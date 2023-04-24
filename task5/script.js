let textElement;
let input = document.querySelector("#input");
let newtext = document.querySelector("#duplicateField");
input.onkeyup = function() {
  newtext.textContent = input.value;
};
input.onkeyup();
//Возврат текста в консоль
document.querySelector('.btn').addEventListener('click', function() {
  let btn = input.value;
  console.log(btn);
});
 document.querySelector('.btn').addEventListener('click', function(event) {
  input.value = event.preventDefault();
});
//Удаление текста из формы
document.querySelector('.btn').addEventListener('click', function(event) {
  newtext.textContent = event.preventDefault();
});
document.querySelector(".clearBtn").addEventListener('click', function() {
  input.value = "";
});