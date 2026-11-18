
const catalog = [
  {
    position: 1,
    name: "1984",
    specs: "Антиутопия · 344 страницы",
    description: "Мрачное антиутопичное будущее. Автор: Джордж Оруэлл",
    cover: "images/image4.jpg",
    hasDetails: true 
  },
  {
    position: 2,
    name: "Портрет Дориана Грея",
    specs: "Классика · 210 страниц",
    description: "Рассуждения о вечной молодости и красоте. Автор: Оскар Уайльд",
    cover: "images/image5.jpg",
    hasDetails: false
  },
  {
    position: 3,
    name: "Проект Конец Света",
    specs: "Научная фантастика · 423 страницы",
    description: "Учитель астрономии спасает Землю. Автор: Энди Вейер",
    cover: "images/image3.jpg",
    hasDetails: false
  }
];

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}


const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
  catalogList.replaceChildren();
  
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    // фотки
    const img = document.createElement("img");
    img.src = item.cover;
    img.alt = "Обложка книги " + item.name;
    img.width = 160; 

    const specs = document.createElement("p");
    specs.className = "specs";
    specs.textContent = item.specs;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = item.description;

    
    card.append(title, img, specs, description);

   
    if (item.hasDetails) {
      const linkP = document.createElement("p");
      const link = document.createElement("a");
      link.href = "item.html";
      link.textContent = "Подробнее";
      linkP.append(link);
      card.append(linkP);
    }

    catalogList.append(card);
  }

  if (items.length === 0) {
    statusText.textContent = "По вашему запросу ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

renderCatalog(catalog);


const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});