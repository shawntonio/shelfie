module.exports = {
	read(req, res) {
		const db = req.app.get('db');
		db.read_products().then(product => {
			res.status(200).send(product)
		}).catch(err => {
			res.status(500)
			console.log('err', err)
		})
	},

	readById(req, res) {
		const db = req.app.get('db');
		db.read_product([req.params.id]).then(product => {
			res.status(200).send(product)
		}).catch(err => {
			res.status(500)
			console.log('err', err)
		}) 
	},

	create(req, res) {
		const db = req.app.get('db');
		const {name, price, imgUrl} = req.body
		db.create_product([name, price, imgUrl]).then(() => {
			res.status(200).send()
		}).catch(err => {
			res.status(500)
			console.log('err', err)
		})
	}
}