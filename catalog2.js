
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


const catalog = [
  {
    position: 1,
    name: "1984",
    specs: "Антиутопия · 344 страницы",
    description: "Мрачное антиутопичное будущее. Автор: Джордж Оруэлл"
  },
  {
    position: 2,
    name: "Портрет Дориана Грея",
    specs: "Классика · 210 страниц",
    description: "Рассуждения о вечной молодости и красоте. Автор: Оскар Уайльд"
  },
  {
    position: 3,
    name: "Проект Конец Света",
    specs: "Научная фантастика · 423 страницы",
    description: "Учитель астрономии спасает Землю. Автор: Энди Вейер"
  }
];


const selectedName = "1984"; 
const quantityText = "2";
const unitValue = 300;
const extraValue = 100;

console.log("Записей в каталоге: " + catalog.length);

for (const item of catalog) {
  console.log("-------------------");
  console.log(item.position + ". " + item.name);
  console.log("Характеристика: " + item.specs);
  console.log("Описание: " + item.description);
}


console.log("\n--- Поиск и расчёт ---");
let foundCount = 0;

for (const item of catalog) {
  
  if (item.name === selectedName) {
    foundCount = foundCount + 1; // Считаем найденные
    
    console.log("Выбрано для расчёта: " + item.name);
    
    
    const message = getResult(quantityText, unitValue, extraValue);
    console.log(message);
  }
}


console.log("\nНайдено записей: " + foundCount);

if (foundCount === 0) {
  console.log("Запись не найдена: " + selectedName);
}

if (foundCount > 1) {
  console.log("Внимание: Проверьте повторяющиеся названия!");
}


console.log("\n МЕТОДЫ МАССИВОВ"); // !!!

console.log("Таблица каталога:");
console.table(catalog);


const names = catalog.map(item => item.name);
console.log("Массив названий:", names);
console.log("Количество названий:", names.length);


const filteredBooks = catalog.filter(item => item.name.includes("Портрет"));
console.log("Найдено по слову 'Портрет':", filteredBooks.length);
console.log("Их названия:", filteredBooks.map(item => item.name));

// находим ровно одну запись
const searchName = "1984";
const foundBook = catalog.find(item => item.name === searchName);

console.log("Поиск книги:", searchName);

if (foundBook) {
  console.log("Найдена книга:", foundBook.name);
  console.log("Характеристика:", foundBook.specs);
  console.log("Описание:", foundBook.description);
} else {
  console.log("Запись не найдена");
}

// Ищет совпадения без учета регистра и пробелов
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  
  // Если строка пустая — возвращаем все книги
  if (normalized === "") {
    return items;
  }
  
  // Иначе фильтруем по названию
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// Тестируем функцию filterByText
console.log("\n--- Тесты функции filterByText ---");
console.log("Запрос '' (пустой):", filterByText(catalog, "").length); // Должно быть 3
console.log("Запрос '1984':", filterByText(catalog, "1984").length); // Должно быть 1
console.log("Запрос '  пОрТрЕт  ':", filterByText(catalog, "  пОрТрЕт  ").length); // Должно быть 1 (без учета регистра и пробелов)
console.log("Запрос 'Гарри Поттер':", filterByText(catalog, "Гарри Поттер").length); // Должно быть 0



console.log("\n DOM и события");


const status = document.querySelector("#status");
const namesList = document.querySelector("#names");
const showButton = document.querySelector("#show-names");


if (status) {
  status.textContent = "В каталоге " + catalog.length + " записи. Первая: " + catalog[0].name;
}


function renderNames() {

  namesList.replaceChildren();
  
  
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}


if (showButton) {
  showButton.addEventListener("click", function () {
    renderNames(); 
    if (status) {
      status.textContent = "Список показан"; 
    }
  });
}





const mainTitle = document.querySelector("h1");

if (mainTitle) {
  if (namesList) {
    mainTitle.textContent = "Книги для свободного вечера";
  }
}