
export type Deal = {
  id: number;
  // info about the deal
  dealInfo: DealInfo;
  
  // info about the property
  propertyInfo: PropertyInfo;
  valuation: Valuation;
  
  label: string[]; //new, hot, active, expired, etc
  // memberAvatar: string; //url
  
  borrower: Borrower;
  lender: Lender;

  // auto calculated fields
  // ltv = (amount / appraisedValue) * 100;
  // payment = (amount * rate) / (1 - (1 + rate) ** -term);

};

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  phone: string;
  avatar: string; //url
  // SIN: string;
  // DOB: Date;
  // memberSince: Date;
  isLender: boolean;
  lenderCriteria?: LendingCriteria;
  isBorrower: boolean;

};

export type Lender = {
  profile: Profile;
  lenderCriteria: LendingCriteria;
};

type LendingCriteria = {
  maxAmount: number;
  ltv: number;
  minRate: number;
  maxTerm: number;
  lenderFee: number;
  fico?: number;
};

type Borrower = {
  profile: Profile;
  // borrowerInfo: BorrowerInfo;
};




type Valuation = {
  appraisalCompany: string;
  appraiserName: string;
  appraisalDate: Date;
  appraisedValue: number;
  assessedValue: number;
};

type DealInfo = {
  amount: number;
  rate: number;
  term: number;
  exitStrategy: string;
  purpose: string;
  closingDate: Date;
  interestOnly: boolean;
  broker?: string;
  brokerFee?: number; //percentage || amount
  legalFees?: number; //percentage || amount
  lenderFee?: number; //percentage || amount
  // payment: number; //auto calculated
  // payment = (amount * rate) / (1 - (1 + rate) ** -term);
  propTaxArrears?: number;
  marketabilityRanking: number; //1-10
  paymentFrequency: string; //monthly, quarterly, yearly
  details: string;
};

type Encumbrance = {
  mtgPosition: number;
  mtgHolder: string;
  mtgNumber: string;
  balance: number;
  payment: number;
  paymentFrequency: string; //monthly, quarterly, yearly, bi-weekly
  interestRate: number;
  maturityDate: Date;
  arrears?: number;
};

type Address = {
  street: string;
  city: string;
  province: string;
  postalCode: string;
};

export type PropertyInfo = {
  address: Address;
  legalDescription: string;
  encumbrances?: Encumbrance[];
  title: string; //freehold, strata, etc
  annualPropertyTax: number;
  monthlyMaintFee?: number;
  salePrice?: number;
  taxArrears: number;
  leins?: number;
  occupancy: string; //owner, renter, vacant
  leaseAgreement?: boolean;
  style: string; //2 story, condo, townhouse, etc
  well?: boolean;
  septic?: boolean;
  zoning: string;
  numUnits?: number;
  rentalIncome?: number;
  images?: string[]; //url
};