module.exports = class Food {
	constructor(name, price) {
	this.name = name
	this.price = price
	}
	learnPrice() {
		console.log(`Price of the ${this.name} is ${this.price}`)
	}
}
