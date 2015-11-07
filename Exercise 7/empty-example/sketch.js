//also planning to maybe visualize based on cuisine 
//move boroughs to locationsish 
var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
var rats;
var ratsArray = [];
var test;
var start = 0;
var borough; 

var bronX = 0; //size for each circle 
var brooX= 0;
var manhX = 0;
var statX = 0;
var queeX = 0; 

function preload(){
	getRats(); //gets JSON file 
}

function setup(){
    createCanvas(800, 600);
    for(var i = 0; i < rats.length; i++){
        var o = rats[i];
        ratsArray[i] = new Rats(o); //populates array with rats objects 
    }
 }

function draw(){
    start++; //will cycle rather than do all at once 
    borough = ratsArray[start].boro; 
    console.log(start); //used to make sure all pieces of data were being sifted through  (stops at 1000)
    console.log(borough); //used to make sure the right boroughs are being updated accordingly
    ratsArray[start].display(borough); //updates circle size as program runs 
}


// this is gonna grab the NYC open data stuff
function getRats(){
	 // this will download the city open data on the health violations:
  rats = loadJSON(ratsUrl, ratsDownloaded); // asynchronous API call
}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}


function Rats(r){
    this.boro = r.boro;
    this.cuisine_description = r.cuisine_description; //will later be implemented - maybe end display most prominent cuisine in each boro that rats are attracted to? 
    
    this.display = function(whichCirc){ //figures out which circle to expand based on borough name
        if(whichCirc == "BRONX"){
            bronX = bronX + .8; //updates size of ellipse
            fill(179, 255, 253);
            ellipse(200, 200, bronX, bronX);
            fill(130);
            text("BRONX", 200, 200); //keeps name of text (will have to adjust placement to be more centered in ellipse) 

        }
        else if (whichCirc == "MANHATTAN"){
          manhX = manhX + .8;
          fill(193, 175, 232);
          ellipse(400, 200, manhX, manhX);
            fill(130);
            text("MANHATTAN", 400, 200);

        }
        else if (whichCirc == "BROOKLYN"){
            brooX = brooX + .8; 
            fill(255, 169, 162);
            ellipse(600, 200, brooX, brooX); 
            fill(130);
              text("BROOKLYN", 600, 200);

        }
        else if (whichCirc == "QUEENS"){
            queeX = queeX + .8;
            fill(232,200, 135);
            ellipse(300, 400, queeX, queeX);
             fill(130);
              text("QUEENS", 300, 400);

        }
        else if (whichCirc == "STATEN ISLAND"){
            statX = statX + .8;
            fill(132, 255, 117);
            ellipse(500, 400, statX, statX);
            fill(130);
            text("STATEN ISLAND", 500, 400);

        }
    };
}