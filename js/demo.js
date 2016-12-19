var footImage;
var footGroup;
var playerImage;
var playerSprite;
var footSprite;


var loading = true;

// var frame;

var footprint;

var mySound;

var loadingGif

// var starImage;
// var starGroup;
// var starSprite;





function preload() {
  // Images that you use for sprites must be preloaded!
  footImage = loadImage("image/bonestar.png");
  playerImage = loadImage("image/doggyaction2.gif");


  footprint =loadImage("image/bonestar.png");
  // playerImage = loadImage("image/doggyfootprint.png");
  loadingGif = loadImage("image/doggyonlywithpaws.gif");

  // mySound = loadSound("sound/song.mp3");


  starImage = loadImage("image/star.png");



}


function soundLoaded(song){
  mysound = song;
  mySound.setVolume(0.1);

  mySound.play();

}


function setup() {
 mySound = loadSound("sound/song.mp3", soundLoaded);


  createCanvas(windowWidth, windowHeight);

  // Sprites are how we draw images in p5.play. We'll create a sprite that will
  // represent where the player is.
  // See the sprite documentation and sprite examples:
  //  http://p5play.molleindustria.org/docs/classes/Sprite.html
  //  http://p5play.molleindustria.org/examples/index.html?fileName=sprite.js
  playerSprite = createSprite(0, 0); // Empty sprite at (0, 0) in the world

  
  
  var myAnimation = playerSprite.addAnimation("image/animation/doggyaction1.png", "image/animation/doggyaction1.png", "image/animation/doggyaction2.png", "image/animation/doggyaction2.png", "image/animation/doggyaction3.png", "image/animation/doggyaction3.png", "image/animation/doggyaction4.png", "image/animation/doggyaction4.png", "image/animation/doggyaction5.png", "image/animation/doggyaction5.png");
  myAnimation.offY = -70;
  

  playerSprite.addAnimation("image/animation/doggyaction1.png", "image/animation/doggyaction1.png", "image/animation/doggyaction2.png", "image/animation/doggyaction2.png", "image/animation/doggyaction3.png", "image/animation/doggyaction3.png", "image/animation/doggyaction4.png", "image/animation/doggyaction4.png", "image/animation/doggyaction5.png", "image/animation/doggyaction5.png");
    

 footSprite = createSprite(0, 0);
  footSprite.addImage(footprint); // Give it an image to draw

  // playerSprite.addImage(playerImage); // Give it an image to draw

  // A p5.play Group is a collection of sprites. They allow you to draw a whole
  // bunch of sprites at once. We'll create a group of grass sprites that will
  // go in the background of our sketch.
  //  http://p5play.molleindustria.org/docs/classes/Group.html 
  //  http://p5play.molleindustria.org/examples/index.html?fileName=sprite8.js
  footGroup = new Group();

  for (var i = 0; i < 800; i++) {
    // Create a bunch of randomly placed grass sprites. Note these positions are
    // "world" positions! They don't have to be within the canvas.
    var x = random(-8000,8000);
    var y = random(-8000, 8000);
    var footSprite = createSprite(x, y); // Empty sprite
    footSprite.addImage(footprint); // Give it an image
    footSprite.scale = random(0.5, 1.0); // We can also give it a random scale
    footSprite.rotation  = random(-30, 80);
    // Put the sprite into the group
    footGroup.add(footSprite);
}
//STAR

// starSprite = createSprite(0, 0);
//   starSprite.addImage(starImage); // Give it an image to draw

//   // playerSprite.addImage(playerImage); // Give it an image to draw

//   // A p5.play Group is a collection of sprites. They allow you to draw a whole
//   // bunch of sprites at once. We'll create a group of grass sprites that will
//   // go in the background of our sketch.
//   //  http://p5play.molleindustria.org/docs/classes/Group.html 
//   //  http://p5play.molleindustria.org/examples/index.html?fileName=sprite8.js
//   starGroup = new Group();

//   for (var i = 0; i < 800; i++) {
//     // Create a bunch of randomly placed grass sprites. Note these positions are
//     // "world" positions! They don't have to be within the canvas.
//     var x = random(-6000,6000);
//     var y = random(-6000, 6000);
//     var starSprite = createSprite(x, y); // Empty sprite
//     starSprite.addImage(starImage); // Give it an image
//     starSprite.scale = random(0.1, 1); // We can also give it a random scale

//     // Put the sprite into the group
//     starGroup.add(starSprite);


//   }



 // mySound.setVolume(0.1);




}



function draw() {


  // if(loading){
  //   image(loadingGif, windowWidth/2, windowHeight/2);
  // }else{

 
  
  // Clear the screen
  background(0,0,0);

  // p5.play automatically creates a virtual camera and puts it into a global
  // "camera" variable. See the camera documentation:
  //  http://p5play.molleindustria.org/docs/classes/Camera.html
  if (mouseIsPressed) {
     
      camera.zoom = .5;
  } else {
      camera.zoom = 1;
  }

  // mouseX and mouseY are the normal way we get the mouse position in p5. That
  // won't work with the virtual camera in p5.play. Instead, we use 
  // camera.mouseX & camera.mouseY. Those give us the mouse position in terms of
  // the virtual world coordinates.

  // Give the playerSprite a velocity so that it go towards the mouse position
  playerSprite.velocity.x = (camera.mouseX - playerSprite.position.x) / 100;
  playerSprite.velocity.y = (camera.mouseY - playerSprite.position.y) / 100;

  // Update the camera so that it is centered over the playerSprite
  camera.position.x = playerSprite.position.x;
  camera.position.y = playerSprite.position.y;


 // //limit the ghost movements
 //  if(playerSprite.position.x < 0)
 //    playerSprite.position.x = 0;
 //  if(playerSprite.position.y < 0)
 //    playerSprite.position.y = 0;
 //  if(playerSprite.position.x > SCENE_W)
 //    playerSprite.position.x = SCENE_W;
 //  if(playerSprite.position.y > SCENE_H)
 //    playerSprite.position.y = SCENE_H;
  


  // Figure out how to rotate the player sprite so that it faces the mouse
  var dx = camera.mouseY - playerSprite.position.y;
  var dy = camera.mouseX - playerSprite.position.x;
  // p5.play wants the rotation in degrees, so set the angle mode before called
  // atan2(...)
  angleMode(DEGREES); 
  // atan2 gives you back the angle in degrees (-180 to 180). A value of 90 
  // degrees would mean that the mouse is directly to the right of the 
  // playerSprite. A value of 0 would mean the mouse is directly below the 
  // playerSprite.
  var a = atan2(dy, dx);
  // You can control the rotation of a sprite without needing 
  // push/pop/translate/etc. p5.play wants a slightly different angle than atan2
  // gives you. This will depend on what rotation your raw image is (e.g. which
  // direction is the pacman image facing). Play with the +90 part of the 
  // equation to get the right rotation. 
  playerSprite.rotation = -a + 90;

  // Sprites don't get drawn unless you specifically say that they should be 
  // drawn. You can either tell an individual sprite to draw itself or tell a
  // group of sprites to draw themselves. Note: the order you draw them will 
  // determine which sprites are on top
  drawSprites(footGroup);
//shadow using p5 drawing
  
  // noStroke();
  // fill(0,0,0,20);
  // //shadow
  // ellipse(playerSprite.position.x, playerSprite.position.y+150, 300, 60);

  // rotate(-20);

  // drawSprite(starGroup);

  drawSprite(playerSprite);



  // We can turn the camera off to be able to draw things on to the canvas 
  // directly. This will make is so any coordinates you use are literally canvas
  // coordinates, rather than world coordinates. For example, this is how you 
  // draw a user interface. Let's draw some debugging information about the 
  // player sprite. 
  camera.off();
  textSize(20);

  // text("Player x: " + playerSprite.position.x, 30, 30);
  // text("Player y: " + playerSprite.position.y, 30, 60);
  // text("Player rotation: " + playerSprite.rotation, 30, 90);

}