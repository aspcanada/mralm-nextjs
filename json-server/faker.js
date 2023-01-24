const { faker } = require('@faker-js/faker');

module.exports = () => {
  const data = { users: [] }

  Array.from({ length: 10 }).forEach(() => {
    data.users.push(createRandomUser());
  });
  return data
}

function createRandomUser() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
