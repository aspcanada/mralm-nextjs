const { faker } = require("@faker-js/faker")

const data = []
const labels = ["Active", "Expired"]

Array.from({ length: 30 }).forEach((_, idx) => {
  data.push(createRandomMember(idx))
})

function createRandomMember(idx) {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number("###-###-####"),
    avatar: faker.image.avatar(),
    occupation: faker.name.jobTitle(),
    isLender: faker.datatype.boolean(),
    isBorrower: faker.datatype.boolean(),
  }
}

export default function handler(req, res) {
  try {
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    alert("Data is not fetch!!! Please check console!!!")
  }
}
