const canvas = document.getElementById("ave");
    const ctx = canvas.getContext("2d");

    // Escalamos al 50% para que el dibujo grande se adapte al canvas 400x200
    ctx.scale(0.5, 0.5);

    let aveX = -100;
    let frame = 0;

    function dibujarFondo() {
      // Cielo
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, canvas.width * 2, canvas.height * 2);

      // Césped
      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(0, 300, canvas.width * 2, 100);

      // Sol
      ctx.beginPath();
      ctx.fillStyle = "#FFD700";
      ctx.arc(700, 80, 40, 0, 2 * Math.PI);
      ctx.fill();
    }

    function dibujarAve(x, frame) {
      ctx.save();
      ctx.translate(x, 0);

      const levantarPataIzq = Math.floor(frame / 15) % 2 === 0;
      const levantarPataDer = !levantarPataIzq;

      const ojoOffsetX = Math.sin(frame / 10) * 2;
      const ojoOffsetY = Math.cos(frame / 20) * 1;

      // Ala
      ctx.beginPath();
      ctx.fillStyle = "#A2A7A7";
      ctx.moveTo(380,160);
      ctx.lineTo(420,170); 
      ctx.lineTo(380,185);
      ctx.fill();

      // Parte inferior
      ctx.beginPath();
      ctx.fillStyle = "#FBFF00";
      ctx.moveTo(385,185);
      ctx.bezierCurveTo(340,230,365,370,200,340);
      ctx.quadraticCurveTo(170,300,50,360);
      ctx.lineTo(80,330);
      ctx.lineTo(30,360);
      ctx.lineTo(80,310);
      ctx.lineTo(12,355);
      ctx.lineTo(100,271);
      ctx.fill();

      // Parte superior
      ctx.beginPath();
      ctx.fillStyle = "#AED6F1";
      ctx.moveTo(280,150);
      ctx.quadraticCurveTo(330,100,380,160); 
      ctx.quadraticCurveTo(370,170,380,185)
      ctx.quadraticCurveTo(360,210,310,200); 
      ctx.quadraticCurveTo(330,230,310,230);
      ctx.lineTo(230,270);
      ctx.lineTo(250,240); 
      ctx.lineTo(210,285);
      ctx.lineTo(230,250);
      ctx.quadraticCurveTo(200,290,180,280);
      ctx.lineTo(208,255);
      ctx.quadraticCurveTo(140,300,90,265);
      ctx.quadraticCurveTo(200,190,265,190);
      ctx.quadraticCurveTo(265,170,280,150);
      ctx.fill();

      // Ojo grande
      ctx.beginPath(); 
      ctx.strokeStyle="black";
      ctx.arc(330,160,10,0,2* Math.PI);
      ctx.stroke();

      // Pupila (mueve los ojos)
      ctx.beginPath();
      ctx.fillStyle="black";
      ctx.arc(330 + ojoOffsetX,160 + ojoOffsetY,5,0,2*Math.PI);
      ctx.fill();

      // Pata izquierda
      ctx.beginPath();
      ctx.fillStyle="#DC7633";
      ctx.moveTo(200,340 - (levantarPataIzq ? 10 : 0));
      ctx.lineTo(210,360 - (levantarPataIzq ? 10 : 0));
      ctx.lineTo(193,360 - (levantarPataIzq ? 10 : 0));
      ctx.lineTo(220,365 - (levantarPataIzq ? 10 : 0));
      ctx.quadraticCurveTo(225,370 - (levantarPataIzq ? 10 : 0),260,360 - (levantarPataIzq ? 10 : 0));
      ctx.lineTo(220,358 - (levantarPataIzq ? 10 : 0));
      ctx.lineTo(215,342 - (levantarPataIzq ? 10 : 0));
      ctx.fill();

      // Pata derecha
      ctx.beginPath();
      ctx.fillStyle="#DC7633";
      ctx.moveTo(235,343 - (levantarPataDer ? 10 : 0));
      ctx.lineTo(250,370 - (levantarPataDer ? 10 : 0)); 
      ctx.lineTo(230,370 - (levantarPataDer ? 10 : 0));
      ctx.lineTo(265,375 - (levantarPataDer ? 10 : 0)); 
      ctx.lineTo(290,365 - (levantarPataDer ? 10 : 0));
      ctx.lineTo(260,365 - (levantarPataDer ? 10 : 0));
      ctx.lineTo(248,342 - (levantarPataDer ? 10 : 0));
      ctx.fill();

      ctx.restore();
    }

    function animar() {
      ctx.clearRect(0, 0, canvas.width * 2, canvas.height * 2);
      dibujarFondo();
      dibujarAve(aveX, frame);
      aveX += 2;
      frame++;

      if (aveX > canvas.width * 2) {
        aveX = -400;
      }

      requestAnimationFrame(animar);
    }

    animar();