const canvas = document.getElementById("carroCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width + 100;
let angulo = 0;
const y = 130;

const SCALE = 0.5;

function dibujarCarro(posX, posY, anguloLlantas) {
  ctx.save();
  ctx.translate(posX, posY);
  ctx.lineJoin = "round";

  dibujarLlanta(80 * SCALE, 115 * SCALE, anguloLlantas);
  dibujarLlanta(310 * SCALE, 115 * SCALE, anguloLlantas);

  // Parte superior
  ctx.fillStyle = "#021CF9";
  ctx.beginPath();
  ctx.lineWidth = 1.5;
  ctx.moveTo(125 * SCALE, 25 * SCALE);
  ctx.lineTo(211 * SCALE, 25 * SCALE);
  ctx.quadraticCurveTo(215 * SCALE, 25 * SCALE, 211 * SCALE, 60 * SCALE);
  ctx.lineTo(212 * SCALE, 60 * SCALE);
  ctx.lineTo(90 * SCALE, 60 * SCALE);
  ctx.fill();

  // Parte media
  ctx.fillStyle = "#021CF9";
  ctx.beginPath();
  ctx.moveTo(91 * SCALE, 60 * SCALE);
  ctx.lineTo(38 * SCALE, 65 * SCALE);
  ctx.quadraticCurveTo(20 * SCALE, 90 * SCALE, 38 * SCALE, 115 * SCALE);
  ctx.lineTo(353 * SCALE, 115 * SCALE);
  ctx.fill();

  // Parte trasera
  ctx.fillStyle = "#021CF9";
  ctx.beginPath();
  ctx.moveTo(353 * SCALE, 115 * SCALE);
  ctx.lineTo(353 * SCALE, 60 * SCALE);
  ctx.lineTo(90 * SCALE, 60 * SCALE);
  ctx.fill();

  // Decoración roja
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(90 * SCALE, 75 * SCALE);
  ctx.quadraticCurveTo(332 * SCALE, 85 * SCALE, 340 * SCALE, 85 * SCALE);
  ctx.lineTo(353 * SCALE, 85 * SCALE);
  ctx.lineTo(353 * SCALE, 65 * SCALE);
  ctx.fill();

  // Ventanas
  ctx.fillStyle = "#03061A";
  ctx.fillRect(162 * SCALE, 32.5 * SCALE, 40 * SCALE, 25 * SCALE);
  ctx.beginPath();
  ctx.fillStyle = "#03061A";
  ctx.moveTo(135 * SCALE, 32.5 * SCALE);
  ctx.lineTo(110 * SCALE, 57.5 * SCALE);
  ctx.lineTo(157.5 * SCALE, 57.5 * SCALE);
  ctx.lineTo(157.5 * SCALE, 32.5 * SCALE);
  ctx.fill();

  // Luz
  ctx.fillStyle = "#FFFB13";
  ctx.beginPath();
  ctx.moveTo(34 * SCALE, 72.5 * SCALE);
  ctx.quadraticCurveTo(27.5 * SCALE, 85 * SCALE, 32.5 * SCALE, 85 * SCALE);
  ctx.lineTo(47.5 * SCALE, 85 * SCALE);
  ctx.lineTo(47.5 * SCALE, 72.5 * SCALE);
  ctx.fill();

  ctx.restore();
}

function dibujarLlanta(cx, cy, angulo) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angulo);

  // Círculo exterior
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(0, 0, 20 * SCALE, 0, 2 * Math.PI);
  ctx.lineWidth = 7.5 * SCALE;
  ctx.stroke();

  // Círculo interior
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(0, 0, 15 * SCALE, 0, 2 * Math.PI);
  ctx.fill();

  // Rayos
  ctx.strokeStyle = "#555";
  ctx.beginPath();
  ctx.moveTo(-10 * SCALE, 0);
  ctx.lineTo(10 * SCALE, 0);
  ctx.moveTo(0, -10 * SCALE);
  ctx.lineTo(0, 10 * SCALE);
  ctx.stroke();

  ctx.restore();
}

function dibujarFondo() {
  // Cielo
  ctx.fillStyle = "#B3E5FC";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Carretera
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 160, canvas.width, 40);

  // Línea discontinua
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(0, 180);
  ctx.lineTo(canvas.width, 180);
  ctx.stroke();
  ctx.setLineDash([]);
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarFondo();
  dibujarCarro(x, y, angulo);

  x -= 2;
  angulo -= 0.1;

  if (x < -150) {
    x = canvas.width + 50;
  }

  requestAnimationFrame(animar);
}

animar();
