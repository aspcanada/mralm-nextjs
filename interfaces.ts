// data: {
//   id: 5,
//   img: [
//     "https://loremflickr.com/640/480/house?lock=77447",
//     "https://loremflickr.com/640/480/house?lock=95220",
//   ],
//   ltv: 80,
//   city: "Midland",
//   date: "August 4, 2022",
//   rate: 10.3,
//   term: 13,
//   label: ["Expired"],
//   title: "Little Acorn Farm 5",
//   amount: 260492,
//   details:
//     "The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.",
//   purpose: "Debt Consolidation",
//   position: 2,
//   memberAvatar:
//     "https://lh3.googleusercontent.com/a/AEdFTp5Ri-sD8fA1y6SeyPfbJsDIxgmYto_cn84pukNj7S8=s96-c",
// },

export type Deal = {
  id: number;
  img: string[];
  ltv: number;
  city: string;
  date: string;
  rate: number;
  term: number;
  label: string[];
  title: string;
  amount: number;
  details: string;
  purpose: string;
  position: number;
  memberAvatar: string;
};