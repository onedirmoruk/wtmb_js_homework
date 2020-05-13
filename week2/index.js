const Store = require('./store')
const Driver = require('./driver')
const Customer = require('./customer')
const Food = require('./food')
const Database = require('./database')

const italianRestaurant = new Store ('Ristorante la Piazza', 'Italian')
const kiosk = new Store ('Corner Buffet', 'Street food')

const pizza = new Food ('Pizza', '8,99 USD')
pizza.learnPrice()

const hamburger = new Food ('Hamburger', '3,99 USD')

const zafer = new Customer('Zafer', 'Scheisse Street')
zafer.order(pizza, italianRestaurant)
italianRestaurant.deliver(pizza)

Database.save('food.json', pizza)
Database.save('customer.json', zafer)

const listedOrder = Database.load('food.json')
console.log(listedOrder.name)

// Learning modules and basic database applications
