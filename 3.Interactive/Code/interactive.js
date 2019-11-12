//Parse the json file in the document
d3.json("json/portraits.json", function(data) {
console.log(data);

// Create variables for width height and radius
var width = 900,
    height = 600,
    radius = 10;

// Create SVG to append into html file    
  var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform","translate(0,0)")

// Create X and Y force for Visualisation
  var forceXCombine = d3.forceX(width/2).strength(0.05)
  var forceYCombine = d3.forceY(height/2).strength(0.05) 
  
// Create Y force for Gender
    var forceYGender = d3.forceY(function(d) {
      if(d.Artist_Gender === 'Female'){
        return 100
      } else if (d.Artist_Gender === 'Male') {
        return 300
      } else if (d.Artist_Gender === 'Anonymous'){
        return 500
      }
    }).strength(0.05)
    
// Create Y force for Clothing 
  var forceYClothing = d3.forceY(function(d) {
      if(d.Subject_Clothing === 'Dressed'){
        return 200
      } else if (d.Subject_Clothing === 'Nude'){
        return 500
      }
    }).strength(0.05)

// Create Y force for Painting Location
  var forceYLocation = d3.forceY(function(d) {
      if(d.Subject_Location === 'Interior') {
        return 100
      } else if (d.Subject_Location === 'Unknown'){
        return 300
      } else if (d.Subject_Location === 'Exterior'){
        return 500
      }
    }).strength(0.05)

// Create Y force for Subject Sight
  var forceYSight = d3.forceY(function(d) {
      if(d.Subject_Sight === 'LookingAt') {
        return 200
      } else if (d.Subject_Sight === 'LookingAway'){
        return 500
      }
    }).strength(0.05)
    
// Create Y force for Subject Activity
  var forceYActivity = d3.forceY(function(d) {
      if(d.Subject_Activity === 'Potrait') {
        return 200
      } else if (d.Subject_Activity === 'Activity'){
        return 500
      }
    }).strength(0.05)
    
// Use force simulation    
    var simulation = d3.forceSimulation()
    .force("x", forceXCombine)
    .force("y", forceYCombine)
    .force("collide", d3.forceCollide(radius + 1))

// Create circles for Each Paining  
    var circles = svg.selectAll(".Painting_Name")
    .data(data)
    .enter().append("circle")
    .attr("class", "Painting_Name")
    .attr("r", radius)
    .attr("fill", "lightblue")

// Create on click for visualization    
    d3.select("#visualization").on('click', function(){
      simulation
        .force("x", forceXCombine.strength(0.1))
        .force("y", forceYCombine.strength(0.1))
        .alphaTarget(0.01)
        .restart()
      // console.log('click')
    })

// Create on click for gender    
    d3.select("#gender").on('click', function(){
      simulation
        .force("x", forceXCombine.strength(0.2))
        .force("y", forceYGender.strength(0.2))
        .alphaTarget(0.1)
        .restart()
      // console.log('click')
    })

// Create on click for clothing     
    d3.select("#clothing").on('click', function(){
          simulation
            .force("x", forceXCombine.strength(0.2))
            .force("y", forceYClothing.strength(0.2))
            .alphaTarget(0.1)
            .restart()
          // console.log('click')
        })

// Create on click for location          
    d3.select("#location").on('click', function(){
              simulation
                .force("x", forceXCombine.strength(0.2))
                .force("y", forceYLocation.strength(0.2))
                .alphaTarget(0.1)
                .restart()
              // console.log('click')
            })

// Create on click for object sight              
    d3.select("#sight").on('click', function(){
              simulation
                .force("x", forceXCombine.strength(0.2))
                .force("y", forceYSight.strength(0.2))
                .alphaTarget(0.1)
                .restart()
              // console.log('click')
            })   

// Create on click for activity            
    d3.select("#activity").on('click', function(){
              simulation
                .force("x", forceXCombine.strength(0.2))
                .force("y", forceYActivity.strength(0.2))
                .alphaTarget(0.1)
                .restart()
              // console.log('click')
            })  
   
  simulation.nodes(data)
  .on('tick', ticked)
  
  function ticked(){
    circles
    .attr("cx", function(d){
     return d.x 
    })
    .attr("cy", function(d){
     return d.y 
    })
  }
    
})
  
    
    
    
    

