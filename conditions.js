// Исходные данные
const itemName = "1984";
const unitValue = 300;
const extraValue = 100;
const isTraining = true;

// Функция для расчёта
function getResult(quantityText, unitAmount, extraAmount) {
  
  // Проверка 1 пустая строка 
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  // Преобразуем строку в число
  const quantity = Number(quantityText);

  // Проверка 2 ввод числа
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  // Проверка 3 число должно быть больше нуля
  if (quantity <= 0) {
    return "Ошибка: нужно положительное целое количество";
  }

  // Проверка 4 число целое
  if (!Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  // если успешно
  const totalAmount = unitAmount * quantity + extraAmount;
  
  return "Итого: " + totalAmount;
}





console.log("Название книги:", itemName);

// 1. 2 книги
console.log("Тест 1 (2 книги):", getResult("2", unitValue, extraValue)); 

// 2. 3 книги
console.log("Тест 2 (1 книга):", getResult("1", unitValue, extraValue)); 

// 3. 3 книги
console.log("Тест 3 (3 книги):", getResult("3", unitValue, extraValue)); 

// 4. Пустая строка
console.log("Тест 4 (пусто):", getResult("", unitValue, extraValue)); 

// 5. Только пробелы
console.log("Тест 5 (пробелы):", getResult("   ", unitValue, extraValue)); 

// 6. Слово вместо числа
console.log("Тест 6 (слово):", getResult("два", unitValue, extraValue));  

// 7. Бесконечность
console.log("Тест 7 (Infinity):", getResult("Infinity", unitValue, extraValue)); 

// 8. Ноль
console.log("Тест 8 (ноль):", getResult("0", unitValue, extraValue)); 

// 9. Отрицательное
console.log("Тест 9 (минус):", getResult("-1", unitValue, extraValue)); 

// 10. Дробное
console.log("Тест 10 (дробь):", getResult("1.5", unitValue, extraValue)); 

// 11. Пробелы вокруг числа
console.log("Тест 11 (пробелы вокруг):", getResult(" 2 ", unitValue, extraValue)); // 

// 12. Изменим цену книги на +10 (ожидаем 720)
console.log("Тест 12 (цена +10):", getResult("2", unitValue + 10, extraValue));

// 13. Изменим доставку на +10 (ожидаем 710)
console.log("Тест 13 (доставка +10):", getResult("2", unitValue, extraValue + 10));