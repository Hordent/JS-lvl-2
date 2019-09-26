'use strict';

let modalWindow = {
    window: document.querySelector('.b-modal'),
    modalClose: document.querySelector('.b-modal__close'),
    hide() {
        this.window.classList.add('b-modal_hide');
    },
    show() {
        this.window.classList.remove('b-modal_hide');
    },

    refresh() {
        this.clear();
        this.window.insertAdjacentHTML('beforeend', this.getBasketHMTL());

    },

    clear() {
        let content = this.window.querySelector('div');
        if (!(content === null)) {
            this.window.removeChild(content);
        }

    },
    addBtnEvents() {
        if (basket.basketList.length > 0) {
            let minus = this.window.querySelectorAll('.b-iconRemove');
            minus.forEach(element => {
                element.addEventListener('click', function (event) {
                    let productId = +event.target.parentNode.parentNode.querySelector('.id').innerText;
                    basket.removeOneProduct(productId);
                    modalWindow.refresh();
                    modalWindow.addBtnEvents();
                });
            });
            let trash = this.window.querySelectorAll('.b-iconRemoveAll');
            trash.forEach(element => {
                element.addEventListener('click', function (event) {
                    let productId = +event.target.parentNode.parentNode.querySelector('.id').innerText;
                    basket.removeAllProducts(productId);
                    modalWindow.refresh();
                    modalWindow.addBtnEvents();
                });
            })
        }
    },
    getBasketHMTL() {
        let basketHTML = '';
        if (basket.basketList.length === 0) {
            basketHTML = `<div class="b-basket__empty">Корзина пуста</div>`;

        } else {
            basketHTML = `<div class="b-basket">`;
            basketHTML += `<h3>Товары в корзине</h3><hr>`;
            basketHTML += `<table>`;
            basketHTML += `<tr><td>Наименование</td><td>Кол-во</td><td>Цена</td><td>Стоимость</td></tr>`;
            basket.basketList.forEach(element => {

                basketHTML += `<tr class="b-basket_productRow">`;
                basketHTML += `<td class="id hide">${element.id}</td>`;
                basketHTML += `<td class="b-basket_productName">${element.name}</td>`;
                basketHTML += `<td>${element.qty}</td>`;
                basketHTML += `<td>${element.price}</td>`;
                basketHTML += `<td>${element.sum}</td>`;
                basketHTML += `<td class="b-iconRemove"><i class="far fa-minus-square"></i></td>`;
                basketHTML += `<td class="b-iconRemoveAll"><i class="fas fa-trash-alt"></i></td>`;
                basketHTML += `</tr>`;
            });
            basketHTML += `</table>`;
            basketHTML += `<div class="b-basket_total"><span>Итоговая сумма: </span>`;
            basketHTML += `<span>${basket.calcTotalSum()}</span>`;
            basketHTML += `<span> руб.</span></div>`;
            basketHTML += `</div>`;
        }
        return basketHTML;
    }
};