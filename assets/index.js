const productContainer = document.querySelector (".product-container");
const navbar = document.querySelector("header");
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');
const imgWidth = carouselInner.offsetWidth;

let position = 0;


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

navbar.addEventListener("mouseover", () => {
    navbar.style.backgroundColor = "white";
  });
  
navbar.addEventListener("mouseout", () => {
   navbar.style.backgroundColor = "#ffffffb8";
  });

const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(productSetting).join("");
};

nextBtn.addEventListener('click', () => {
    position -= imgWidth;
    position = Math.max(position, -imgWidth * (carouselInner.children.length - 1));
    carouselInner.style.transform = `translateX(${position}px)`;
  });
  
  prevBtn.addEventListener('click', () => {
    position += imgWidth;
    position = Math.min(position, 0);
    carouselInner.style.transform = `translateX(${position}px)`;
  });

  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    position -= imgWidth;
    position = Math.max(position, -imgWidth * (carouselInner.children.length - 1));
    carouselInner.style.transform = `translateX(${position}px)`;
  });
  
  prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    position += imgWidth;
    position = Math.min(position, 0);
    carouselInner.style.transform = `translateX(${position}px)`;
  });



const init = () => {
    renderProducts(productInfo);
};

init();
