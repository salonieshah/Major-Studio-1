        dataset = {
            "children": [
              {
                "Tag": "Butterflies",
                "Count": 857
              },
              {
                "Tag": "Insects",
                "Count": 639
              },
              {
                "Tag": "Dragonflies",
                "Count": 104
              },
              {
                "Tag": "Snails",
                "Count": 82
              },
              {
                "Tag": "Scorpions",
                "Count": 57
              },
              {
                "Tag": "Bees",
                "Count": 56
              },
              {
                "Tag": "Spiders",
                "Count": 19
              }
            ]
        };

        var diameter = 600;
        
        var color = d3.scaleOrdinal(d3.schemeCategory20);
  
    var color = d3.scaleOrdinal()
      .domain(["Bees", "Butterflies", "Dragonflies", "Insects", "Scorpions", "Snails", "Spiders" ])
      .range([   "#6eaaa2", "d3a34f", "#ca5a61", "#5b8cc1","#7b8685","#7cb45b", "#af688a" ]);
    
    // var ot = dataset.Type;
    //   function chooseColor(ot){
    //     if (ot == 'Other'){
    //       return '#ECA72C'
        // }
      // }

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
