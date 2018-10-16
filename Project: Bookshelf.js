var j = 0;
var x = 6;
var y = 30;

var books = {
    title: ["Book", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7", "Book8", "Book9", "Book10", "Book11", "Book12"],
    stars: [random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5), random(0,5)],
    author: ["Author", "Author2", "Author3", "Author4", "Author5", "Author6", "Author7", "Author8", "Author9", "Author10", "Author11", "Author12"],
    color: [color(random(0, 255), random(0, 255), random(0,255)),color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255)), color(random(0, 255), random(0, 255), random(0,255))],
    love:[random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10), random(0,10)]
}; 


for(var i = 20;i < 400;i += 136){
    for(var x = 6;x < 400;x += 99){
        fill(books.color[j]);
        rect(x, i, 93, 100);
        fill(0, 0, 0);
        text(books.title[j], x + 3, i + 10, 115, 100);
        text(books.author[j], x + 3, i + 37, 97, 100);
        for(var textY = 90;textY < 400;textY += 132) {
            for (var k = 0; k < books.stars[k]; i++) {
                image(getImage("cute/Star"), x + 5 + i * 15, textY, 20, 30);
            }
            if(books.love[j]<4) {
            image(getImage("space/healthheart"),x + 41 + i * 5, textY - 17, 28, 30);
            }
        }

        j++;
    }
    // draw shelf
    if (j >= 0) {
        fill(173, 117, 33);
        rect(0, a + 97, 399, 10);
    }
}
        if(j<3) {
            image(getImage("space/healthheart"),x + 49 + i * 5, textY, 28, 30);
        }
