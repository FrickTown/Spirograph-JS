function RedWhiteDoubleWhirl(){
    Root.addChild(0.5, 0, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true});
    Root.addChild(0.5, Math.PI, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true});

    Root.children[0].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 2), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 2), 2))}", "{this.radians += 0.0025}");
}

function RedWhiteBlueQuadIntersect(offset){
    if(offset == null)
        offset = 0;
    //Four evenly spaced first layer children, constant radius
    Root.addChild(0.5, (0) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI / 2) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI * 1.5) + offset, "#fcf9ea", "{}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});

    //Each child gets two evenly spaced cirles, dynamic radius
    Root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    Root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    Root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    Root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
    Root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = this.originalradialDistanceFromParent * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
}

function GrowingRWBQI(){
    Root.radius = 0;
    Root.radiusUpdate = "if(this.radius < 400)this.radius += 0.1;"
    var offset = 0.0;
    //Four evenly spaced first layer children, constant radius
    Root.addChild(0.5, (0) + offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI / 2) + offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI) + offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI * 1.5) + offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += 0.0025}", {noTrace: true, noCircle: true});

    //Each child gets two evenly spaced cirles, dynamic radius
    Root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    Root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += 0.0025}");
    Root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    Root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += 0.0025}");
    Root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");
    Root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += 0.0025}");

}

function fiveSetsOfSwirls(){
    Root.radius = 400;
    Root.offset = 0.0;
    speed = 0.003;
    //Four evenly spaced first layer children, constant radius
    Root.addChild(0.5, (0) + Root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed; if(this.radians >= this.originalRadians + this.parent.offset + Math.PI * 2){if(this.parent.offset < Math.PI / 2)this.parent.offset += 0.05; this.parent.children.forEach(element => {element.radians = element.originalRadians + element.parent.offset; element.children.forEach(x => {x.radians = x.originalRadians + x.parent.parent.offset * 2}); }); if(this.parent.offset == 0.25) this.parent.children = []}}", {noTrace: true, noCircle: true});
    Root.addChild(0.5, (Math.PI / 2) + Root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});
    Root.addChild(0.5, (Math.PI) + Root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});
    Root.addChild(0.5, (Math.PI * 1.5) + Root.offset, "#fcf9ea", "{this.radialDistanceFromParent = this.parent.radius * this.radialDistanceFromParentFactor; this.radius = this.parent.radius - this.radialDistanceFromParent;}", "{this.radians += speed;}", {noTrace: true, noCircle: false});

    //Each child gets two evenly spaced cirles, dynamic radius
    Root.children[0].addChild(1.0, 0, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += speed}");
    Root.children[0].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5), 2))}", "{this.radians += speed}");
    Root.children[1].addChild(1.0, Math.PI / 2, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += speed}");
    Root.children[1].addChild(1.0, Math.PI * 1.5, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4), 2))}", "{this.radians += speed}");
    Root.children[2].addChild(1.0, 0, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += speed}");
    Root.children[2].addChild(1.0, Math.PI, "#f73859", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 2), 2))}", "{this.radians += speed}");
    Root.children[3].addChild(1.0, Math.PI / 2, "#5edfff", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += speed}");
    Root.children[3].addChild(1.0, Math.PI * 1.5, "#dbedf3", "{this.radialDistanceFromParent = (this.parent.radius * this.radialDistanceFromParentFactor) * Math.sqrt(Math.pow(sin(this.radians * 5 + Math.PI / 4 * 3), 2))}", "{this.radians += speed}");

}

function boop(){
    Root.addChild(0.5, 0, "#f77754", "", "{this.radians += Math.PI / 1440;}", {noLine: true, noTrace: true});
    Root.children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[0].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[0].children[0].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[0].children[0].children[0].children[0].addChild(0.5, 0, "#b5525c", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.addChild(0.5, Math.round(Math.PI / 4 * 100) / 100, "#f77754", "", "{this.radians += Math.PI / 1440;}", {noLine: true, noTrace: true});
    Root.children[1].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[1].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[1].children[0].children[0].addChild(0.5, 0, "#537d91", "", "{this.radians += (Math.PI / 180);}", {noLine: true})
    Root.children[1].children[0].children[0].children[0].addChild(0.5, 0, "#b5525c", "", "{this.radians += (Math.PI / 180);}", {noLine: true})


}