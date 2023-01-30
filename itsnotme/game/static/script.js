////reMaking my first game
let continueButt = document.querySelector("#continue");
let restart = document.querySelector("#newGame");
const suspects  = [document.querySelector("#suspect1"),
document.querySelector("#suspect2"),
document.querySelector("#suspect3")];
const thief = ["OMG we're going to jail", "Maybe him?", "You got me", "You are a good one"];
const judge = ["This is outrageous", "How dare you", "you have no second chance, to prison", 
"You will be prisoned for your false suspicion"];
const gladiator = ["False, False, False You are a dead man",
 "You are a dead, Fool, Man", "So you want to be excuted",
 "Bring me the Axe"];
var rans = [];
const options = [judge, gladiator, thief];
let levelBar = document.querySelector("#level");
let iqBar = document.querySelector("#IntelligenceBar");
let iq = 0;
let highScore = document.querySelector("#highScore");
const stages = ["Beginner", "Pink Panther level", "Spector", "Benoit Blanc Level", "Hercule Poirot Level", "Sherlock Holmes Level", "Jason Bourne Level", "James Bound Level"];
let showAnswer = document.querySelector("#caseSolution");
let savedData;
let show =  false;
if (localStorage.key(savedData)) {
				highScore.innerHTML = `High Score <br>${localStorage.getItem(savedData).split(",")[0]} / ${localStorage.getItem(savedData).split(",")[1]}`;
}
let dark = (butt) => {
				butt.disabled = true;
				butt.style = "border: 1px solid black; color: black;";
}
let light = (butt) => {
				butt.disabled = false;
				butt.style = "";
}
dark(continueButt);
continueButt.onclick = () => { for (i=0; i<=2; i++) { suspects[i].textContent = `Suspect ${i+1}`; suspects[i].style = ""; suspects[i].disabled = false; }
light(showAnswer); dark(continueButt); }
showAnswer.onclick = () => {
		 		show = true;
		 		suspects[0].click();
};
suspects.forEach((e, i, a) => {
				e.addEventListener("click", () => {
				rans = [];
				    while (rans.length !== 3) {
				       var random = Math.floor(Math.random() * 3);
				    				if (!rans.includes(random)) {
				    								rans.push(random);
				    				}
				    }
				    for (i=0; i<=2; i++) {
				    				a[i].textContent = options[rans[i]][Math.floor(Math.random() * 4)];
				    				a[i].disabled = true;
				    				if (options[2].includes(a[i].textContent)) {
				    								if (e === a[i] && !show) {
				    												e.style = "border: 10px solid green; color: green;";
				    												show = false;
				    												light(continueButt);
				    												dark(showAnswer);
				    												iq += 20;
				    												iqBar.textContent = `Intelligence ${iq}`;
				    												levelBar.textContent = `${stages[iq/20]}`;
				    												if (iq > highScore.textContent.split(" ")[2]) {
				    																highScore.innerHTML = `High Score <br>${iq} / ${levelBar.textContent}`;
				    																localStorage.setItem(savedData, [iq, levelBar.textContent]);
				    												}
				    								} else if (show) {
				    												a[i].style = "border: 1px solid orange; color: orange;";
				    												dark(showAnswer);
				    												dark(continueButt);
				    								} else {
				    												a[i].style = "border: 1px solid orange; color: orange;";
				    												e.style = "border: 10px solid red; color: red;";
				    												show = false;
				    												dark(showAnswer);
				    								}
				    				}
				    }
				   								});
});
