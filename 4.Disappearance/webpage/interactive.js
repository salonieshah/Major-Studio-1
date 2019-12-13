d3.xml("painting.svg")
      .then(data => {
        d3.select("#main_painting").node().append(data.documentElement)
        // createJSON()
        editSVG()
        // addCircle()
      });
      
var json = d3.json("painting.json").then(function(data)
            {
                console.log(data);
                showjson()
                return data;
            });
// console.log(data)            

function showjson() {
    document.getElementById("show_json").innerHTML = data[0].name;
    
    // var svg = d3.select("#show_data")
    // .append("svg")
}
            
function editSVG() {  
            d3.selectAll('.living')
                .on('mouseover', function(){
                console.log(d3.select(this).attr('id'));
                console.log(d3.select(this).attr('data-name'));
                d3.select(this)
                .style('opacity', 0.2)
                
              })
              
                .on('mouseout', function(){
                console.log(d3.select(this).attr('id'));
                d3.select(this)
                .style('opacity', 1)
              })
          }
          
// function createJSON () {
//             d3.select('svg')
//             let data = []
//             d3.selectAll('.living').each(function(){
//               const el = d3.select(this)
//               data.push({
//                 xcord: el.attr('x'),
//                 ycord: el.attr('y'),
//                 id: el.attr('id'),
//                 name: el.attr('data-name'),
//               })
//             })
            // console.log(data)
            // }          
  
      
// function addCircle(data) { 
//           var circle = svg.append("circle")
//                         .attr("cx", data.xcord)
//                         .attr("cy", data.ycord)
//                         .attr("rx", 50)
//                         .attr("ry", 50)
//                         .style('fill', '#000000')
//                     }
                    
          // d3.selectAll('.living')
          // .on('click', function(){
          //   console.log(d3.select(this).attr('id'));
          //   d3.select(this)
          //   .style('opacity', 0)
          // })
          

// var mycircles = d3.json("painting.json");
//                 mycircles.then(function(data){
//                     return
//                           svg.selectAll("circle")
//                                 .data(data)
//                                 .enter()
//                                 .append("circle")
//                                 .attr("cx",data.xcord)
//                                 .attr("cy", data.ycord)
//                                 .attr("r", "50");
//                                 });               
        
    

        
    
    