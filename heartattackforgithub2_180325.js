function setup() {
  createCanvas(400,400);
  frameRate(6);

}

function draw() {
  noStroke();
  background(255);
  fill(255,167,167);
  arc(100,100,200,200,radians(180),radians(360));
  arc(300,100,200,200,radians(180),radians(360));
  rect(0,100,400,100);
  triangle(0,200,200,400,400,200);
  var i, j, r,k,s,v,t,y;
  i=random(400);
  j=random(400);
  r=random(400);
  k=random(400);
  s=random(400);
  v=random(400);
  t=random(400);
  y=random(400);
  
      {
      fill(random(255),random(255),random(255));
      arc(i+10,j+10,20,20,radians(180),radians(360));
      arc(i+30,j+10,20,20,radians(180),radians(360));
      rect(i,j+10,40,10);
      triangle(i,j+20,i+20,j+40,i+40,j+20);}
      { 
      fill(random(255),random(255),random(255));
      arc(r+10,k+10,20,20,radians(180),radians(360));
      arc(r+30,k+10,20,20,radians(180),radians(360));
      rect(r,k+10,40,10);
      triangle(r,k+20,r+20,k+40,r+40,k+20);}
      { 
      fill(random(255),random(255),random(255));
      arc(s+20,v+20,40,40,radians(180),radians(360));
      arc(s+60,v+20,40,40,radians(180),radians(360));
      rect(s+0,v+20,80,20);
      triangle(s,v+40,s+40,v+80,s+80,v+40);
      }
       
      fill(random(255),random(255),random(255));
      arc(t+15,y+15,30,30,radians(180),radians(360));
      arc(t+45,y+15,30,30,radians(180),radians(360));
      rect(t,y+15,60,15);
      triangle(t,y+30,t+30,y+60,t+60,y+30);
    
}