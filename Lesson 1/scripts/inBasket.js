'use strict';
class Basket {
    basketList = [];

    /**
     *Добавляет продукт в корзину
     *
     * @param {*} id id продукта
     */
    addProduct(id) {
        let basketId = this.getBasketId(id);

        if (basketId === null) {
            let newItem = new basketItem(id);
            basket.basketList.push(newItem);
        } else {
            basket.basketList[basketId].qty++;
        }

    }
    removeOneProduct(id) {
        let basketId = this.getBasketId(id);
        if (this.basketList[basketId].qty === 1) {
            this.basketList.splice(basketId, 1);
        } else {
            this.basketList[basketId].qty--;
        }
    }
    removeAllProducts(id) {
        let basketId = this.getBasketId(id);
        this.basketList.splice(basketId, 1);
    }

    /**
     *Получаем номер добавленного продукта в массиве корзины. 
     * @param {number} id
     * @returns {number}
     */
    getBasketId(id) {
        let n = this.basketList.findIndex((item) => item.id === id);
        return n < 0 ? null : n;

    }

    calcTotalSum() {
        // let totalSum = 0;
        return this.basketList.reduce((totalSum, element) => totalSum += element.sum, 0)
    
    }

    render() {
        let basketHTML = '';
        if (basket.basketList.length === 0) {
            basketHTML = `<div class="b-basket__empty">Корзина пуста</div>`;

        } else {
            basketHTML = `
            <div class="b-basket">
                <h3>Товары в корзине</h3>
                <hr>
                <table>
                    <tr>
                        <td>Наименование</td>
                        <td>Кол-во</td>
                        <td>Цена</td>
                        <td>Стоимость</td>
                    </tr>`;
            basket.basketList.forEach(element => {
                basketHTML += element.render();
            });
            basketHTML += `
                </table>
                <div class="b-basket_total">
                    <span>Итоговая сумма: ${basket.calcTotalSum()} руб.</span>
                </div>
            </div>`;
        }
        return basketHTML;

    }
}


class basketItem {
    constructor(id) {
        let product = products.find((item) => item.id === id);
        this.id = product.id;
        this.name = product.title;
        this.price = product.price;
        this.qty = 1;
    }
    get sum() {
        return Math.round(this.price * this.qty * 10) / 10;
    }

    render() {
        return `
        <tr class="b-basket_productRow">
            <td class="id hide">${this.id}</td>
            <td class="b-basket_productName">${this.name}</td>
            <td>${this.qty}</td>
            <td>${this.price}</td>
            <td>${this.sum}</td>
            <td class="b-iconRemove"><i class="far fa-minus-square"></i></td>
            <td class="b-iconRemoveAll"><i class="fas fa-trash-alt"></i></td>
        </tr >`
    }
}