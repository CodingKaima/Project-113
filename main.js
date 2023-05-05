function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot()
 {     
    save("MyPic.png"); 
}

create.Canvas()
{
    Syntax : createCanvas(640, 480)
    circle(x, y, d)
    rect(x, w[h], [tr], [tl], [br], [bl])
    rect(x, y, w, h, [detailX], [detailY])
    ellipse(x, y, w [h])
    ellipse(x, y, w, h, [detail])

}