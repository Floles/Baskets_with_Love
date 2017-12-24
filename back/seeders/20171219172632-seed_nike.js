'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert('Baskets',[{
	marques:'Nike',
	type:'théa',
	couleurs:'bleu et saumon',
	createdAt: new Date(),
	updatedAt: new Date()
	}], {});
},

down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('Baskets', null, {});
}
};
