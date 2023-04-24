
document.querySelector('#textLink').addEventListener('click', 
  (event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('#textLink');
    userTextField.textContent = userText;

})