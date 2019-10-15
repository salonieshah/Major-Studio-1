        dataset = {
            "children": [
            {
              "Tag": "Aquatic",
              "Count": 1995
            },
            {
              "Tag": "Insects",
              "Count": 1814
            },
            {
              "Tag": "Birds",
              "Count": 11304
            },
            {
              "Tag": "Animals",
              "Count": 21158
            }
          ]
        };

        var diameter = 600;
        
        var color = d3.scaleOrdinal(d3.schemeCategory20);
  
   var color = d3.scaleOrdinal()
      .domain(["Animals", "Birds", "Aquatic", "Insects" ])
      .range(["#faab53", "#7cb45b", "#5b8cc1","#7b8685"]);
   

        var bubble = d3.pack(dataset)
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select("section#bubbleChart")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        var nodes = d3.hierarchy(dataset)
            .sum(function(d) { return d.Count; });

        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children;
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("title")
            .text(function(d) {
                return d.Tag + ": " + d.Count;
            });

        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
             .style("fill", function(d,i) {
              // console.log(d)
                return color(d.data.Tag);
            });

        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Tag.substring(0, d.r / 3);
            })
            // .attr("font-family", "Nanum Gothic Coding")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        node.append("text")
            .attr("dy", "1.3em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Count;
            })
            // .attr("font-family",  "Nanum Gothic Coding")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

       
       d3.select("section#bubbleChart").style("background-color", "#171717");
