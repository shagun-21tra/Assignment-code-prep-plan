const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Convert string price to number if valid
    const price = parseFloat(item.price);

    if (typeof price !== 'number' || isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    this.items.push({ ...item, price }); // Ensure price is stored as number
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`; // Fixed template literal syntax
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // string price handled
checkout.addItem({ name: "Milk", price: 3.50 });            // number price

console.log(checkout.getTotal());
