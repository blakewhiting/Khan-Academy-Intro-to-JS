// Alright, for some reason my screen of the drawing won't show what I have done. I have put my work into another challenge thing to see if it works, and it does. Please keep that in mind. It only has this problem on this project. If you ask me, this is ridiculous and needs to be fixed by the developpers of this site.

var book = [
    {title: "Book",
    author: "Author",
    stars: 3,
    color: color(214, 255, 219)},
    {title: "Book2",
    author: "Author2",
    stars: 3,
    color: color(224, 208, 208)},
   {title: "Book3",
   author: "Author3",
   stars: 4,
   color: color(238, 237, 242)},
 
];


// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

for( var i = 0; i < book.length; i ++)
{
  // draw one book
//fill(214, 255, 219);
fill(book[i].color);
rect(10 + i * 100, 20, 90, 100);
fill(0, 0, 0);
text(book[i].title, 15 + i *100, 29, 70, 100);
text(book[i].author, 15 + i *100, 60, 70, 100);
for (var j = 0; j < book[i].stars; j++) {
image(getImage("cute/Star"), 11 +j*20 + i* 100, 90, 20, 30);
}  
}
