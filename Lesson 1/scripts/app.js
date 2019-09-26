'use strict';


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
        let productName = productCard.querySelector('h3').innerText;
        let productPrice = +productCard.querySelector('.product_price').innerText;
        basket.addProduct(productId, productName, productPrice);
        modalWindow.refresh();
        modalWindow.addBtnEvents();

    });
});
