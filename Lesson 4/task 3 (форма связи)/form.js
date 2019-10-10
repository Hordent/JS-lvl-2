class FormData {
    constructor({name, email, tel}) {
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.nameTemplate = /^([A-z]+|[А-яЁё]+)$/;
        this.emailTemplate = /^.+@.+\..+$/;
        this.telTemplate = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
    }

    check() {
        if (!this.nameTemplate.test(this.name)) {
            document.querySelector(`.name`).classList.add('red');
        } else document.querySelector(`.name`).classList.remove('red');
        if (!this.emailTemplate.test(this.email)) {
            document.querySelector(`.email`).classList.add('red');
        } else document.querySelector(`.email`).classList.remove('red');
        if (!this.telTemplate.test(this.tel)) {
            document.querySelector(`.tel`).classList.add('red');
        } else document.querySelector(`.tel`).classList.remove('red');
    }
};

document.querySelector('.send').addEventListener('click', () => {
    let data = {
        name: document.querySelector(`.name`).value,
        email: document.querySelector(`.email`).value,
        tel: document.querySelector(`.tel`).value,
    }
    let formData = new FormData(data);
    formData.check();
    
});