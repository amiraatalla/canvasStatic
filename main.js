var ctx;
window.onload = function () {
    var angle = Math.PI / 180;
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    var domates = 120; //red
    var patates = 180; //yellow
    var patlicane = 60; //blue

    sayi = 0;


    function eylem() {
        if (sayi >= 360) {
            clearInterval(saydir);

            ctx.beginPath();
            ctx.fillStyle ="black";
            ctx.arc(200,200.10,0,2*Math.PI);
            ctx.fill();
        }

        if (sayi <= domates) {
            ctx.fillStyle = "red";
        }
        else if (sayi > domates && sayi <= patates+domates) {
            ctx.fillStyle = "yellow";

        }
        else {
            ctx.fillStyle = "blue";
        }
        ctx.translate(200, 200);
        ctx.rotate(angle);
        ctx.translate(-200, -200);
        ctx.fillRect(200, 200, 2, 100);
        sayi += 1;

    }



    saydir = setInterval(eylem, 30);
}



