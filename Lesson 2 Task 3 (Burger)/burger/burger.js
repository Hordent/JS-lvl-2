'use strict';

class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }


    addTopping() {
        let toppingPrompt = `Выберите топпинг бургера \n`;
        burgerParams.toppings.forEach(elem => toppingPrompt += `${elem.id} - ${elem.title}. Цена: ${elem.price} рублей. Калорийность: ${elem.calories}.\n`);
        let topping = prompt(toppingPrompt);
        if (topping === null) {
            alert(`Операция отменена`);
            return;
        }
        // Проверка на undefined
        let toppingObj = burgerParams.toppings.find(elem => elem.id === +topping)
        if (!toppingObj) {

            return alert(`Такой топпинг отсутсвует`);

        }
        else {
            if (this.toppings.find(elem => elem.id === toppingObj.id)) {
                return alert(`Топпинг уже присутствует`);
            }
            else {
                this.toppings.push(toppingObj);
                return alert(`Топпинг добавлен`);
            }
        }
    }

    removeTopping(toppingId) {
        let n = this.toppings.findIndex(elem => elem.id === toppingId)
        if (n < 0) {
            return alert(`Такого топпинга нет`);
        }
        else {
            this.toppings.splice(n, 1)
            return alert(`Топпинг удален`);

        }
    }

    calcBurger() {
        let toppingPrice = this.toppings.map(elem => elem.price).reduce((a, b) => a + b, 0);
        let toppingCalories = this.toppings.map(elem => elem.price).reduce((a, b) => a + b, 0);
         



        let price = this.size.price + this.stuffing.price + toppingPrice;
        let calories = this.size.calories + this.stuffing.calories + toppingCalories;
        alert(`Итого цена бургера: ${price}\nИтого калорийность бургера: ${calories}`);
    }




};

function getBurgerBase() {
    function getSize() {
        let sizePrompt = `Введите размер бургера \n`;
        burgerParams.size.forEach(elem => sizePrompt += `${elem.id} - ${elem.title}. Цена: ${elem.price} рублей. Калорийность: ${elem.calories}.\n`);
        let size = prompt(sizePrompt);
        if (size === null) {
            alert(`Операция отменена`);
            return;
        }
        // Проверка на undefined
        let sizeObj = burgerParams.size.find(elem => elem.id === +size)
        if (!sizeObj) {

            alert(`Такой размер отсутсвует`);
            getSize();
        }
        else {
            return sizeObj;
        }

    };

    function getStuffing() {
        let sutuffingPrompt = `Введите начинку бургера \n`;
        burgerParams.stuffing.forEach(elem => sutuffingPrompt += `${elem.id} - ${elem.title}. Цена: ${elem.price} рублей. Калорийность: ${elem.calories}.\n`);
        let stuffing = prompt(sutuffingPrompt);
        if (stuffing === null) {
            alert(`Операция отменена`);
            return;
        }
        // Проверка на undefined
        let stuffingObj = burgerParams.stuffing.find(elem => elem.id === +stuffing)
        if (!stuffingObj) {

            alert(`Такая начинка отсутсвует`);
            getStuffing();
        }
        else {
            return stuffingObj;
        }

    };

    let size = getSize();

    console.log(size);

    if (size) {
        let stuffing = getStuffing();
        console.log(stuffing);
        if (stuffing) {
            return new Burger(size, stuffing);

        }
    }
    else {
        console.log(`Операция отменена`);
    };
};

