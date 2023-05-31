// Data dummy untuk menyimpan produk
let products = [];

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static getAllProducts() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static createProduct(name, price) {
    const id = this.generateId();
    const newProduct = new Product(id, name, price);
    products.push(newProduct);
    return newProduct;
  }

  static updateProduct(productId, name, price) {
    const product = products.find((product) => product.id === productId);
    if (product) {
      product.name = name;
      product.price = price;
      return product;
    } else {
      return null;
    }
  }

  generateId() {
    const timestamp = Date.now().toString(); // Mendapatkan timestamp saat ini
    const randomNum = Math.floor(Math.random() * 1000).toString(); // Mendapatkan angka acak antara 0-999
    const uniqueId = timestamp + randomNum; // Menggabungkan timestamp dan angka acak
    return uniqueId;
  }
}
module.exports = Product;