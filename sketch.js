let x = 0;
let b = 0;
//

//-------variable for the rain
//declare emtpy rain position array
let rainX=[];
let rainY = [];
let rainNum=100;
//let rainColor=['red','green','blue'];
let rainColor = [];//random rain color

function setup() {
  createCanvas(500,400);

  for(i=0;i<rainNum;i++){
    //generate random values for three local variables r g and b
    let r=random(150,255);
    let g=random(150,255);
    let b=random(255);
    //create an array and plug it in rainColor
    rainColor[i]=[r,g,b];
    //rainColor[i]=random(['red','blue','green'])
  }
}


function draw() {

  //generate random value for the rain arrays
  for(i=0;i<rainNum;i++){
    rainX[i]=random(width);
    rainY[i]=random(height);
  }
  
  background(0,200,200);//red, green, blue
  // places the x and y position of the mouse on the canvas
  fill(0);
  stroke(255);
  strokeWeight(3);
  textSize(14);
  text(`x: ${mouseX}, y: ${mouseY}`, 20, 20);
  
  fill('#dbc27b');
  stroke('#8c7022');
  rect(0,300,width,100);//x, y, w, h

  //-------mountain
  triangle(50,300,199,177,400,300);
  triangle(150,333,390,187,500,333);

  //-----object
  push();
  stroke('#d4c396')
  fill(255);
  circle(129,173,150);
  pop();

  //-----ladder
  strokeWeight(10);
  line(244,355,244+100,355-250);
  line(244+60,355,244+60+100,355-250);
  line(263,302,327,301);
  line(285,253,346,253);
  line(304,207,363,207);
  line(322,163,382,165);

  //for loop for ladder
  for(i=0;i<4;i++){
    line(30,200+i*30,70,200+i*30);
  }

  //vertical line of ladder
  for(i=0;i<2;i++){
    line(30+i*40,170,30+i*40,320);
  }

  //-----human
  textSize(50);
  text("human🚶",50*sin(b*0.02)+200,306);
  x=x+1;
  b=b-0.4;
  print("x is "+x);
  
  //-----horse
  textSize(120);
  text("🐎",width-frameCount%(width+120),384);


  //----rain
  stroke('blue');
  strokeWeight(5);
  //using for loop to draw rain
  for(i=0;i<rainNum;i++){
    //stroke(random(rainColor))
    stroke(rainColor[i][0],rainColor[i][1],rainColor[i][2]);
  line(rainX[i],rainY[i],rainX[i],rainY[i]-10);
  }
}