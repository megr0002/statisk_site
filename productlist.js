/************** Alle proukter på listen linker til ét bestemt produkt nu *******************/

const category = new URLSearchParams(window.location.search).get("category");

const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";

  products
    .map((product) => {
      markup += `<div class="kort">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Puma jacket">
                <h2>${product.productdisplayname}</h2>
                <div>
                    <p class="brand">${product.brandname}</p>
                    <p>${product.price}DKK</p>

                      <div class="discount ${product.discount && "isVisible"}">${product.discount}%</div>



                <div class="sold_out ${product.soldout && "isVisible"}">Sold Out</div>
                
                    <a href="product.html?id=${product.id}">Se mere</a>
                </div>
            </div>`;
    })
    .join("");
  console.log("min markuper ", markup);
  listContainer.innerHTML = markup;
}
