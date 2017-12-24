'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert('Baskets',[{
		marques:'Adidas',
		type:'montante',
		couleurs:'grise et blanche',
		createdAt: new Date(),
		updatedAt: new Date()
	}], {});
},

down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('Baskets', null, {});
}
};
