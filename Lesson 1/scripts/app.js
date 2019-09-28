'use strict';
let productList = new ProductList();
productList.fetchGoods();
productList.render();
let basket = new Basket();

let basketBtn = document.querySelector('.header_basketBtn');
basketBtn.addEventListener('click', function (event) {
    modalWindow.show();
    modalWindow.refresh();
    modalWindow.addBtnEvents();
});

modalWindow.modalClose.addEventListener('click', function (event) {
    modalWindow.hide();
});

//Работа с карточками товара
let productBtns = document.querySelectorAll('.productList .product .product_btn');
productBtns.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let productCard = event.target.parentNode;
        let productId = +productCard.getAttribute('data-id');
        basket.addProduct(productId);
        modalWindow.refresh();
        modalWindow.addBtnEvents();

    });
});
