class Basket {
    constructor() {
        this.items = [];
    }

    fetchItems() {
        return sendRequest('/basket')
            .then((items) => {
                this.items = items;
            });
    }



    get total() {
        return this.items.reduce((acc, item) => acc + item.price * item.qty, 0);
    }
    render() {
        let basketHtml = `<h3>Корзина</h3>`;
        basketHtml += this.items.map((item) => this.renderItem(item)).join('');
        basketHtml += `
        <div class="b-basket_total">
        <p>Общая сумма: ${this.total} руб.</p> 
        </div>`;
        return basketHtml;

    }

    renderItem(item) {
        return `
        <div class="b-basket_row">
        <p>Наименование: ${item.title}</p>
        <p>Цена:${item.price} руб.</p>
        <p>Количество: ${item.qty}</p>
        </div>`
    }
}

const basket = new Basket();
basket.fetchItems().then(() => {
    document.querySelector('.b-basket').innerHTML = basket.render();
});