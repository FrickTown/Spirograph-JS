function RedWhiteDoubleWhirl(root){
    root.addChild(0.5, 0, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true});
    root.addChild(0.5, Math.PI, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true});

    root.children[0].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 2), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 2), 2))}", "{this.radians += 0.0025}");
}

function RedWhiteBlueQuadIntersect(offset){
    if(offset == null)
        offset = 0;
    //Four evenly spaced first layer children, constant radius
    root.addChild(0.5, (0) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI / 2) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI * 1.5) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});

    //Each child gets two evenly spaced cirles, dynamic radius
    root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
    root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
}

function GrowingRWBQI(root){
    root.radius = 0;
    root.radiusUpdate = "if(this.radius < 400)this.radius += 0.1;"
    var offset = 0.0;
    var FirstChildrenRadialUpdate = `{
        this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; 
        this.radius = this.parent.radius - this.radialDistanceFromParent;
    }`;
    //Four evenly spaced first layer children, constant radius
    root.addChild(0.5, (0) + offset, "#fcf9ea", FirstChildrenRadialUpdate, "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI / 2) + offset, "#fcf9ea", FirstChildrenRadialUpdate, "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI) + offset, "#fcf9ea", FirstChildrenRadialUpdate, "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI * 1.5) + offset, "#fcf9ea", FirstChildrenRadialUpdate, "{this.radians += 0.0025}", {noTrace: true, noCircle: true});

    //Each child gets two evenly spaced cirles, dynamic radius
    root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
    root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");

}

function fiveSetsOfSwirls(root){
    root.radius = 400;
    root.offset = 0.0;
    speed = 0.003;
    //Four evenly spaced first layer children, constant radius
    root.addChild(0.5, (0) + root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed; if(this.radians >= this.originalRadians + this.parent.offset + Math.PI * 2){if(this.parent.offset < Math.PI / 2)this.parent.offset += 0.05; this.parent.children.forEach(element => {element.radians = element.originalRadians + element.parent.offset; element.children.forEach(x => {x.radians = x.originalRadians + x.parent.parent.offset * 2}); }); if(this.parent.offset == 0.25) this.parent.children = []}}", {noTrace: true, noCircle: true});
    root.addChild(0.5, (Math.PI / 2) + root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});
    root.addChild(0.5, (Math.PI) + root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});
    root.addChild(0.5, (Math.PI * 1.5) + root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});

    //Each child gets two evenly spaced cirles, dynamic radius
    root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += speed}");
    root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += speed}");
    root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += speed}");
    root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += speed}");
    root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += speed}");
    root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += speed}");
    root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += speed}");
    root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += speed}");

}

function TrippyMovement(root){
    for(var i = 0; i < 8; i++){
        root.addChild(0.5, (Math.round(Math.PI / 4 * 100) / 100) * i, "#f77754", "", "{this.radians += Math.PI / 1440;}", {noLine: true, noTrace: true});
        root.children[i].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
        root.children[i].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
        root.children[i].children[0].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
        root.children[i].children[0].children[0].children[0].addChild(0.5, 0, "#b5525c", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    }
}