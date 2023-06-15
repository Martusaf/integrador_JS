const productContainer = document.querySelector (".product-container");





const productSetting = (product) => {
const {id, name, price, cardImg} = product;
    return `
    <div class="product">
        <img src=${cardImg} alt=${name}/>
        <h3>${name}</h3>
        <p>${price}$</p>
        <button class="btn" data-id="${id}" data-name="${name}" data-price="${price}" data-img="${cardImg}">
        add to cart
        </button>
    </div>
  `
}



const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(productSetting).join("");
};







const init = () => {
    renderProducts(productInfo);
};

init();
