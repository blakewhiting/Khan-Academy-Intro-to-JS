background(89, 216, 255);
    var centerX = 200;
    var centerY = 100;
    var bodyLength = 118;
    var bodyHeight = 74;
    
    
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){

    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight    );
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,       bodyHeight/5);
};


//colorMode(HSB);
var draw = function() {
    var x=random(116, 374);
var y=random(27, 381);
var l=random(30, 183);
var h=random(50, 90);
     var colour= color(random(0,255),random(0,255),random(0,255));
     var bodyColor = colour;
drawFish(x, y, l, h, colour);

};

