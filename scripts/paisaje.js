const canvas = document.getElementById('paisaje');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 200;

const originalWidth = 800;
const originalHeight = 700;

const scaleX = canvas.width / originalWidth;   // 0.5
const scaleY = canvas.height / originalHeight; // ≈0.2857

let sunY = 100;
let direction = 1;

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();

  // Escalamos diferente en X y Y para llenar todo el canvas (sin mantener proporción)
  ctx.scale(scaleX, scaleY);

  // Sol con degradado
  const gradient = ctx.createRadialGradient(390, sunY, 10, 390, sunY, 60);
  gradient.addColorStop(0, "#FFF176");
  gradient.addColorStop(1, "#FBC02D");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(390, sunY, 60, 0, Math.PI * 2);
  ctx.fill();

  // Montaña
  ctx.beginPath();
  ctx.fillStyle = "#27AE60";
  ctx.moveTo(0, 250);
  ctx.quadraticCurveTo(80, 210, 180, 255);
  ctx.quadraticCurveTo(295, 220, 390, 320);
  ctx.quadraticCurveTo(490, 220, 640, 290);
  ctx.quadraticCurveTo(720, 220, 800, 270);
  ctx.lineTo(800, 700);
  ctx.lineTo(0, 700);
  ctx.fill();

  // Camino
  ctx.beginPath();
  ctx.fillStyle = "#515A55";
  ctx.moveTo(370, 299);
  ctx.bezierCurveTo(80, 400, 490, 380, 280, 430);
  ctx.bezierCurveTo(20, 470, 510, 625, 30, 700);
  ctx.lineTo(250, 700);
  ctx.bezierCurveTo(600, 625, 110, 500, 450, 430);
  ctx.bezierCurveTo(460, 350, 320, 390, 415, 300);
  ctx.fill();

  // Agua
  ctx.beginPath();
  ctx.fillStyle = "#C3F3EE";
  ctx.moveTo(800, 600);
  ctx.bezierCurveTo(700, 580, 600, 620, 500, 610);
  ctx.bezierCurveTo(400, 600, 300, 630, 200, 620);
  ctx.bezierCurveTo(100, 610, 50, 630, 0, 620);
  ctx.lineTo(0, 700);
  ctx.lineTo(800, 700);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function animate() {
  drawScene();

  sunY += direction * 0.5;

  if (sunY >= 300 || sunY <= 100) {
    direction *= -1;
  }

  requestAnimationFrame(animate);
}

animate();
