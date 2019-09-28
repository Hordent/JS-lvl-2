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
        this.window.insertAdjacentHTML('beforeend', basket.render());
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
        
    }
};