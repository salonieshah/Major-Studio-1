const CONSTANTS = {
  PAINTING_NAME: "Painting_Name",
  ARTIST_NAME: "Artist_Name",
  DATE: "Date",
  ARTIST_GENDER: "Artist_Gender",
  SUBJECT_CLOTHING: "Subject_Clothing",
  SUBJECT_LOCATION: "Subject_Location",
  SUBJECT_SIGHT: "Subject_Sight",
  SUBJECT_ACTIVITY:"Subject_Activity",
};

const {
  PAINTING_NAME,
  ARTIST_NAME,
  DATE,
  ARTIST_GENDER,
  SUBJECT_CLOTHING,
  SUBJECT_LOCATION,
  SUBJECT_SIGHT,
  SUBJECT_ACTIVITY,
} = CONSTANTS;


// const data = d3.json("inter.json");
// console.log(data);

d3.xml('Female_Dressed.svg')
    .then(data => {
        d3.select('body').node().append(data.documentElement)
    });

d3.xml('Female_Dressed.svg')
    .then(data => {
        document.body.append(data.documentElement)
    });

async function dataLoad() {
  // we can set up our layout before we have data
  const data = await d3.json("inter.json");
  console.log(data);
}
