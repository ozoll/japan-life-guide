let r, g, b;
let lineWidth;

let cloudx = 100;
let cloudy = 100;
let flowerx=0;
let flowery=0;
//let blue = 189;

// 飘落花朵数组
let fallingFlowers = [];
let maxFlowers = 15; // 最大花朵数量

function setup() {
  // 获取header高度
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  
  // 创建画布，高度为窗口高度减去header高度
  let canvasHeight = windowHeight - headerHeight;
  let canvas = createCanvas(windowWidth, canvasHeight);
  canvas.parent('p5-canvas'); // 将画布添加到指定元素
  
  fill(100, 150, 255);
  
  // 初始化飘落花朵
  initializeFallingFlowers();
}

function draw() {
  // background(155, 186, mouseY);
 // background(150, 242, 250);

  
  //gradient sky
   
  let g = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
  g.addColorStop(0, "rgb(233, 241, 244)");
  g.addColorStop(0.5, "rgb(179, 216, 235)");
  g.addColorStop(1, "rgb(109, 169, 196)");
  drawingContext.fillStyle = g;
  rect(0, 0, width, height-200);


  // sun
  noStroke();
  fill(238, 49, 51);
  ellipse(width * 0.75, height * 0.22, width * 0.083, width * 0.083);

  //mountain shape
  fill(255);
  beginShape();

  // start redundant
  curveVertex(0, height / 2 + 150);

  curveVertex(0, height / 2 + 150);
  curveVertex(0, height / 2 + 150);
  curveVertex(width / 2 - 80, height / 2 - 150);
  curveVertex(width / 2, height / 2 - 180);
  curveVertex(width / 2 + 80, height / 2 - 150);
  curveVertex(width, height / 2 + 150);

  //end redundant
  curveVertex(width, height / 2 + 150);

  endShape(CLOSE);


 //mountain shape
  fill(24, 97, 161);
 // stroke(10);
  beginShape();

  // start redundant
  curveVertex(0, height / 2 + 150);
  
  curveVertex(0, height / 2 + 150);
  curveVertex(width / 2-180 , height / 2 - 50);

  curveVertex(width / 2 - 120, height / 2 - 50);
  curveVertex(width / 2 -60 , height / 2);
  curveVertex(width / 2 , height / 2 -50 );
  curveVertex(width / 2+60 , height / 2 );
  curveVertex(width / 2+120, height / 2 - 50);
  
  curveVertex(width / 2+180, height / 2 - 50);
  curveVertex(width, height / 2 + 150);

  //end redundant
  curveVertex(width, height / 2 + 150);

  endShape(CLOSE);

  fill(96, 152, 205);
  //line(0, 400, 800, 400);

  rect(0, height * 0.67, width, height * 0.33);
  
  // cloud
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 200, cloudy + 50)
  makeCloud(cloudx + 50, cloudy+150);
  cloudx+=0.3;
 // blue--;

  //-----------flowers start
  
 
  strokeWeight(3);
  stroke(150, 75, 0);
  line (width, height * 0.5, width * 0.875, height * 0.5);
  line (width * 0.875, height * 0.5, width * 0.75, height * 0.44);
  line (width, height * 0.39, width * 0.875, height * 0.44);
  line (width * 0.875, height * 0.44, width * 0.75, height * 0.33);
  line (width, height * 0.33, width * 0.94, height * 0.39);
  line (width * 0.94, height * 0.39, width * 0.81, height * 0.28);
   
  flowerdark(width * 0.95, height * 0.24);
  flowerdark(width * 0.95, height * 0.33);
  flowerdark(width * 0.825, height * 0.31);
  flowerdark(width * 0.775, height * 0.38);
  flowerdark(width * 0.9, height * 0.36);
  flowerdark(width * 0.925, height * 0.52);
  flowerdark(width * 0.775, height * 0.48);
  flowerdark(width * 0.7125, height * 0.46);
  flowerdark(width * 0.9875, height * 0.46);
  flowerdark(width * 0.9875, height * 0.29);
  
    
  flowerpink(width * 0.9375, height * 0.44);
  flowerpink(width * 0.875, height * 0.42);
  flowerpink(width * 0.75, height * 0.36);
  flowerpink(width * 0.85, height * 0.38);
  flowerpink(width * 0.875, height * 0.33);
  flowerpink(width, height * 0.33);
  flowerpink(width, height * 0.22);
  flowerpink(width, height * 0.44);
  flowerpink(width, height * 0.5);
  flowerpink(width * 0.8125, height * 0.44);
  flowerpink(width * 0.875, height * 0.5);
  
  flowerwhite(width * 0.75, height * 0.44);
  flowerwhite(width * 0.75, height * 0.33);
  flowerwhite(width * 0.8125, height * 0.29);
  flowerwhite(width * 0.8125, height * 0.39);
  flowerwhite(width * 0.8125, height * 0.47);
  flowerwhite(width * 0.9375, height * 0.49);
  flowerwhite(width * 0.9375, height * 0.38);
  flowerwhite(width * 0.875, height * 0.38);
  flowerwhite(width * 0.875, height * 0.52);
  flowerwhite(width, height * 0.52);
  flowerwhite(width, height * 0.41);
  flowerwhite(width, height * 0.3);
  flowerwhite(width, height * 0.24);
  
  //______________flowers end
  
  // 更新和绘制飘落的花朵
  updateFallingFlowers();
  drawFallingFlowers();
  
  water();
 // noLoop();
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  let cloudSize = width * 0.09; // 基础云朵大小适配屏幕宽度
  ellipse(cloudx, cloudy, cloudSize, cloudSize * 0.7);
  ellipse(cloudx + cloudSize * 0.14, cloudy + cloudSize * 0.14, cloudSize, cloudSize * 0.7);
  ellipse(cloudx - cloudSize * 0.29, cloudy + cloudSize * 0.14, cloudSize, cloudSize * 0.7);
  ellipse(cloudx - cloudSize * 0.57, cloudy + cloudSize * 0.14, cloudSize * 1.3, cloudSize * 0.43);
  ellipse(cloudx - cloudSize * 0.71, cloudy + cloudSize * 0.14, cloudSize * 1.3, cloudSize * 0.43);
  ellipse(cloudx + cloudSize * 0.57, cloudy + cloudSize * 0.14, cloudSize * 1.14, cloudSize * 0.57);
}

function flowerpink( flowerx,  flowery)
{
    
  push();
  fill(247, 161, 192);
  translate(flowerx, flowery);
 
 
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 8; r1++) {
    //if (frameCount <= 20) {
    //  ellipse(0, 5 + frameCount / 2, 5 + frameCount / 4, 10 + frameCount / 2);
   // }
   // if (frameCount > 20) {
      ellipse(0, 5, 15, 30);
   // }
    rotate(PI / 4);
  }
  pop();
  
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
 
}

function flowerwhite( flowerx,  flowery)
{
    
  push();
  fill(255, 219, 232);
  translate(flowerx, flowery);
  noStroke();
  for (var r1 = 0; r1 < 8; r1++) 
  {
    ellipse(0, 5, 15, 30);
    rotate(PI / 4);
  }
  pop();
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
}

function flowerdark( flowerx,  flowery)
{
    
  push();
  fill(235, 103, 151);
  translate(flowerx, flowery);
  noStroke();
  for (var r1 = 0; r1 < 8; r1++) 
  {
    ellipse(0, 5, 15, 30);
    rotate(PI / 4);
  }
  pop();
  fill(255);
  noStroke();
  ellipse(flowerx, flowery, 5, 5);  
}

function water()
{
  for (var i=0; i<30; i++)
    {
      fill(255);
      ellipse (random(width), random(height * 0.67, height), 9, 1);
    }
}

// 响应窗口大小变化
function windowResized() {
  // 获取header高度
  let header = document.querySelector('header');
  let headerHeight = header ? header.offsetHeight : 80;
  
  // 调整画布大小
  let canvasHeight = windowHeight - headerHeight;
  resizeCanvas(windowWidth, canvasHeight);
  
  // 重新初始化飘落花朵以适应新的屏幕尺寸
  initializeFallingFlowers();
}

// 初始化飘落花朵
function initializeFallingFlowers() {
  fallingFlowers = [];
  for (let i = 0; i < maxFlowers; i++) {
    fallingFlowers.push(createFallingFlower());
  }
}

// 创建单个飘落花朵
function createFallingFlower() {
  return {
    x: random(width),
    y: random(-height, 0), // 从屏幕上方开始
    size: random(8, 15),
    speed: random(1, 3),
    swaySpeed: random(0.02, 0.05),
    swayAmount: random(10, 30),
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.05, 0.05),
    color: random(['pink', 'white', 'dark']),
    opacity: random(180, 255)
  };
}

// 更新飘落花朵
function updateFallingFlowers() {
  for (let i = fallingFlowers.length - 1; i >= 0; i--) {
    let flower = fallingFlowers[i];
    
    // 更新位置
    flower.y += flower.speed;
    flower.x += sin(flower.y * flower.swaySpeed) * flower.swayAmount * 0.1;
    flower.rotation += flower.rotationSpeed;
    
    // 如果花朵落到屏幕底部，重新创建
    if (flower.y > height + 20) {
      fallingFlowers[i] = createFallingFlower();
    }
    
    // 如果花朵飘出屏幕左右边界，调整位置
    if (flower.x < -20) flower.x = width + 20;
    if (flower.x > width + 20) flower.x = -20;
  }
}

// 绘制飘落花朵
function drawFallingFlowers() {
  for (let flower of fallingFlowers) {
    push();
    translate(flower.x, flower.y);
    rotate(flower.rotation);
    
    // 根据颜色类型设置颜色
    if (flower.color === 'pink') {
      fill(247, 161, 192, flower.opacity);
    } else if (flower.color === 'white') {
      fill(255, 219, 232, flower.opacity);
    } else {
      fill(235, 103, 151, flower.opacity);
    }
    
    noStroke();
    
    // 绘制花瓣
    for (let i = 0; i < 5; i++) {
      ellipse(0, flower.size * 0.3, flower.size * 0.6, flower.size);
      rotate(TWO_PI / 5);
    }
    
    // 绘制花心
    fill(255, flower.opacity);
    ellipse(0, 0, flower.size * 0.3, flower.size * 0.3);
    
    pop();
  }
}