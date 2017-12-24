const Model = require("../models/");

module.exports =  {

	find : (req, res) => {
		Model.Basket
			.findAll()
			.then(result => (res.send(result)));
	},
	
	create : (req, res) => {
		let marques = req.body.marques;
		let type= req.body.type;
		let couleurs = req.body.couleurs;
		Model.Basket
			.create({
				marques : marques,
				type : type,
				couleurs : couleurs
			}).then(res.send('create is OK'));
	},

	update : (req, res) => {
		let marques = req.body.marque;
		let type= req.body.type;
		let couleurs = req.body.couleurs;
		Model.Basket
			.findById(req.params.id)
			.then(id => {
				return id
				.update({
					marques : marques,
					type : type,
					couleurs : couleurs
				})
				.then(res.send('update is OK'));
			})
	},

	destroy : (req, res) => {
		Model.Basket
			.findById(req.params.id)
			.then(id => {
				return id
				.destroy()
				.then(res.send('votre basket s\'est auto-détruite, c\'est l\'occas d\'en racheter une autre !'));
			})
	}
}