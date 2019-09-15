//Layer one to separate the traced lines from the background layer
var l1;

function setup(){
    //Width and height of scene
    createCanvas(1920, 1000);
    //Background color
    background("#263238");
    //Attempted tickrate per second
    frameRate(120);

    //Init layer
    l1 = createGraphics(1920, 1000);

    //Call the function where custom drawing code is written
    SceneSetup();
}

//An entity is essentially a circle with a coordinate on the canvas, and a radius, along which's diameter its childrens coordinates will be drawn
//It contains two functions (radiusUpdate and rotationUpdate) to determine its co-ordinates relative to its parents co-ordinates, one based on an angle in radians, and one based on a radial distance from the base coordinate.
//This calculated point is where its children entities, contained in the children array, will have their origin.
//So a point is found by looking along a parent entity's diameter, first determining a point along the curve on which it will sit, and then scaling this by this a factor of its parents radius, sort of like its amplitute.
//So for example, if a parent is located at [0;0], and it has a radius of 15, and its child has a constant angle of 0 radians, and a radius of 0.8 times its parents radius, this child will be located at:
//[0 + parentRadius * cos(0 rad) * 0.8 = 15 * 0.8 = 12; 0 + parentRadius * sin(0) * 0.8 = 0 * 0.8 = 0].
//Its child will be located at [12;0]. The childrens' positions are recursively updated every tick, so first the parent calculates its new point, then its childrens' origins will be calculated from there.

function Entity(){
    //Top level entities will not have a parent, so default is null unless created with constructor
    this.parent = null;
    this.children = [];
    this.color = "white";
    this.lineThickness = 4;
    /*
        [FUNCTION this.addChild = function(radialDistanceFromParentFactor, radians, color, radiusUpdate, rotationUpdate, options)]
        @param {Number} radialDistanceFromParentFactor - Factor that determines the radius of this child's origin as factor of its parents radius
        @param {Number} radians - Number that determines the angle in radians from 0 of the parent's apex this point starts at
        @param {String} color - Hexadecimal value for determining the color of this child
        @param {String} radiusUpdate - String to evaluate (eval()) every update tick to manipulate the radius
        @param {String} rotationUpdate - String to evaluate eval() every update tick to manipulate the rotation
        [NOTE: These two update strings could be merged into one big eval string, but are separated for easier reading]
        @param {Object} options - Object of potential options related to rendering to enable or disable
        
        options = {
            noCircle: (default: false),
            noLine: (default: false),
            noTrace: (default: false),
            lineThickness: (default: 4)
        }

    */
    this.addChild = function(radialDistanceFromParentFactor, radians, color, radiusUpdate, rotationUpdate, options){
        var temp = new Entity();
        //"this" in this scope is the parent on which the constructor method was called
        temp.parent = this;
        temp.color = color;

        temp.radialDistanceFromParentFactor = radialDistanceFromParentFactor;

        //This child's origin's radial distqnce from its parent's origin
        temp.radialDistanceFromParent = this.radius * radialDistanceFromParentFactor;

        //The child's radius determined by the distance between its origin, and its parent's diameter.
        temp.radius = this.radius - temp.radialDistanceFromParent;

        //Save the original radial distance, in order to make more complicated amplitudal functions that can fluctuate around a base value
        temp.originalradialDistanceFromParent = temp.radialDistanceFromParent;

        temp.radians = radians;
        //Save the original rotational value, in order to make more complicated rotational functions that can fluctuate around a base value
        temp.originalRadians = radians;

        //Set update methods
        temp.radiusUpdate = radiusUpdate;
        temp.rotationUpdate = rotationUpdate;

        //If options parameter is supplied
        if(options != null){
            temp.options = options;
            if(options.lineThickness != null)
                temp.lineThickness = options.lineThickness;
        }

        //Get first position
        temp.origin = temp.getPosition();
        
        //Append to parent's children array
        this.children.push(temp);
    }

    this.origin = {x: null, y: null};
    this.radius = null;
    this.radiusFactorOfParentDiameter = null;
    this.radialDistanceFromParent = null;
    this.originalPointOffset = null;
    this.radians = null;

    this.getPosition = function(){
        return {
            x: this.parent.origin.x + ((this.radialDistanceFromParent) * cos(this.radians)),
            y: this.parent.origin.y + ((this.radialDistanceFromParent) * sin(this.radians))
        };
    }

    this.radiusUpdate = "";
    this.rotationUpdate = "";

    this.options = {};

    this.update = function(){
        //Evaluate the two update strings
        eval(this.rotationUpdate);
        eval(this.radiusUpdate);
        //If it's not a top level entity
        if(this.parent != null){
            this.radius = this.parent.radius - this.radialDistanceFromParent;
            this.origin = this.getPosition();
        }
        this.children.forEach(element => {
            element.update();
        });
    }

    this.draw = function(){
        strokeWeight(this.lineThickness);
        stroke(this.color);
        if(!this.options.noCircle)
            ellipse(this.origin.x, this.origin.y, this.radius*2);
        if(this.parent != null){

            if(!this.options.noLine)
                line(this.parent.origin.x, this.parent.origin.y, this.origin.x, this.origin.y);

            l1.strokeWeight(this.lineThickness);
            l1.stroke(this.color);

            if(!this.options.noTrace)
                l1.point(this.origin.x, this.origin.y);
        }

        //Execute function recursively
        this.children.forEach(element => {
            element.draw();
        });
    }
    console.log(this);
}

//Tick function
function draw(){
    
    background("#263238");
    noFill();
    
    //Call recursive update and drawing function
    root.update();
    root.draw();

    //Draw layer 1 on canvas
    image(l1, 0, 0);
}

//Scene global scope required variables go here
var speed;
var root;

//Scene Logic Goes Here
function SceneSetup(){

    //Create the first entity. All its children are created through the child constructor in the object. 
    root = new Entity();

    //Set its origin to the center of the screen (width and height are already defined as the canvas dimensions by p5.js)
    root.origin.x = width / 2;
    root.origin.y = height / 2;
    //Set a base radius
    root.radius = 400;

    //Add two children, half the size of the root
    root.addChild(0.5, 0, "#5edfff", "{}", "{this.radians += 0.0025}", {noTrace: true, noLine: true});
    root.addChild(0.5, Math.PI, "#f73859", "{}", "{this.radians += 0.0025}", {noTrace: true, noLine: true});

    //Add a child to each of root's children
    root.children[0].addChild(0.5, Math.PI, "#f73859", "{}", "{this.radians -= 0.005}", {noTrace: true, noLine: true});
    root.children[1].addChild(0.5, 0, "#5edfff", "{}", "{this.radians -= 0.005}", {noTrace: true, noLine: true});

    //Add yet another layer
    root.children[0].children[0].addChild(0.5, 0, "#5edfff", "{}", "{this.radians += 0.01}", {noTrace: false, noLine: true});
    root.children[1].children[0].addChild(0.5, Math.PI, "#f73859", "{}", "{this.radians += 0.01}", {noTrace: false, noLine: true});
}
