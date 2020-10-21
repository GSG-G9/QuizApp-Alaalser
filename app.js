let questions =[
  {question:"Who is the main character of Harry Potter? ",answers:["Harry Potter","Hermione Granger","Voldemort","Ron Weasley"],correctAnswer:"Harry Potter"},
  {question:"What color is the sky? ",answers:["green","yellow","red","blue"],correctAnswer:"blue"},
  {question:"Which season is the hottest ",answers:["Winter","Summer","Spring","Autumn"],correctAnswer:"Summer"},
  {question:"The UK is made up of the following countries: England, Ireland, Wales, and",answers:["France","Hungary","Scotland","Austria"],correctAnswer:"Scotland"},
  {question:"What animal is associated with ancient Egypt?",answers:["lion","cat","hummingbird","rabbit"],correctAnswer:"cat"},
  {question:"What do you call a baby goat?",answers:["kid","goatee","childe","baby goat"],correctAnswer:"kid"},
  {question:"What is the most populous city in Canada? ",answers:["Toronto","Ontario","Quebec","Vancouver"],correctAnswer:"Toronto"},
  {question:"What is the most populous city in the world?",answers:["Gaza strip","Gaza strip","Gaza strip","Gaza strip"],correctAnswer:"Gaza strip"},
  {question:"What is the longest running TV show?",answers:["The Simpsons","Law & Order","Grey’s Anatomy","Criminal Minds"],correctAnswer:"The Simpsons"},
  {question:"What is the complementary color of green?",answers:["blue","red","yellow","purple"],correctAnswer:"red"}
];
let leaderboard = [
  {name:"ِAlaa",degree : 0}
]
localStorage.setItem("questions",JSON.stringify(questions));
localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
let myData = JSON.parse(localStorage.getItem('questions'));
let myDoard= JSON.parse(localStorage.getItem('leaderboard'));
let startCont =document.getElementById("startCont"),
  questionCont =document.getElementById("questionCont"),
  endResultCont =document.getElementById("endResultCont"),
  leaderboardCont =document.getElementById("leaderboardCont");

let cor ="";
let numSolve =1;
let result=0;

let newName =""

function SearchName(arr,Name){
  return arr.findIndex((x=>x.name===newName))
}

function showleaderboard(arr,container){
  let theLeaderboard=`<button id="repeatGame2">repeat Game</button>`;
  let sortingLeaderboard =arr.sort((a,b)=>b.degree -a.degree)
  sortingLeaderboard.forEach(x => {
      theLeaderboard += `<div>
                              <h3>${x.name}</h3>
                              <h3>${x.degree}</h3>
                          </div>`
  });
  
  container.innerHTML =theLeaderboard;
  document.getElementById("repeatGame2").onclick=()=>{
  numSolve =1;
  result=0;
  leaderboardCont.style.display ="none"
  startCont.style.display="flex"
}
}