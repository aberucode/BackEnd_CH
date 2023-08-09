// use prompt with node
const prompt = require('prompt-sync')();


// Producto a gestionar
class Product {
  constructor(title, description, price, thumbnail, code, stock){
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  getData(){
    const product = {
      title: this.title,
      description: this.description,
      price: this.price,
      thumbnail: this.thumbnail,
      code: this.code,
      stock: this.stock,
    } 
    return product;
  }
}

// manager de los productos
class ProductManager {
  static id;
  constructor() {
    this.id = 0;
    this.products = [];
  }
  addProduct(product){
    this.products.push([this.id, product]);
    this.id++;
    console.log("Product added successfully");
    setTimeout(() => {console.log("...")}, 500);
  }

  getProducts(){
    return this.products;
  }

  getProductById(id){
    for(let i = 0; i < this.products.length; i++){
      const product = this.products[i];
      if(product[0] === id) return product;
    }
    console.log("Wrong ID or not found");
    setTimeout(() => {console.log("...")}, 500);
  }
}


// Example
// creando productos
const product1 = new Product("Product 1", "Description 1", 100, "img/", "Code 1", "Stock 1");
const product2 = new Product("Product 2", "Description 2", 100, "img/", "Code 2", "Stock 2");
const product3 = new Product("Product 3", "Description 3", 100, "img/", "Code 3", "Stock 3");
// manager de productos
const manager = new ProductManager();
manager.addProduct(product1.getData());
manager.addProduct(product2.getData());
manager.addProduct(product3.getData());


function main() {
  let aux1, aux2, aux3, aux4, aux5, aux6;
  let auxEnter;
  let auxProduct;
  let option = 0;
  let bucle = false;
  while (!bucle){
    do{
        console.clear();
        console.log("*********************************************\n");
        console.log("---------------PRODUCT MANAGER---------------\n");
        console.log("*********************************************\n");
        console.log("* Options:                                  *\n");
        console.log("* 1. View products                          *\n");
        console.log("* 2. Add product                            *\n");
        console.log("* 3. View product by ID                     *\n");
        console.log("* 4. Exit program                           *\n");
        console.log("*********************************************\n");
        option = parseInt(prompt("Enter your option: "));
        if (option < 1 || option > 4) {
          setTimeout(() => {console.log("Please enter a valid option!")}, 1500);
          console.clear();
        }
    }while(!(option >= 1 && option <= 4));
    console.clear();
    switch (option) {
      case 1:
        console.clear();
        console.log("*********************************************\n");
        console.log("------------MENU VIEWING PRODUCTS------------\n");
        console.log("*********************************************\n");
        console.log(manager.getProducts());
        auxEnter = prompt("Press enter to continue:");
        break;
      case 2:
        console.log("*********************************************\n");
        console.log("------------MENU ADDING PRODUCTS-------------\n");
        console.log("*********************************************\n");
        console.log(" Enter the product data:\n");
        aux1 = prompt("Title: ");
        aux2 = prompt("Description: ");
        aux3 = prompt("Price: ");
        aux4 = prompt("Image: ");
        aux5 = prompt("Code: ");
        aux6 = prompt("Stock: ");
        auxProduct = new Product(aux1, aux2, aux3, aux4, aux5, aux6);
        manager.addProduct(auxProduct.getData());
        auxEnter = prompt("Press enter to continue:");
        break;
      case 3:
        console.log("*********************************************\n");
        console.log("---------MENU VIEWING PRODUCTS BY ID---------\n");
        console.log("*********************************************\n");
        aux1 = parseInt(prompt("Enter the product ID: "));
        console.log(manager.getProductById(aux1));
        auxEnter = prompt("Press enter to continue:");
        break;
      case 4:
        setTimeout(() => {console.log("Closing the program...")}, 1000);
        bucle = true;
        break;
    } 
    console.clear();
  }
}

//Llamada a la funcion principal
main();
