function CreateBubble() {
    let bubble = "";
    for (let index = 1; index < 91; index++) {
        bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#pbottom").innerHTML = bubble
}
function timer() {
    var time = 60;
    let timeVal = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#Timer").textContent = time;
        } else {
            clearInterval(timeVal)
            document.querySelector("#pbottom").innerHTML = `<h1 id="end">Game Over <br>Score = ${score}</h1>`

        }
    }, 1000);
}


function refreshHit() {
    let Hit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = Hit
}

var score = 0;
function updateScore() {
    score += 10;
    document.querySelector("#Score").textContent = score;
}

document.querySelector("#pbottom").addEventListener('click', (e) => {
    if (e.target.textContent == document.querySelector("#hitval").textContent) {
        updateScore();
        CreateBubble();
        refreshHit();
    }
}, false)
timer();
CreateBubble();
refreshHit();
