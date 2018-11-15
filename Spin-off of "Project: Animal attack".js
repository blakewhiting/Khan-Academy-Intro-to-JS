var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var h1 = 15;
var h2 = 25;
var y1 = bodyY+75;
var y2 = bodyY+50;


draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    
    // eyes
    fill(255, 0, 0);
    ellipse(bodyX+15, bodyY-75, 8, 8);
    ellipse(bodyX-15, bodyY-75, 8, 8);
    
    // Legs
    // I can call them legs and not break any guidelines. I have just used my **CREATIVITY**
    fill(0, 0, 0);
    ellipse(bodyX-22.5, bodyY+50, 15, 15);
    ellipse(bodyX-37.5, bodyY+50, 15, 15);
    rect(bodyX-35, y2, 10, h2);
    ellipse(bodyX-29.5, y1, 10, h1);
    
    ellipse(bodyX+37.5, bodyY+50, 15, 15);
    ellipse(bodyX+22.5, bodyY+50, 15, 15);
    rect(bodyX+25, y2, 10, h2);
    ellipse(bodyX+30.5, y1, 10, h1);
    
    h1--;
    h2++;
    y1++;
};
