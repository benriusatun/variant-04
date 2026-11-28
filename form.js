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

console.log("Форма запущена");

const form = document.querySelector("form");
const result = document.querySelector("#result");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const quantityText = document.querySelector("#count").value;
    const select = document.querySelector("#book");
    const itemName = select.options[select.selectedIndex].text;
  
    const unitValue = Number(select.value); 
    
    const extraValue = 100; 

    const message = getResult(quantityText, unitValue, extraValue);

    if (result) {
      result.textContent = itemName + ". " + message;
    }
  });
}