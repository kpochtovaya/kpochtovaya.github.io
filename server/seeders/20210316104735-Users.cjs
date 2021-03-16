const adminUser = [
  {
    firstName: 'Pavlik',
    lastName: 'Morozov',
    email: 'morozov.p@gmail.com',
    password: '9',
    phoneNumber: '+375291701712',
    address: 'Minsk, ul.Moroz, 7/23',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', adminUser, {}),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
