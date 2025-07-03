"use strict";
class PlainText {
    constructor(input) {
        this.input = input;
    }
    getText() {
        return this.input;
    }
}
class BoldTextDecorator {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return `<b>${this.text.getText()}</b>`;
    }
}
class ItalicTextDecorator {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return `<i>${this.text.getText()}</i>`;
    }
}
class UnderlineTextDecorator {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return `<p style="text-decoration:underline">${this.text.getText()}</p>`;
    }
}
const boldText = new BoldTextDecorator(new PlainText('Hello'));
console.log(boldText.getText()); // <b>Hello</b>
const italicText = new ItalicTextDecorator(new PlainText('Hello'));
console.log(italicText.getText()); // <b>Hello</b>
const underlineText = new UnderlineTextDecorator(new PlainText('Hello'));
console.log(underlineText.getText()); // <b>Hello</b>
const nestedText = new UnderlineTextDecorator(new ItalicTextDecorator(new BoldTextDecorator(new PlainText('JOJOJO'))));
console.log(nestedText.getText());
