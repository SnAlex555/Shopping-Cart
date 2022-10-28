import './Card.js'
import './Cart.js'

class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title: "Product #1",
                preview: "./images/data.webp",
                description:
                    "Redmi 10C оснащен производительным 8-ядерным процессором Snapdragon 680, построенном на флагманском 6-нм",
                price: 200,
                quantity: 0,
            },
            {
                id: 2,
                title: "Product #2",
                preview: "./images/data.webp",
                description:
                    "Redmi 10C оснащен производительным 8-ядерным процессором Snapdragon 680, построенном на флагманском 6-нм",
                price: 210,
                quantity: 0,
            },
            {
                id: 3,
                title: "Product #3",
                preview: "./images/data.webp",
                description:
                    "Redmi 10C оснащен производительным 8-ядерным процессором Snapdragon 680, построенном на флагманском 6-нм",
                price: 230,
                quantity: 0,
            },
            {
                id: 4,
                title: "Product #4",
                preview: "./images/data.webp",
                description:
                    "Redmi 10C оснащен производительным 8-ядерным процессором Snapdragon 680, построенном на флагманском 6-нм",
                price: 240,
                quantity: 0,
            },
        ];
    }

    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = `
        <div class='container mt-5 mb-5'>
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${this.data.map((item) => {
                    return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                    `
                }).join(' ')}
            </div>
        </div>
        `
    }
}

customElements.define('it-app', App)