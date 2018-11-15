// variables
var bodyw = 100;
var bodyh = 100;

// Melting snowman
var draw = function() {
    fill(98, 195, 224);
    ellipse(200, 300, bodyw, bodyh);
    ellipse(200, 242, bodyw-25, bodyh-25);
    ellipse(200, 193, bodyw-50, bodyh-50);
    

    bodyw++;
    bodyh++;
    
    
};
// Text
background(0, 0, 0);
fill(219, 70, 219);
textSize(35);
text("Snowman", 10, 30);
textSize(15);
text("Very cold, leaves behind only clean water", 10, 49);



