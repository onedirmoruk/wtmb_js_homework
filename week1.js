const Store = class {
	constructor(name, style) {
		this.name = name
		this.style = stlye
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

const restaurant = new Store ('Ristorante la Piazza', 'Italian')
const kiosk = new Store ('Corner Buffet', 'Street food')

const Driver = class {
	constructor(name, vehicle) {
		this.name = name
		this.vehicle = vehicle
	}
}

const Customer = class {
	constructor(name, address) {
		this.name = name
		this.address = address
	}
	order(food)

	}
	pay(food)

	}
}

const Food = class {
	constructor(name, price) {
	this.name = name
	this.price = price
	}
}

const pizza = new Food ('Pizza', '8,99 USD')
const hamburger = new Food ('Hamburger', '3,99 USD')
