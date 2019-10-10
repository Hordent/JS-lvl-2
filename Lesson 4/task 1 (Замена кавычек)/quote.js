class Text {
    constructor (text) {
        this.text = text;
    }
    changeQuote () {
       return this.text.replace(/\s\'/g, ` "`).replace(/\'\s/g, `" `);
    }
}

const testText = new Text(`My name's 'someone' Dmitry`);
console.log(testText.changeQuote());


