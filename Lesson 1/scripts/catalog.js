const products = [
    {
        id: 1,
        title: 'Компьютерная мышь',
        price: 400,
        img: 'img/product1.jpg',
    },
    {
        id: 2,
        title: 'Жесткий диск SSD 1Tb',
        price: 10000,
        img: 'img/product2.jpg',
    },
    {
        id: 3,
        title: 'Материнская плата',
        price: 4000,
        // img: "http://placeimg.com/640/480/tech",
    },

];

const renderList = (items) => {
    const renderedProducts = items.map(renderItem);

    document.querySelector('.productList').innerHTML = renderedProducts.join('');
}

const renderItem = ({id, title, price, img = 'img/no_image.png'}) => {
    return `<div data-id=${id} class="product">
        <h3>${title}</h3>
        <img src=${img} alt=${title} />
        <p>
            <span>Цена:</span>
            <span class="product_price">${price}</span>
            <span>руб.</span>
        </p>
        <div class="product_btn">Купить</div>
    </div>`

}


renderList(products);