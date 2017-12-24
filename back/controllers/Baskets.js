const Model = require("../models/");

module.exports =  {

	find : (req, res, next) => {
		Model.Basket
			.findAll()
			.then(result => (res.send(result)));
	},
	
	create : (req, res, next) => {
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

	update : (req, res, next) => {
		let id = req.params.id;
		let marques = req.body.marques;
		let type= req.body.type;
		let couleurs = req.body.couleurs;
		Model.Basket
			.update({
				marques : marques,
				type : type,
				couleurs : couleurs
				},{
					where: { id: id }
				}).then(res.send(`update du n°${id} is OK`));
	},

	destroy : (req, res, next) => {
		let id = req.params.id;
		Model.Basket
				.destroy({
					where: {id: id}
				})
				.then(res.send(`votre basket n°${id} s\'est auto-détruite, c\'est l\'occas d\'en racheter une autre !`));
			}
}