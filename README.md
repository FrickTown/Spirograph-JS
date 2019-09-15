# Spirograph-JS
Spirograph logic implemented in p5.js 

Demo can be found [here](https://imfalling.github.io/Spirograph-JS/)

## Introduction
An entity is essentially a point on the canvas. A co-ordinate, and a radius, along which's inner perimeter its childrens' coordinates will be drawn from. Entities have two variable functions (radiusUpdate and rotationUpdate) to update its properties, one which updates its angular offset in radians from its parent's 0 rad point, and one updating its radial distance from the parent's perimeter.
This calculated point is where its children's entities, contained in the obj.children array, will have their origin.
So a point is found by looking along a parent entity's perimeter, first determining a point along the curve on which it will sit, and then scaling this by this a factor of its parents radius, sort of like its amplitute.
So for example, if a parent is located at [0;0], and it has a radius of 15, and its child has a constant angle of 0 radians, and a radius of 0.8 times its parents radius, this child will be located at:
[0 + parentRadius * cos(0 rad) * 0.8 = 15 * 0.8 = 12; 0 + parentRadius * sin(0) * 0.8 = 0 * 0.8 = 0].
Its child's center origin will be located at [12;0]. The childrens' positions are recursively updated every tick, so first the parent calculates its new point, then its childrens' origins will be calculated after.

## USAGE
All scene logic will go in the SceneSetup() function. It is called once to initialize all the entities.
Root entities must be reachable to all entities, and so must be initialized in the global scope outside of the SceneSetup() function.

First, create an empty root parent entity.
```
var Root;

//Scene Logic Goes Here
function SceneSetup(){

    //Create the first entity. All its children are created through the child constructor in the object. 
    Root = new Entity();
```
This object only needs two properties set, its origin, and its radius, but more properties (like color, outline thickness, etc.) can be adjusted if need be. 
```
//Set its origin to the center of the screen (width and height are already defined as the canvas dimensions by p5.js)
root.origin.x = width / 2;
root.origin.y = height / 2;
//Set a base radius
root.radius = 400;
```
This root entity needs to be updated and drawn every tick, so make sure to include it in the draw function.
Its children are drawn and updated recursively.
```
function draw(){
    update();
    
    background("#263238");
    noFill();

    //Call recursive update and drawing function
    root.update();
    root.draw();

    //Append layer 1 to canvas
    image(l1, 0, 0);
}
```
This root entity is not typically going to be moving around, since it does not have a parent to base its properties off of.
This root entity will instead be populated with smaller circles inside of it. We add a child to an entity by calling a constructor method on the parent object.
```
root.addChild(0.5, 0, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true});
```
This circle, which is half (0.5) the size of its parent, will be rolling around the parent's perimeter at 0.0025 rad/tick. Its radius does not update at all, and stays constant, so we leave that eval string empty ("{}"). An optional property, noTrace, makes sure that we do not draw a dot at its origin every tick.
Here is an explanation of the parameters:
```
[FUNCTION this.addChild = function(radialDistanceFromParentFactor, radians, color, radiusUpdate, rotationUpdate, options)]
@param {Number} radialDistanceFromParentFactor - Factor that determines the radius of this child's origin as factor of its parents radius
@param {Number} radians - Number that determines the angular offset in radians from the parent's 0 rad point this entity starts at
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
```

A demo is already available in the SceneSetup() function. Play around with the values to get a feeling for the system.
The savedFunctions.js file contains a couple of more complex demos. Simply call one of these functions, with the root as a parameter, after initializing the root in the SceneSetup() function:
```
function SceneSetup(){

    //Create the first entity. All its children are created through the child constructor in the object. 
    root = new Entity();

    //Set its origin to the center of the screen (width and height are already defined as the canvas dimensions by p5.js)
    root.origin.x = width / 2;
    root.origin.y = height / 2;
    //Set a base radius
    root.radius = 400;

    fiveSetsOfSwirls(root);
}
```
Have fun!