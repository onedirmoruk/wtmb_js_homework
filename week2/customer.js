module.exports = class Customer {
	constructor(name, address) {
		this.name = name
		this.address = address
	}
	order(food, restaurant) {
		restaurant.prepare(food)
	}
	pay(food) {

	}
}
