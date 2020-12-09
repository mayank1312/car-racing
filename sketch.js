var car,wall,weight,wall2,wall3,wall4,car2,car3,car4,banner1,banner2,banner3,banner4,deformation,deformation2,
deformation3,deformation4,weight2,weight3,weight4;




function setup() {
  createCanvas(1600,400);
  
 
 
 car= createSprite(50,50, 50, 10);
 car2= createSprite(50,150, 50, 10);
 car3= createSprite(50,250, 50, 10);
 car4= createSprite(50,350, 50, 10);
 car.velocityX=random(60,80);
 car2.velocityX=random(40,70);
 
 car3.velocityX=random(50,60);
 
 car4.velocityX=random(20,40);
 
 weight=random(1000,1500);
 weight2=random(2000,2500);
 weight3=random(2550,3000);
 weight4=random(1800,1900);
 wall=createSprite(800,100,1600,10);
 wall2=createSprite(800,200,1600,10);
 wall3=createSprite(800,300,1600,10);
 wall4=createSprite(800,400,1600,10);
 banner1=createSprite(1500,50,20,50);
 banner2=createSprite(1500,150,20,50);
 banner3=createSprite(1500,250,20,50);

 banner4=createSprite(1500,350,20,50);
}

function draw() {
  background(0);  
  drawSprites();
  if(banner1.x-car.x < car.width/2+banner1.width/2){
car.velocityX=0;
deformation=(0.5*weight*car.velocityX*car.velocityX)/22500;
if(deformation>100){
  car.shapeColor=color(0,255,0);
}
if(deformation<100 && deformation>180){
  car.shapeColor=color(230,230,0);
}
if(deformation<180){
  car.shapeColor=color(225,0,0);
}
  }
if(banner2.x-car2.x < car2.width/2+banner2.width/2){
 car2.velocityX=0;
 deformation2=(0.5*weight2*car2.velocityX*car2.velocityX)/22500;
 if(deformation2 > 100){
 car2.shapeColor=color(0,255,0);
  }
if(deformation2 < 100 && deformation2 > 180){
 car2.shapeColor=color(230,230,0);
}
if(deformation2 < 180){
 car2.shapeColor=color(225,0,0);
}
if(banner3.x-car3.x < car3.width/2+banner3.width/2){
  car3.velocityX=0;
  deformation3=(0.5*weight3*car3.velocityX*car3.velocityX)/22500;
if(deformation3>100){
  car.shapeColor=color(0,255,0);
  }
      if(deformation3 < 100 && deformation3 > 180){
        car3.shapeColor=color(230,230,0);
      }
      if(deformation3 < 180){
        car3.shapeColor=color(225,0,0);
      }
        }
        if(banner4.x-car4.x < car4.width/2+banner4.width/2){
          car4.velocityX=0;
          deformation4=(0.5*weight4*car4.velocityX*car4.velocityX)/22500;
          if(deformation4 > 100){
            car4.shapeColor=color(0,255,0);
          }
          if(deformation4 < 100 && deformation4 > 180){
            car4.shapeColor=color(230,230,0);
          }
          if(deformation4 < 180){
            car4.shapeColor=color(225,0,0);
          }
            }
      }
}