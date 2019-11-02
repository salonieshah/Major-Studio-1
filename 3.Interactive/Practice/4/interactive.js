// d3.json("json/portrait.json", function(data) {
//     console.log(data);
// });


var fs = require('fs');
var data = fs.readFileSync("json/portrait.json");
data = JSON.parse(data);
//console.log(data)

//HTML elements
var maleArtists = document.getElementById("Artist_Gender");
console.log(maleArtists);

data.sort(function(a,b){
    return a.Date - b.Date;
});

// var male = data.filter(painting => painting.Artist_Gender === "Male");
// var female = data.filter(painting => painting.Artist_Gender === "Female");
// var anonymous = data.filter(painting => painting.Artist_Gender === "Anonymous");

var male_interior = data.filter(painting => painting.Artist_Gender === "Male" && painting.Subject_Location === "Interior");
var male_exterior = data.filter(painting => painting.Artist_Gender === "Male" && painting.Subject_Location === "Exterior");
var male_unknown = data.filter(painting => painting.Artist_Gender === "Male" && painting.Subject_Location === "Unknown");

var female_interior = data.filter(painting => painting.Artist_Gender === "Female" && painting.Subject_Location === "Interior");
var female_exterior = data.filter(painting => painting.Artist_Gender === "Female" && painting.Subject_Location === "Exterior");
var female_unknown = data.filter(painting => painting.Artist_Gender === "Female" && painting.Subject_Location === "Unknown");

var anonymous_interior = data.filter(painting => painting.Artist_Gender === "Anonymous" && painting.Subject_Location === "Interior");
var anonymous_exterior = data.filter(painting => painting.Artist_Gender === "Anonymous" && painting.Subject_Location === "Exterior");
var anonymous_unknown = data.filter(painting => painting.Artist_Gender === "Anonymous" && painting.Subject_Location === "Unknown");

// console.log(male_interior);

