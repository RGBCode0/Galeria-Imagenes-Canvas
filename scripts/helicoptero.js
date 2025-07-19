const canvas = document.getElementById("helicoptero");
const ctx = canvas.getContext("2d");

// Supongamos canvas.width = 400, canvas.height = 300
// El dibujo original está pensado para algo así como 800x600, escalamos a la mitad
ctx.scale(0.5, 0.5);

let helicopterX = canvas.width * 2 + 30; // como el canvas se escala, multiplicamos por 2 para la posición inicial

let rearRotorAngle = 0;
let antennaAngle = 0;
let cloudOffset = 0;

function drawSky() {
  ctx.fillStyle = "#87CEEB"; 
  ctx.fillRect(0, 0, canvas.width * 2, canvas.height * 2);

  ctx.fillStyle = "white";
  drawCloud(100 + cloudOffset, 80);
  drawCloud(300 + cloudOffset * 0.5, 60);
  drawCloud(600 + cloudOffset * 0.8, 100);
}

function drawCloud(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 20, y - 10, 25, 0, Math.PI * 2);
  ctx.arc(x + 40, y, 20, 0, Math.PI * 2);
  ctx.fill();
}

function drawHelicopter(x) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.ellipse(x + 110, 350, 80, 15, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#3498DB";
  ctx.moveTo(x, 260);
  ctx.quadraticCurveTo(x + 50, 180, x + 180, 200);
  ctx.quadraticCurveTo(x + 200, 220, x + 180, 260);
  ctx.lineTo(x, 260);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#2E86C1";
  ctx.moveTo(x, 260);
  ctx.quadraticCurveTo(x + 150, 340, x + 180, 260);
  ctx.lineTo(x, 260);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#3498DB";
  ctx.moveTo(x + 180, 230);
  ctx.lineTo(x + 380, 230);
  ctx.lineTo(x + 380, 250);
  ctx.lineTo(x + 180, 250);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "#21618C";
  ctx.lineWidth = 3;
  ctx.moveTo(x + 190, 240);
  ctx.lineTo(x + 370, 240);
  ctx.stroke();

  ctx.fillStyle = "#AEB6BF";
  ctx.beginPath();
  ctx.moveTo(x + 63, 210);
  ctx.lineTo(x + 100, 210);
  ctx.quadraticCurveTo(x + 85, 230, x + 85, 260);
  ctx.lineTo(x + 25, 260);
  ctx.quadraticCurveTo(x + 45, 220, x + 63, 210);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + 105, 210);
  ctx.lineTo(x + 155, 210);
  ctx.quadraticCurveTo(x + 160, 230, x + 140, 260);
  ctx.lineTo(x + 90, 260);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#AED6F1";
  ctx.moveTo(x + 20, 260);
  ctx.quadraticCurveTo(x + 45, 200, x + 100, 210);
  ctx.lineTo(x + 63, 210);
  ctx.quadraticCurveTo(x + 45, 220, x + 25, 260);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.fillRect(x + 153, 150, 10, 48);
  ctx.fillRect(x + 15, 155, 300, 5);

  ctx.beginPath();
  ctx.strokeStyle = "rgba(0,0,0,0.3)";
  ctx.lineWidth = 2;
  ctx.moveTo(x + 165, 160);
  ctx.lineTo(x + 315, 130); 
  ctx.moveTo(x + 165, 160);
  ctx.lineTo(x + 15, 130);
  ctx.stroke();

  ctx.save();
  ctx.translate(x + 380, 240);
  ctx.rotate(rearRotorAngle);
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(-15, -2, 30, 4);
  ctx.fillRect(-2, -15, 4, 30);
  ctx.restore();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x + 80, 305);
  ctx.lineTo(x + 90, 330); 
  ctx.lineTo(x + 100, 330);
  ctx.lineTo(x + 90, 305);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + 130, 305); 
  ctx.lineTo(x + 140, 330);
  ctx.lineTo(x + 150, 330);
  ctx.lineTo(x + 140, 305);
  ctx.fill();

  ctx.fillRect(x + 30, 330, 170, 5);

  ctx.beginPath();
  ctx.fillStyle = "#1B4F72";
  ctx.moveTo(x + 80, 305);
  ctx.lineTo(x + 90, 290);
  ctx.lineTo(x + 95, 290);
  ctx.lineTo(x + 85, 305);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + 130, 305);
  ctx.lineTo(x + 140, 290);
  ctx.lineTo(x + 145, 290);
  ctx.lineTo(x + 135, 305);
  ctx.fill();

  ctx.fillStyle = "#1F618D";
  ctx.fillRect(x + 110, 275, 18, 10);

  ctx.save();
  ctx.translate(x + 155, 150);
  ctx.rotate(antennaAngle);
  ctx.beginPath();
  ctx.strokeStyle = "#17202A";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -30);
  ctx.stroke();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width * 2, canvas.height * 2);
  drawSky();
  drawHelicopter(helicopterX);

  helicopterX -= 2;
  if (helicopterX < -400) helicopterX = canvas.width * 2 + 100;

  cloudOffset -= 0.2;
  rearRotorAngle += 0.3;
  antennaAngle += 0.05;

  requestAnimationFrame(animate);
}

animate();
