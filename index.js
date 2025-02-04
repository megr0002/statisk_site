console.log("index script loaded");

const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er:", data);

  const markup = data.map((element) => `<a class="category" href="productlist.html?category=${element.category}">${element.category}</a>`).join("");

  console.log("min markup er ", markup);
  listContainer.innerHTML = markup;
}

const myCategory = new URLSearchParams(window.location.search).get("element");

console.log("category", myCategory);

document.querySelector("a").textContent = `${myCategory}`;
