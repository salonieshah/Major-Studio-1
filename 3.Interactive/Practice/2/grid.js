
// async function dataLoad() {
//   const data = await d3.json("json/portrait.json");
//   console.log(data);
// }

d3.json("json/portrait.json", function(data) {
    console.log(data);
});