function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung", 1730, "blue");
var OnePlusOne = new Phone("Apple", 1900, "gold");
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
