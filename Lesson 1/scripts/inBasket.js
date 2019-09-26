'use strict';
let basket = {
    basketList: [],

    /**
     *Добавляет продукт в корзину
     * @param {*} id id продукта
     * @param {*} name
     * @param {*} price
     */
    addProduct(id, name, price) {
        let basketId = this.getBasketId(id);

        if (basketId === null) {
            let newItem = new productItem;
            newItem.id = id;
            newItem.name = name;
            newItem.price = price;
            newItem.qty = 1;
            basket.basketList.push(newItem);
        } else {
            basket.basketList[basketId].qty++;
        }

    },

    removeOneProduct(id) {
        let basketId = this.getBasketId(id);
        if (this.basketList[basketId].qty === 1) {
            this.basketList.splice(basketId, 1);
        } else {
            this.basketList[basketId].qty--;
        }
    },
    removeAllProducts(id) {
        let basketId = this.getBasketId(id);
        this.basketList.splice(basketId, 1);
    },

    /**
     *Получаем номер добавленного продукта в массиве корзины. 
     * @param {number} id
     * @returns {number}
     */
    getBasketId(id) {
        for (let i = 0; i < this.basketList.length; i++) {
            if (id === basket.basketList[i].id) {
                return i;
            }
        }
        return null;
    },

    calcTotalSum() {
        let totalSum = 0;
        this.basketList.forEach(element => {
            totalSum += element.sum;
        });
        return totalSum;
    }
}

class productItem {
    id = "";
    name = "";
    price = "";
    qty = "";
    get sum() {
        return Math.round(this.price * this.qty * 10) / 10;
    }
}