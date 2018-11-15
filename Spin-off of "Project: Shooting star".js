var x1 = 100;
var y1 = 100;
var x2 = 300;
var y2 = 300;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(x1, y1, 10, 10);
    
    fill(255, 242, 0);
    ellipse(x2, y2, 10, 10);
    
    x2+=0.5;
    y2-=5;
    x1+=10;
    y1+=2;
    
};



