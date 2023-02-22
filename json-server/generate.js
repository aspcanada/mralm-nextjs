const { faker } = require("@faker-js/faker")

const deals = []
const labels = ["Active", "Expired"]

Array.from({ length: 30 }).forEach((_, idx) => {
  deals.push(createRandomDeal(idx))
})

function getRandomLabel() {
  return labels[Math.floor(Math.random() * labels.length)]
}

function getImages() {
  const images = []
  Array.from({ length: Math.random() * 3 + 2 }).forEach(() => {
    images.push(faker.image.imageUrl(640, 480, "house", true))
  })
  return images
}

function createRandomDeal(idx) {
  return {
    img: getImages(),
    memberAvatar: faker.image.avatar(),
    // type: "rent",
    // propertyStatus: "For Sale",
    purpose: "Debt Consolidation",
    label: [getRandomLabel()],
    city: faker.address.cityName(),
    title: `Little Acorn Farm ${idx}`,
    details:
      "The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.",
    amount: faker.datatype.number({ min: 100000, max: 300000 }),
    // home: "Virtual Home",
    term: faker.datatype.number({ min: 6, max: 24 }), //months
    rate: faker.datatype.float({ min: 7, max: 13, precision: 0.1 }), //%
    ltv: faker.datatype.number({ min: 70, max: 80 }), //%
    position: faker.datatype.number({ min: 1, max: 3 }), //1st, 2nd, 3rd

    // bed: faker.datatype.number({ min: 1, max: 5 }),
    // bath: faker.datatype.number({ min: 1, max: 3 }),
    // sqft: faker.datatype.number({ min: 1000, max: 4000}),
    // rooms: faker.datatype.number(4),
    date: "August 4, 2022",
    // video: "/assets/video/video2.mp4",
    id: idx,
    // propertyType: "Office",
    // agencies: "Lincoln",
  }
}

export default function handler(req, res) {
  try {
    res.status(200).json(deals)
  } catch (err) {
    console.log(err)
    alert("Data is not fetch!!! Please check console!!!")
  }
}
