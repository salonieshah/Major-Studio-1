let insects;

function preload() {
  let url = 'Insects_MET.json';
  loadJSON(url, function(response){
    insects = response;
  });
}

let count = {};

function setup() {
  createCanvas(400, 400);
  
  insects.forEach(
      
    function(row){
    let value = row["Object Date"];
      if( !count[value] ){
         count[value] = 1;
      } else {
        count[value] += 1;
      }
    }
    
  );

   console.log(count);
}

function draw() {
  background(220);
  
  let keys = Object.keys(count);
  
  keys.forEach(function(key,index){
    let width = count[key];
    let height = 5;
    rect( 10, 10*index+10, width, height);
  });
  
}