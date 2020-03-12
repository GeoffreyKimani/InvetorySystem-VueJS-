var app = new Vue({
    el: '#app',

    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'Boots are excellent for hiking',
        selectedVariant: 0,
        title: 'Green Cotton Socks',
        details: ['80% Cotton', '20% Polyester', 'Gender-neutral'],
        variants: [
            {
                Id: 2234,
                color: 'Green',
                image: './assets/vmSocks-green.jpg',
                quantity: 0
            },
            {
                Id: 2235,
                color: 'Blue',
                image: './assets/vmSocks-blue.jpg',
                quantity: 13
            }
        ],
        cart: 0
    },

    methods: {
        addToCart: function () {
                this.cart += 1;
                console.log(this.selectedVariant);
                this.variants[this.selectedVariant].quantity -= 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index)
        },
    },

    computed: {
        productTitle() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
