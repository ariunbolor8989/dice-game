//тоглох ээлжийг хадгалах хувьсагч
var activePlayer = 0;
//тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 25];
// идэюртэй тоглогчын цуглуулсан оноог хадгалах функц
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч 1-6гэсэн утгыг энэ хувьсагчид санамсаргүйгээр оноож өгнө

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";

window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

// window.document.querySelector("#score-1").innerHTML="<em>Yes!</em>";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//diceDom.style.left="50%";
//console.log(dice);

//shoo shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // if (activePlayer === 0) {
    //   document.querySelector(".player-1-panel").classList.remove("active");
    //   document.querySelector(".player-0-panel").classList.add("active");
    // } else {
    //   document.querySelector(".player-0-panel").classList.remove("active");
    //   document.querySelector(".player-1-panel").classList.add("active");
    // }

    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  diceDom.style.display = "none";
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-0-panel").classList.toggle("active");
});
