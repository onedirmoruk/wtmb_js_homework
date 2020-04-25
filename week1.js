const Store = class {
	constructor(name, style) {
		this.name = name
		this.style = stlye
		this.readyToGo = []
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

restaurant = new Store ('Ristorante la Piazza', 'Italian')
kiosk = new Store ('Corner Buffet', 'Street food')

const Driver = class {
	constructor(name, vehicle) {
		this.name = name
		this.vehicle = vehicle
		this.deliveryList = []
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

pizza = new food ('Pizza', '8,99 USD')
hamburger = new food ('Hamburger', '3,99 USD')
