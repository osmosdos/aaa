let slider;
let w;
let osc, playing, freq, amp;
var mic; // Microphone library

let pos = 0;

let img;
function preload() {
  img = loadImage('assets/fotka.png');
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight*2);

  rectMode(CENTER);
  angleMode(DEGREES);
  

  // slider = createSlider(30, 150, 30);
  // slider.position(100, 410);
  // slider.style("width", "200px");

  frameRate(10);

  // mic = new p5.AudioIn(); 
  // mic.start(); // Load the library 

  osc = new p5.Oscillator('sine');
}

function draw() {
  background(255);
  //image(img, 0, 0);
  noStroke();

  // var vol = mic.getLevel();

  //  w= map(vol, 0, 0.2, 30, 150 );

   w= map(mouseX, 0, innerWidth, 30, 160 );

  // w= map(pos, 0, innerHeight/8, 30, 150, true );


  //playOscillator();
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
push();
  translate(100,0);
  scale(2.5);
  o(w);
  translate(250,0);
  h(w);
  push();
  translate(250,0);
  for(let i = 0; i < 6; i++){
   fill(random(255),random(255),random(255));
   square(115,110 + i * 30,w);
  }
  fill(random(255),random(255),random(255));
   square(115,320,w);
  pop();

pop();

// scale(0.55);
// push();

//   translate(80,50);
//   a(w);
//   translate(350,0);
//   b(w);
//   translate(350,0);
//   v(w);
//   translate(330,0);
//   g(w);
//   translate(350,0); 
//   d(w);
//   translate(370,0);
//   dj(w);
//   translate(370,0);
//   e(w);
//   translate(350,0);
//   zj(w);

// pop();
// push();

//   translate(80,500);
//   z(w);
//   translate(350,0);
//   i(w);
//   translate(350,0);
//   j(w);
//   translate(340,0);
//   k(w);
//   translate(350,0);
//   l(w);
//   translate(365,0);
//   lj(w);
//   translate(365,0);
//   m(w);
//   translate(395,0);
//   n(w);
//   translate(350,0);
//   nj(w);

// pop();
// push();
//   translate(80,950);
//   o(w);
//   translate(390,0);
//   p(w);
//   translate(370,0);
//   r(w);
//   translate(350,0);
//   s(w);
//   translate(350,0);
//   t(w);
//   translate(350,0);
//   cj(w);

// pop();
// push();

//   translate(80,1400);
//   u(w);
//   translate(350,0);
//   f(w);
//   translate(410,0);
//   h(w);
//   translate(410,0);
//   c(w);
//   translate(410,0);
//   ch(w);
//   translate(410,0);
//   dzj(w);
//   translate(410,0);
//   sh(w);
}

function mouseWheel(event) {

  pos += event.delta ; 
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function a(w) {

push();
translate(0,15);

  fill(random(255),random(255),random(255));
  square(200,95,w);

  for(let i = 0; i < 7; i++){
   fill(random(255),random(255),random(255));
   square(185-i*10,125+i*30,w);
  }
  
  for(let i = 0; i < 7; i++){
   fill(random(255),random(255),random(255));
   square(215+i*10,125+i*30,w);
  }
  
  for(let i = 0; i < 3; i++){
   fill(random(255),random(255),random(255));
   square(170+i*30,245,w);
  }
pop();
}

function b(w) {

  push();
translate(0,15);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 185 , w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 305 , w, w);
  }
  
  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(130, 95 + i * 30, w, w);
  }
  
  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255),random(255));
    rect(130  + i * 30, 95, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 215 , 185 + i * 120, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 192 + i * 105, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 257 , 215 + i * 60, w, w);
  }

fill(random(255), random(255),random(255));
rect( 265 , 245, w, w);

pop();

}

function v(w) {

  push();
translate(0,15);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 185 , w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 305 , w, w);
  }
  
  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(130, 95 + i * 30, w, w);
  }

  for (let i = 0; i < 3; i++) {
    fill(random(255), random(255),random(255));
    rect(130  + i * 30, 95, w, w);
  }
  
  //donji polukrug

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 215 , 185 + i * 120, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 192 + i * 105, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 257 , 215 + i * 60, w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 265 , 245, w, w);

  //gornji polukrug

  fill(random(255), random(255),random(255));
    rect( 215 , 95, w, w);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 102 + i * 76, w, w);
  }

   for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 250 , 115 + i * 48, w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 258 , 140, w, w);

pop();
  
}

function g(w) {

  push();
translate(0,15);

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(150, 95 + i * 30, w, w);
  }
  
    for (let i = 0; i < 5; i++) {
    fill(random(255), random(255),random(255));
    rect(150  + i * 30, 95, w, w);
  }

  pop();

}

function d(w){

  fill(random(255), random(255), random(255));
  rect( 295 , 343, w, w);

  
  fill(random(255), random(255),random(255));
  rect(92, 343, w, w);
  
  
  for (let i = 0; i < 7; i++) {
    fill(random(255), random(255),random(255));
    rect(257, 110 + i * 30, w, w);
  }
  
  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255),random(255));
    rect(137  + i * 30, 110, w, w);
  }

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(137, 110 + i * 30, w, w);
  }

  fill(random(255), random(255), random(255));
  rect( 135 , 230, w, w);
  fill(random(255), random(255), random(255));
  rect( 130 , 250, w, w);
  fill(random(255), random(255), random(255));
  rect( 125 , 270, w, w);
  fill(random(255), random(255), random(255));
  rect( 120 , 290, w, w);
  fill(random(255), random(255), random(255));
  rect( 105,  305, w, w);

  
  fill(random(255), random(255),random(255));
  rect(92, 313, w, w);
  

  for (let i = 0; i < 7; i++) {
    fill(random(255), random(255),random(255));
    rect(115  + i * 30, 313, w, w);
  }

 

}

function dj(w) {
  
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(175 + i * 30, 200, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(145, 110 + i * 30, w, w);
  }
  
  for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect(85 + i * 30, 110, w, w);
  }

  //luk
  
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(235, 206 + i * 144, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(253, 219 + i * 116, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(265, 239 + i * 78, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(274, 262 + i * 30, w, w);
  }
  
  
 
}

function e(w) {

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(145  + i * 30, 215, w, w);
  }
  
  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

   for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 15, 110, w, w);
  }

   for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 15, 320, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(155  + i * 30, 110, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(155  + i * 30, 320, w, w);
  }

}

function zj(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(235, 110 + i * 30, w, w);
  }

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 30, 110  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 355 - i * 30, 110  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 205 - i * 30, 200  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 265 + i * 30, 200  + i * 30, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 240, 320, w, w);
  }
}


function z(w) {

//gornji luk


  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 167 + i * 30, 110, w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 137, 120, w, w);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 127 - i * 10, 135 + i * 15, w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 227, 120, w, w);

    fill(random(255), random(255),random(255));
    rect( 243, 140, w, w);
 
  fill(random(255), random(255),random(255));
    rect( 250, 170, w, w);

//sredina

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 180 + i * 30, 215, w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 210, 205, w, w);  

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 240, 200 + i * 30, w, w);
  }  

//donji luk


  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 255, 250 + i * 30 , w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 244, 297, w, w);
 
  fill(random(255), random(255),random(255));
    rect( 227, 310, w, w);
  

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 197 - i * 30, 320, w, w);
  }



  fill(random(255), random(255),random(255));
    rect( 137, 310, w, w);

  fill(random(255), random(255),random(255));
    rect( 124, 297, w, w);

  fill(random(255), random(255),random(255));
    rect( 115, 281, w, w);

}

function i(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(265, 110 + i * 30, w, w);
  }

   for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(145 + i * 30 , 275 - i * 30, w, w);
  }
}

function j(w) {

 for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect(230, 110 + i * 30, w, w);
  }

 fill(random(255), random(255),random(255));
  rect(220, 290 , w, w);

  fill(random(255), random(255),random(255));
  rect(207, 310 , w, w);
 
 for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(187 - i * 30, 320 , w, w);
  }

  fill(random(255), random(255),random(255));
  rect(137, 310 , w, w);

  fill(random(255), random(255),random(255));
  rect(120, 290 , w, w);

  fill(random(255), random(255),random(255));
    rect(115, 260 , w, w);

}

function k(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 - i * 30, 110  + i * 30, w, w);
  }

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 145 + i * 30, 200  + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 235, 320, w, w);
  
}

function l(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(235, 320 - i * 30, w, w);
  }

  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 30, 110, w, w);
  }

   for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
    rect(112, 230, w, w);

  fill(random(255), random(255),random(255));
    rect(108, 250, w, w);

  fill(random(255), random(255),random(255));
    rect(103, 269, w, w);

  fill(random(255), random(255),random(255));
    rect(97, 289, w, w);

  fill(random(255), random(255),random(255));
    rect(83, 304, w, w);

  fill(random(255), random(255),random(255));
    rect(69, 320, w, w);
}

function lj(w) {

  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 30, 110, w, w);
  }

   for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
    rect(112, 230, w, w);

  fill(random(255), random(255),random(255));
    rect(108, 250, w, w);

  fill(random(255), random(255),random(255));
    rect(103, 269, w, w);

  fill(random(255), random(255),random(255));
    rect(97, 289, w, w);

  fill(random(255), random(255),random(255));
    rect(83, 304, w, w);

  fill(random(255), random(255),random(255));
    rect(69, 320, w, w);

   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(235, 320 - i * 30, w, w);
  }
}


function lj(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(205, 320 - i * 30, w, w);
  }

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 30, 110, w, w);
  }

   for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
    rect(112, 230, w, w);

  fill(random(255), random(255),random(255));
    rect(108, 250, w, w);

  fill(random(255), random(255),random(255));
    rect(103, 269, w, w);

  fill(random(255), random(255),random(255));
    rect(97, 289, w, w);

  fill(random(255), random(255),random(255));
    rect(83, 304, w, w);

  fill(random(255), random(255),random(255));
    rect(69, 320, w, w);

  push();
  translate(20,15);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 215 , 185 + i * 120, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 192 + i * 105, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 257 , 215 + i * 60, w, w);
  }

fill(random(255), random(255),random(255));
rect( 265 , 245, w, w);

pop();
}
  
function m(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(313, 110 + i * 30, w, w);
  }

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(145 + i * 18, 110 + i * 30, w, w);
  }

fill(random(255), random(255),random(255));
    rect(213, 230, w, w);  

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(229 + i * 18, 200 - i * 30, w, w);
  }

}

function n(w) {

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(135 + i * 120, 200 , w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(275, 110 + i * 30, w, w);
  }

    for (let i = 0; i < 3; i++) {
    fill(random(255), random(255),random(255));
    rect(165 + i * 30, 200 , w, w);
  }
}


function nj(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(235, 110 + i * 30, w, w);
  }

    for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect(145 + i * 30, 200 , w, w);
  }

  push();
  translate(50,15);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 215 , 185 + i * 120, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 192 + i * 105, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 257 , 215 + i * 60, w, w);
  }

fill(random(255), random(255),random(255));
rect( 265 , 245, w, w);

pop();


}

function o(w) {

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 193 + i * 30, 110 , w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 193+ i * 30, 320, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 163  + i * 90 , 118, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 163  + i * 90 , 312, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 148  + i * 120 , 132, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 148  + i * 120 , 297, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 131  + i * 155 , 150, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 131  + i * 155 , 279, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 121  + i * 173 , 170, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 121  + i * 173 ,260, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 200 + i * 30, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 300 , 200 + i * 30, w, w);
  }

}

function p(w) {
    for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }
  
   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(265, 110 + i * 30, w, w);
  }
  
   for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect(115  + i * 30, 110, w, w);
  }
}

function r(w) {

  push();
  translate(-15,-75);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 185 , w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(160 + i * 30, 305 , w, w);
  }

pop();

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(115, 110 + i * 30, w, w);
  }

 push();
  translate(-15,-75);

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 215 , 185 + i * 120, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 192 + i * 105, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 257 , 215 + i * 60, w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 265 , 245, w, w);

  pop();
}

function s(w) {

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 193 + i * 30, 110 , w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 193+ i * 30, 320, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 163  + i * 90 , 118, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 163  + i * 90 , 312, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 148  + i * 120 , 132, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 148  + i * 120 , 297, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 131  + i * 155 , 150, w, w);
  }

for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 131  + i * 155 , 279, w, w);
  }

fill(random(255), random(255),random(255));
rect( 121, 170, w, w);

fill(random(255), random(255),random(255));
rect( 121,260, w, w);


for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 200 + i * 30, w, w);
  }
}

function t(w) {

   for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(190, 110 + i * 30, w, w);
  }

  for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect(115 + i * 30, 110 , w, w);
  }
}

function cj(w) {

    for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect(175 + i * 30, 200, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect(145, 110 + i * 30, w, w);
  }
  
  for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect(85 + i * 30, 110, w, w);
  }

  //luk
  
  fill(random(255), random(255),random(255));
  rect(235, 206, w, w);
  
  fill(random(255), random(255),random(255));
  rect(253, 219, w, w);
  
  fill(random(255), random(255),random(255));
  rect(265, 239, w, w);
  
  for (let i = 0; i < 3; i++) {
    fill(random(255), random(255),random(255));
    rect(274, 262 + i * 30, w, w);
  }
}

function u(w) {

  for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 15 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 7; i++) {
    fill(random(255), random(255),random(255));
    rect( 265 - i * 15 , 110 + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 160 , 305, w, w);

  fill(random(255), random(255),random(255));
    rect( 146 , 315, w, w);

  fill(random(255), random(255),random(255));
    rect( 131 , 320, w, w);
}

function f(w) {

  fill(random(255), random(255),random(255));
  rect( 222 , 102, w, w);

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 222 , 117 + i * 30, w, w);
  }

  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 192 + j * 60, 132 + i * 166, w, w);
  }}

  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 162 + j * 120, 140 + i * 150, w, w);
  }}

  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 140 + j * 165, 157 + i * 116, w, w);
  }}

  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 125 + j * 194, 178 + i * 75, w, w);
  }}

  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + j * 213, 200 + i * 30, w, w);
  }}
}

function h(w) {

  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 30, 110  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 295 - i * 30, 110  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 205 - i * 30, 200  + i * 30, w, w);
  }
  
  for (let i = 0; i < 4; i++) {
    fill(random(255), random(255),random(255));
    rect( 205 + i * 30, 200  + i * 30, w, w);
  }

  for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 180, 320, w, w);
  }
}

function c(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 265 , 110 + i * 30, w, w);
  }

   for (let i = 0; i < 7; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 30, 320 , w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 295, 350 , w, w);

  fill(random(255), random(255),random(255));
  rect( 295, 370 , w, w);

}

function ch(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 258 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 3; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 110 + i * 30, w, w);
  }

  fill(random(255), random(255),random(255));
    rect( 121, 200 , w, w);

    fill(random(255), random(255),random(255));
    rect( 145, 222 , w, w);

   for (let i = 0; i < 2; i++) {
    fill(random(255), random(255),random(255));
    rect( 175 + i * 30, 230 , w, w);

    fill(random(255), random(255),random(255));
    rect( 228, 222 , w, w);
  }

  

 

}

function dzj(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 265 , 110 + i * 30, w, w);
  }

   for (let i = 0; i < 6; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 30, 320 , w, w);
  }

  fill(random(255), random(255),random(255));
  rect( 190, 350 , w, w);

  fill(random(255), random(255),random(255));
  rect( 190, 370 , w, w);

}

function sh(w) {

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 235 , 110 + i * 30, w, w);
  }

  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255),random(255));
    rect( 355 , 110 + i * 30, w, w);
  }

   for (let i = 0; i < 9; i++) {
    fill(random(255), random(255),random(255));
    rect( 115 + i * 30, 320 , w, w);
  }
}