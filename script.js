
const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    price: 300,
    cover: "image4.jpg"
  },
  {
    title: "Портрет Дориана Грея",
    author: "Оскар Уайльд",
    price: 250,
    cover: "image5.jpg"
  },
  {
    title: "Проект Конец Света",
    author: "Энди Вейер",
    price: 400,
    cover: "image3.jpg"
  }
];


const selectedBook = books[0]; 


const itemName = selectedBook.title;
const unitPrice = selectedBook.price;
const quantityText = "2"; // Количество в виде строки 
const deliveryPrice = 100;
const isTraining = true;


console.log("--- Исходные данные ---");
console.log("Выбрана книга:", itemName);
console.log("Автор книги:", selectedBook.author);
console.log("Цена за 1 шт:", unitPrice);
console.log("Количество (строка):", quantityText);
console.log("Тип количества:", typeof quantityText); 
console.log("Учебные данные:", isTraining);

const quantity = Number(quantityText);
console.log("Количество (число):", quantity);
console.log("Тип количества после преобразования:", typeof quantity); 


const totalPrice = unitPrice * quantity + deliveryPrice;

console.log("Итого:", totalPrice);


console.log("Список всех книг:", books);