//All female paintings on view in European Paintings Department and has an online image  
const searchUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=women&isOnView=true&departmentId=11";

const objectBaseUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";



let metData;
let myArray = [];

// fetch a query
function fetchMuseumData(url) {
  window
    .fetch(url)
    .then(data => data.csv())
    .then(data => {
      console.log("fetchMuseumData", data);
      fetchObjects(data);
    });
}

// from the response, fetch objects
function fetchObjects(data) {
  // .slice(0, 10) gets a new array with just the first 10 elements
  // because fetching 10000 objects at once can be a strain on the browser
  let objectIDs = data.objectIDs.slice(0, 10);
  console.log("fetching: " + objectIDs.length + " objects");
  objectIDs.forEach(function(n) {
    // console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    window
      .fetch(objUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        addObject(data);
      });
  });
}

// create your own array using just the data you need
function addObject(objectData) {
  var currentTitle = objectData.objectName;
  var currentArtist = objectData.artistDisplayName;
  var currentDate = objectData.objectBeginDate;
  var imgUrl = objectData.objectUrl;
  var index = myArray.length;
  
  // myArray[index] = {};
  // myArray[index]["title"] = currentTitle;
  // myArray[index]["artist"] = currentArtist;
  // myArray[index]["date"] = currentDate;
  // myArray[index]["url"] = imgUrl;

  
    myArray.push({
      title: objectData.objectName, 
      artist: objectData.artistDisplayName,
      date: objectData.objectBeginDate,
      url: objectData.objectUrl
    })
    
  console.log("object at index", index, myArray[index]);
}

// [objectName][artistDisplayName][objectDate]