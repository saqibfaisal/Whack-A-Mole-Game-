const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector('.score')
const mole = document.querySelectorAll(".mole")
let lastHole;
let timeUp = false;
let score = 0;
function randomTime(min,max) {
    return Math.round(Math.random()*(max-min)-min)
}
function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        // console.log('Ah nah thats the same one bud');
        return randomHole(holes);
      } 
    lastHole=hole;
    return hole;
}
function foo(){
    const time = randomTime(200,1500)
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) foo()
    },time)
}

function startGame() {
    scoreBoard.textContent=0;
    timeUp = false ;
    score =0;
    foo();
    setTimeout(()=> timeUp = true,20000)
}
function bonk(e){
    if(!e.isTrust);
    score++;
    this.classList.remove('up')
    scoreBoard.textContent= score;
}
mole.forEach(mole => mole.addEventListener('click',bonk) )