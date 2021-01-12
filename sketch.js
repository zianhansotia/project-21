var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;
var wall1,wall2,wall3,wall4;

function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,130,10);
    surface1.shapeColor = "black";

    surface2 = createSprite(250,580,130,10);
    surface2.shapeColor = "green";

    surface3 = createSprite(400,580,130,10);
    surface3.shapeColor = "blue";

    surface4 = createSprite(550,580,130,10);
    surface4.shapeColor = "pink";

    //create box sprite and give velocity

    box = createSprite(Math.round(random(20,650)),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 6;

    wall1 = createSprite(695,300,10,690);
    wall1.visible = false;

    wall2 = createSprite(350,595,695,10);
    wall2.visible = false;

    wall3 = createSprite(5,300,10,695);
    wall3.visible = false;

    wall4 = createSprite(350,5,695,10);
    wall4.visible = false;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "black"
      
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "green"
      
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue"
      
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "pink"
      
    }

    drawSprites();

}