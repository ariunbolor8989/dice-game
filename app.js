//тоглох ээлжийг хадгалах хувьсагч
var activePlayer = 1;
//тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 25];
// идэюртэй тоглогчын цуглуулсан оноог хадгалах функц
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч 1-6гэсэн утгыг энэ хувьсагчид санамсаргүйгээр оноож өгнө
var dice = Math.floor(Math.random() * 6) + 1;

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";

window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

// window.document.querySelector("#score-1").innerHTML="<em>Yes!</em>";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//diceDom.style.left="50%";
//console.log(dice);

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
