'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert('Baskets',[{
	marques:'Puma',
	type:'Ikaz',
	couleurs:'noire',
	createdAt: new Date(),
	updatedAt: new Date()
	}], {});
},

down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('Baskets', null, {});
}
};
