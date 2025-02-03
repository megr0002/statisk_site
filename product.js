let produktContainer = document.querySelector(".product_grid");
const productId = 1525;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    const discount = data.discount || false; // Ensuring discount is defined

    produktContainer.innerHTML = `<div class="product-image">
                            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tøj">
                        </div>
                        <div class="product-info">
                            <h2>Product Information</h2>
                            <h4>Model name:</h4>
                            <p>${data.productdisplayname}</p>
                            <h4>Brand:</h4>
                            <p>${data.brandname}</p>
                        </div>
                        <div class="product-summary">
                            <h2>${data.productdisplayname}</h2>
                            <p>${data.brandname}</p>

                            <label for="size">Choose a size:</label>
                            <select id="size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <button>Add to basket</button>
                        </div>
      
    `;
  });

function myFetch() {
  fetch("https://kea-alt-del.dk/t7/api/products/1125")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching product:", error));
}

/************* kig på opgaven singe view fra i torsdags ***********/
