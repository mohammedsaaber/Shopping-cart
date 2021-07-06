let counterTotal = 0;
let yourTotal = 0;

function Product(productNumber, productName, productPrice, productStatus, productCounter, productTotal) {
    this.number = productNumber;
    this.name = productName;
    this.price = productPrice;
    this.status = productStatus;
    this.counter = productCounter;
    this.total = productTotal;


    this.counterUpdate = function (operation) {
        if (operation == '+') {
            this.counter++;
            this.total = this.total + this.price;
            counterTotal++;
            yourTotal = yourTotal + this.price;
        } else if (operation == '-') {
            if (this.counter != 0) {
                this.counter--;
                this.total = this.total - this.price;
                counterTotal--;
                yourTotal = yourTotal - this.price;
            }

        }

        /* updating product status */

        if (this.counter == 0) {
            this.status = false;
            document.querySelector(`.product-prg${this.number}`).innerHTML = "ADD TO CART";
            document.querySelector(`.prod${this.number}`).style.display = "none";
        } else {
            this.status = true;
        }

        document.querySelector(`.prod-counter${this.number}`).innerHTML = this.counter;
        document.querySelector(".cart-counter").innerHTML = counterTotal;
        document.querySelector(".total-amount").innerHTML = yourTotal;

    };

    this.removeProduct = function () {
        this.status = false;
        yourTotal = yourTotal - this.total;
        counterTotal = counterTotal - this.counter;
        this.counter = 0;

        document.querySelector(`.prod-counter${this.number}`).innerHTML = this.counter;
        document.querySelector(".cart-counter").innerHTML = counterTotal;
        document.querySelector(".total-amount").innerHTML = yourTotal;
        document.querySelector(`.prod${this.number}`).style.display = "none";

    };

    this.clearProduct = function () {
        this.status = false;
        this.counter = 0;
        this.total = 0;
        document.querySelector(`.prod-counter${this.number}`).innerHTML = this.counter;
        document.querySelector(`.prod${this.number}`).style.display = "none";
        document.querySelector(`.product-prg${this.number}`).innerHTML = "ADD TO CART";
    };

    this.addToCart = function () {
        if (this.status == true) {
            
            this.removeProduct();
            document.querySelector(`.product-prg${this.number}`).innerHTML = "ADD TO CART";
        } 
        else if (this.status == false)
         {
            this.counterUpdate('+');
            document.querySelector(`.product-prg${this.number}`).innerHTML = "REMOVE";
            document.querySelector(`.prod${this.number}`).style.display = "flex";
        }

    };

}

let clearMenu = function () {

    document.querySelector(".total-amount").innerHTML = 0;
    document.querySelector(".cart-counter").innerHTML = 0;
    counterTotal = 0;
    yourTotal = 0;
    product1.clearProduct();
    product2.clearProduct();
    product3.clearProduct();
    product4.clearProduct();
    product5.clearProduct();
    product6.clearProduct();
    product7.clearProduct();
    product8.clearProduct();
}



let product1 = new Product(1, "Queen Panel Bed", 350, false, 0, 0);
let product2 = new Product(2, "King Panel Bed", 180, false, 0, 0);
let product3 = new Product(3, "Single Panel Bed", 499, false, 0, 0);
let product4 = new Product(4, "Twin Panel Bed", 300, false, 0, 0);
let product5 = new Product(5, "Fridge", 600, false, 0, 0);
let product6 = new Product(6, "Dresser", 130, false, 0, 0);
let product7 = new Product(7, "Couch", 50, false, 0, 0);
let product8 = new Product(8, "Table", 25, false, 0, 0);















let dynamicMenu = document.querySelector(".dynamic-nav");
let menuStatus = "hidden";

let toggleMenu = function () {
    if (menuStatus == "hidden") {
        dynamicMenu.style.visibility = "visible";
        menuStatus = "visible";
    } else {
        dynamicMenu.style.visibility = "hidden";
        menuStatus = "hidden";
    }
}