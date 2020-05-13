module.exports = class Store {
	constructor(name, style) {
		this.name = name
		this.style = style
		this.readyToGo = []
		this.deliveryList = []
	}
	prepare(food) {
		this.readyToGo.push(food)
		console.log(food.name + " is ready to go!")
	}
	deliver(food) {
		this.deliveryList.push(food)
		console.log(food.name + " is on the way!")
	}
}
