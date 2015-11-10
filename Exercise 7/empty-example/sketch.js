var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
var rats;
var ratsArray = [];
var food = ['Bakery', 'Burgers', 'American', 'Kosher', 'Deli', 'Ice Cream', 'Chinese', 'Hot Dogs', 'Chicken', 'Turkish', 'Sandwiches', 'Bagels', 'Continental', 'Soul Food'];

var start = 0; //
var borough; 

var bronX = 0; //size for each circle 
var brooX= 0;
var manhX = 0;
var statX = 0;
var queeX = 0; 

var bakery = 0; //size for each bar graph
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

var foodVal = [bakery, hamburgers, american, jewish, deli, iceCream, chinese, hotDogs, turkish, caribbean, sandwiches, bagels, continental, soulFood]; //will hold integer values of food for bar graphs size

var rectBegin = 80; //where the bar graph starts horizontally
var rectHeight = 10; //how tall each rectangle is
var cuiStart = 10; //where the text of each cuisine starts
var title = "Visual Representation of Number of Health Violations of Selected Restaurants in NY Boroughs";

function preload(){
	getRats(); //gets JSON file 
}

function setup(){
    createCanvas(800, 600);
    for(var i = 0; i < rats.length; i++){
        var o = rats[i]; //o becomes whatever is inside the rats json index
        ratsArray[i] = new Rats(o); //populates array with rats objects 
    }
    writeText(); //writes all the text 
 }

function draw(){
    start++; //will cycle through every json point 
    borough = ratsArray[start].boro; //this statement and the next is legal because ratsArray is filled with rats objects that have "boro" and "cuisine_description" attributes 
    cuisine = ratsArray[start].cuisine_description; 
    ratsArray[start].display(borough); //updates circle size as program runs 
    ratsArray[start].addUp(cuisine); //updates individual cuisine size of rect
    ratsArray[start].displayCui(); //updates and displays bar graphs using for loop
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

function writeText(){
    var start = 153;
    for(var j = 0; j < 14; j++){
    text(food[j], cuiStart, start); //writes down all the cuisine descriptions next to the respective bar graph 
        start = start + 30;
    }
    text("BRONX", 530, 155);
    text("MANHATTAN", 360, 300);
    text("BROOKLYN", 565, 400);
    text("QUEENS", 675, 205);
    text("STATEN ISLAND", 250, 550);
    push(); //so text size doesn't affect the boroughs in the display function
    textSize(18);
    text(title, 20, 50);
    pop();
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
            text("BRONX", 530, 155); //keeps name of text when ellipse is drawn

        }
        else if (whichCirc == "MANHATTAN"){
          manhX = manhX + .8;
          fill(193, 175, 232);
          ellipse(400, 300, manhX, manhX);
            fill(130);
            text("MANHATTAN", 360, 300);

        }
        else if (whichCirc == "BROOKLYN"){
            brooX = brooX + .8; 
            fill(255, 169, 162);
            ellipse(600, 400, brooX, brooX); 
            fill(130);
              text("BROOKLYN", 565, 400);

        }
        else if (whichCirc == "QUEENS"){
            queeX = queeX + .8;
            fill(232,200, 135);
            ellipse(700, 200, queeX, queeX); 
             fill(130);
              text("QUEENS", 675, 205);

        }
        else if (whichCirc == "STATEN ISLAND"){
            statX = statX + .8;
            fill(132, 255, 117);
            ellipse(300, 550, statX, statX);
            fill(130);
            text("STATEN ISLAND", 250, 550);

        }
    }; //ends display function
    
    this.addUp = function(whichCui){
        if(whichCui == "Bakery"){
            foodVal[0] = foodVal[0] + .5; //updates bakery value by .5, same for rest of else if statements
        }
        else if(whichCui == "Hamburgers"){
            foodVal[1] = foodVal[1] + .5;
        }
        else if (whichCui == "American "){
            foodVal[2] = foodVal[2] + .5;
        }
        else if(whichCui == "Jewish/Kosher"){
            foodVal[3] = foodVal[3] + .5;
        }
        else if(whichCui == "Delicatessen"){
            foodVal[4] = foodVal[4] + .5;
        }
        else if(whichCui == "Ice Cream, Gelato, Yogurt, Ices"){
            foodVal[5] = foodVal[5] + .5;
        }
        else if(whichCui == "Chinese"){
            foodVal[6] = foodVal[6] + .5;
        }
        else if(whichCui == "Hotdogs"){
            foodVal[7] = foodVal[7] + .5;
        }
        else if(whichCui == "Chicken"){
            foodVal[8] = foodVal[8] + .5;
        }
        else if (whichCui == "Turkish"){
            foodVal[9] = foodVal[9] + .5;
        }
        else if(whichCui == "Caribbean"){
            foodVal[10] = foodVal[10] + .5;
        }
        else if(whichCui == "Sandwiches/Salads/Mixed Buffet"){
            foodVal[11] = foodVal[11] + .5;
        }
        else if(whichCui == "Bagels/Pretzels"){
            foodVal[12] = foodVal[12] + .5;
        }
        else if(whichCui == "Continental"){
            foodVal[13] = foodVal[13] + .5;
        }
        else if(whichCui == "Soul Food"){
           foodVal[14] = foodVal[14] + .5;
        }
    }; //ends addUp function

    this.displayCui = function(){ //choses rectangle to expand based on rectangle display
            fill(0);    
            var start = 145;
            for(var i = 0; i < 14; i++){
                rect(rectBegin, start, foodVal[i], rectHeight); //uses for loop to draw every rectangle
                start = start + 30;
            }
    }; //ends displayCui function
}