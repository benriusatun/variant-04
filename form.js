
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  const quantity = Number(quantityText);

  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  const totalAmount = unitAmount * quantity + extraAmount;
  return "Итого: " + totalAmount + " руб.";
}

const unitValue = 300;
const extraValue = 100;

console.log("Форма запущена");

const form = document.querySelector("form");
const result = document.querySelector("#result");

if (form) {
  form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    // Читаем значение из поля количества (получаем строку)
    const quantityText = document.querySelector("#count").value;

    // обработка выбранной книги
    const select = document.querySelector("#book");
    const itemName = select.options[select.selectedIndex].text;

    // функция расчета
    const message = getResult(quantityText, unitValue, extraValue);

    // название + результат
    if (result) {
      result.textContent = itemName + ". " + message;
    }
  });
}