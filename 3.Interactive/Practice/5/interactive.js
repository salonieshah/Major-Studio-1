//Set dimensions and margins of Graph
var margin = {top: 10, right: 150, bottom: 30, left: 150},
    width = 1400 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

//Append the svg object to the body of the page
var svg = d3.select("#graph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Parse the Data from json file
d3.json("json/portraits.json", function(data) {
  console.log(data);
  
// Create grid for xaxis
// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient("bottom")
//     .innerTickSize(-height)
//     .outerTickSize(0)
//     .tickPadding(10);

//Create grid for y axis
// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient("left")
//     .innerTickSize(-width)
//     .outerTickSize(0)
//     .tickPadding(10);

// Draw the grid on x axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(x)

// Draw the grid on y axis
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(y)  

//Assign colours to variable   
  var color = d3.scaleOrdinal()
      .domain(["LookingAway-Potrait", "LookingAway-Activity", "LookingAt-Potrait","LookingAt-Activity" ])
      .range(["#7cb45b","#faab53", "#5b8cc1", "#cad1d3"]);
    
//Add x axis
  var x = d3.scaleLinear()
    .domain([1420, 1925])
    .range([ 0, width]);


// Get subcategory
    // var subCategories = Object.keys(data[0]).slice(1);
    // console.log(subCategories);
    // console.log(subCategories[6]);

//Add y axis
  var y = d3.scaleBand()
    .domain(data.map(function(d) { return d.Filter_1}))
    .range([ 0, height ])
    .padding(1);
  svg.append("g")
    .style("fill", "#faab53")
    .call(d3.axisLeft(y))

//Draw circles for the variables
  svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.Date); })
      .attr("cy", function(d) { return y(d.Filter_1); })
      .attr("r", "6")
        .style("fill", function(d,i) {
                return color(i);
            });
});
