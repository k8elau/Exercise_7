//also planning to maybe visualize based on cuisine 
//move boroughs to locationsish 
//bar graph shows places with most violation 

//title at top: number of violations in each borough and what cuisine (does not consider repeats) 

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

var bakery = 0; //all of the potential cuisine descriptions
var hamburgers = 0;
var american = 0;
var jewish = 0;
var deli = 0;
var iceCream = 0;
var chinese = 0;
var hotDogs = 0;
var chicken = 0;
var turkish = 0;
var caribbean = 0;
var sandwiches = 0;
var bagels = 0;
var continental = 0;
var soulFood = 0;

function preload(){
	getRats(); //gets JSON file 
}

function setup(){
    createCanvas(800, 1000);
    for(var i = 0; i < rats.length; i++){
        var o = rats[i]; //o becomes whatever is inside the rats json index
        ratsArray[i] = new Rats(o); //populates array with rats objects 
    }
 }

function draw(){
    start++; //will cycle rather than do all at once 
    borough = ratsArray[start].boro; //this is legal because ratsArray is filled with rats objects that have "boro" and "cuisine_description" attributes 
    cuisine = ratsArray[start].cuisine_description;
    console.log(start); //used to make sure all pieces of data were being sifted through  (stops at 1000)
    console.log(borough); //used to make sure the right boroughs are being updated accordingly
    console.log(cuisine);
    ratsArray[start].display(borough); //updates circle size as program runs 
    ratsArray[start].addUp(cuisine);
    if(mouseIsPressed){
    ratsArray[start].displayCui(cuisine); //only shows bar graphs if user presses
    }
    console.log(bakery);
    console.log(hamburgers);
    console.log(chinese);
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
            ellipse(550, 150, bronX, bronX);
            fill(130);
            text("BRONX", 525, 150); //keeps name of text (will have to adjust placement to be more centered in ellipse) 

        }
        else if (whichCirc == "MANHATTAN"){
          manhX = manhX + .8;
          fill(193, 175, 232);
          ellipse(400, 300, manhX, manhX);
            fill(130);
            text("MANHATTAN", 350, 300);

        }
        else if (whichCirc == "BROOKLYN"){
            brooX = brooX + .8; 
            fill(255, 169, 162);
            ellipse(600, 400, brooX, brooX); 
            fill(130);
              text("BROOKLYN", 550, 400);

        }
        else if (whichCirc == "QUEENS"){
            queeX = queeX + .8;
            fill(232,200, 135);
            ellipse(700, 200, queeX, queeX); 
             fill(130);
              text("QUEENS", 675, 200);

        }
        else if (whichCirc == "STATEN ISLAND"){
            statX = statX + .8;
            fill(132, 255, 117);
            ellipse(300, 550, statX, statX);
            fill(130);
            text("STATEN ISLAND", 250, 550);

        }
    };
    
    this.addUp = function(whichCui){
        if(whichCui == "Bakery"){
            bakery = bakery + .5;
        }
        else if(whichCui == "Hamburgers"){
            hamburgers = hamburgers + .5; 
        }
        else if (whichCui == "American "){
            american = american + .5;
        }
        else if(whichCui == "Jewish/Kosher"){
            jewish = jewish + .5;
        }
        else if(whichCui == "Delicatessen"){
            deli = deli + .5;
        }
        else if(whichCui == "Ice Cream, Gelato, Yogurt, Ices"){
            iceCream = iceCream + .5;
        }
        else if(whichCui == "Chinese"){
            chinese = chinese + .5;
        }
        else if(whichCui == "Hotdogs"){
            hotDogs = hotDogs + .5; 
        }
        else if(whichCui == "Chicken"){
            chicken = chicken + .5;
        }
        else if (whichCui == "Turkish"){
            turkish = turkish + .5;
        }
        else if(whichCui == "Caribbean"){
            caribbean = caribbean + .5;
        }
        else if(whichCui == "Sandwiches/Salads/Mixed Buffet"){
            sandwiches = sandwiches + .5;
        }
        else if(whichCui == "Bagels/Pretzels"){
            bagels = bagels + .5;
        }
        else if(whichCui == "Continental"){
            continental = continental + .5;
        }
        else if(whichCui == "Soul Food"){
            soulFood = soulFood + .5;
        }
    }; 

    this.displayCui = function(whichCui){ //choses rectangle to expand based on rectangle display
            fill(255);
            rect(30, 30, bakery, 10);
            rect(30, 60, hamburgers, 10);
            rect(30, 90, american, 10);
            rect(30, 120, jewish, 10);
            rect(30, 150, deli, 10);    
            rect(30, 180, iceCream, 10);
            rect(30, 210, chinese, 10);
            rect(30, 240, hotDogs, 10);
            rect(30, 270, chicken, 10);
            rect(30, 300, turkish, 10);
            rect(30, 330, caribbean, 10);
            rect(30, 360, sandwiches, 10);
            rect(30, 390, bagels, 10);
            rect(30, 420, continental, 10);
            rect(30, 450, soulFood, 10);
    }; //ends displayCui function
}