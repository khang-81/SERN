'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', //plain text =>hash password
      firstName: 'Nguyen',
      lastName: 'Quin',
      address: 'Hanoi',
      phoneNumber: '0123456789',
      gender: 1,
      image: null,
      roleId: 'R1', // roleId: R1 is admin, R2 is doctor, R3 is patient
      positionId: 'P1', 
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
