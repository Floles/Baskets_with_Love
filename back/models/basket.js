'use strict';
module.exports = (sequelize, DataTypes) => {
	var Basket = sequelize.define('Basket', {
		marques: DataTypes.STRING,
		type: DataTypes.STRING,
		couleurs: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return Basket;
};