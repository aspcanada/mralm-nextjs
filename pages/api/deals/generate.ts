import {
  Deal,
  DealInfo,
} from "../../../interfaces"

const { faker } = require("@faker-js/faker")


const LABELS = ["Active", "Expired"]
const PAYMENT_FREQ = ["Monthly", "Quarterly", "Yearly"]
const EXIT_STRATEGIES = [
  "Refinance",
  "Sell",
  "Refinance and Sell",
  "Refinance and Hold",
  "Sell and Hold",
]
const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
]
const cities = [
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Ottawa",
  "Edmonton",
  "Mississauga",
  "Winnipeg",
  "Brampton",
  "Hamilton",
  "Surrey",
  "Laval",
  "Quebec City",
  "Halifax",
  "London",
  "Markham",
  "Vaughan",
  "Oshawa",
  "Burlington",
  "Richmond Hill",
  "Oakville",
  "Kitchener",
  "Gatineau",
  "Longueuil",
  "Windsor",
  "Saskatoon",
  "Regina",
  "Burnaby",
  "Brampton",
  "Saguenay",
  "Barrie",
  "Sherbrooke",
  "Abbotsford",
  "Guelph",
  "Cambridge",
  "Saanich",
  "Sudbury",
  "Kelowna",
  "Saint John",
  "White Rock",
  "Nanaimo",
  "Chilliwack",
  "Red Deer",
  "Langley",
]
const purposes = [
  "Debt Consolidation",
  "Home Renovation",
  "Purchase",
  "Refinance",
  "Commercial",
  "Other",
]
const propertyTitles = [
  "Freehold",
  "Leasehold",
]
const styles = [
  "Detached",
  "Semi-Detached",
  "Townhouse",
  "Condo",
  "Apartment",
  "Duplex",
  "Triplex",
  "Fourplex",
  "Mobile Home",
  "Other",
]

const occupancy = [
  "Owner Occupied",
  "Investment",
  "Second Home",
  "Rental",
]

const zoning = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Mixed Use",
]

async function createRandomDeal() {
  // get random borrower
  const borrowersUrl = `http://localhost:8081/api/members/?isBorrower=true`
  const borrowers = await (await fetch(borrowersUrl)).json()
  const borrower = borrowers[Math.floor(Math.random() * borrowers.length)]
  
  const deal: Deal = {
    id: faker.datatype.uuid(),
    dealInfo: {
      amount: faker.datatype.number({ min: 40000, max: 190000 }),
      rate: faker.datatype.float({ min: 7, max: 13, precision: 0.1 }), //%
      term: faker.datatype.number({ min: 1, max: 3 }), //years
      position: faker.datatype.number({ min: 1, max: 3 }),
      exitStrategy: EXIT_STRATEGIES[Math.floor(Math.random() * EXIT_STRATEGIES.length)],
      purpose: purposes[Math.floor(Math.random() * purposes.length)],
      closingDate: faker.date.future(),
      interestOnly: faker.datatype.boolean(),
      marketabilityRanking: faker.datatype.number({ min: 1, max: 10 }),
      paymentFrequency: PAYMENT_FREQ[Math.floor(Math.random() * PAYMENT_FREQ.length)],
      details: faker.lorem.paragraph(),
    },
    propertyInfo: {
      address: {
        street: faker.address.streetAddress(),
        city: cities[Math.floor(Math.random() * cities.length)],
        province: provinces[Math.floor(Math.random() * provinces.length)],
        postalCode: faker.address.zipCode("?#? #?#"),
      },
      legalDescription: faker.lorem.sentence(),
      encumbrances: [
        {
          mtgPosition: faker.datatype.number({ min: 1, max: 3 }),
          mtgHolder: faker.company.name(),
          mtgNumber: faker.datatype.uuid(),
          balance: faker.datatype.number({ min: 100000, max: 300000 }),
          payment: faker.datatype.number({ min: 1000, max: 3000 }),
          paymentFrequency: PAYMENT_FREQ[Math.floor(Math.random() * PAYMENT_FREQ.length)],
          interestRate: faker.datatype.float({ min: 7, max: 13, precision: 0.1 }), //%
          maturityDate: faker.date.future(),
          arrears: faker.datatype.number({ min: 1000, max: 3000 }),
        },
      ],
      title: propertyTitles[Math.floor(Math.random() * propertyTitles.length)],
      annualPropertyTax: faker.datatype.number({ min: 1000, max: 3000 }),
      monthlyMaintFee: faker.datatype.number({ min: 100, max: 300 }),
      salePrice: faker.datatype.number({ min: 100000, max: 300000 }),
      taxArrears: faker.datatype.number({ min: 1000, max: 3000 }),
      leins: faker.datatype.number({ min: 1000, max: 3000 }),
      occupancy: occupancy[Math.floor(Math.random() * occupancy.length)],
      leaseAgreement: faker.datatype.boolean(),
      style: styles[Math.floor(Math.random() * styles.length)],
      well: faker.datatype.boolean(),
      septic: faker.datatype.boolean(),
      zoning: zoning[Math.floor(Math.random() * zoning.length)],
      numUnits: faker.datatype.number({ min: 1, max: 5 }),
      rentalIncome: faker.datatype.number({ min: 1000, max: 3000 }),
      images: [
        faker.image.imageUrl(640, 480, "house", true),
        faker.image.imageUrl(640, 480, "house", true),
        faker.image.imageUrl(640, 480, "house", true),
      ],
    },
    valuation: {
      appraisalCompany: faker.company.name(),
      appraiserName: faker.name.fullName(),
      appraisalDate: faker.date.past(),
      appraisedValue: faker.datatype.number({ min: 300000, max: 900000 }),
      assessedValue: faker.datatype.number({ min: 200000, max: 800000 }),
    },
    label: [LABELS[Math.floor(Math.random() * LABELS.length)]],
    borrower: {
      profile: borrower,
    },
  }

  return deal;
}

export default async function handler(_req: any, res: any) {
  const data: Deal[] = []
  for (let i = 0; i < 20; i++) {
    const deal = await createRandomDeal()
    data.push(deal)
  }

  try {
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    alert("Data is not fetch!!! Please check console!!!")
  }
}
