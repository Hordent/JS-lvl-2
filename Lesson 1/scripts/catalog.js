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

class ProductList {
    constructor() {
        this.products = [];
    } 
    fetchGoods() {
        this.products = [
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
    } 
    render() {
        let listHtml = '';
        this.products.forEach(item => {
            const productItem = new ProductItem(item);
            listHtml += productItem.render();
        });
        document.querySelector('.productList').innerHTML = listHtml;
    }
}

class ProductItem {
    constructor ({ id, title, price, img = 'img/no_image.png' }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div data-id=${this.id} class="product">
        <h3>${this.title}</h3>
        <img src=${this.img} alt=${this.title} />
        <p>
            <span>Цена:</span>
            <span class="product_price">${this.price}</span>
            <span>руб.</span>
        </p>
        <div class="product_btn">Купить</div>
    </div>`
    }
}
