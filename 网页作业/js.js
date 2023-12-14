
function haiCoder() {
	alert("Hello HaiCoder in main.js");
}
        const movelimit = document.getElementById("card");
        const card = document.getElementById("card");
        const cardshine = document.getElementById("card-shine");
        movelimit.addEventListener("mousemove", (e) => {
            window.requestAnimationFrame(function() {
                movecard(e.clientX, e.clientY);
            });
        });
        const speed = 39000;
        function movecard(x, y) {
            let box = card.getBoundingClientRect();
            let calcX = (y - box.y - (box.height / 2)) / speed;
            let calcY = (x - box.x - (box.width / 2)) / speed * -1;
            card.style.transform = "rotateX" + "(" + calcX + "deg" + ")" + "rotateY" + "(" + calcY + "deg" + ")";
        }
        movelimit.addEventListener("mouseleave", (e) => {
            window.requestAnimationFrame(function() {
                card.style.transform = "rotateX(0) rotateY(0)";
            });
        });
 