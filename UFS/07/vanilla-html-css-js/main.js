import { ground } from "./ground.js";
import { startScreenCharacter } from "./characterStanding.js";
import { character } from "./character.js";
import { enemy } from "./enemy.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.00001;
const SOME_SPACE = 50

const worldElem = document.querySelector("[data-world]");
const scoreElem = document.querySelector("[data-score]");
const startScreenElem = document.querySelector("[data-start-screen]");
const startScreenCharacterElement = document.querySelector("[data-start-screen-character]");
const pauseScreenElem = document.querySelector("[data-pause-screen]")
const characterName = location.search.substring(1);

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    handlePause()
  }
})

document.addEventListener("keydown", handleStart, { once: true })

let lastTime
let speedScale
let score

var ssc = new startScreenCharacter(characterName)
var c = new character(characterName);
var g = new ground();
var e = new enemy();

ssc.stand();

function update(time)
{
    if (lastTime == null)
    {
      lastTime = time
      window.requestAnimationFrame(update)
      return
    }
    const delta = time - lastTime

    g.update(delta, speedScale)
    c.update(delta, speedScale)
    e.update(delta, speedScale)

    updateSpeedScale(delta)
    updateScore(delta)

    if (checkLose()) return handleLose()

    lastTime = time;
    window.requestAnimationFrame(update);
}

function checkLose() {
  const characterRect = c.getRect()
  return e.getRects().some(rect => isCollision(rect, characterRect))
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom - SOME_SPACE  &&
    rect1.right > rect2.left&&
    rect1.bottom > rect2.top - SOME_SPACE 
  )
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta) {
  score += delta * 0.01
  scoreElem.textContent = Math.floor(score)
} 

function handleStart() {
  lastTime = null
  speedScale = 1
  score = 0

  g.setup()
  c.setup()
  e.setup()

  startScreenElem.classList.add("hide")
  startScreenCharacterElement.remove()
  window.requestAnimationFrame(update)
}

function handleLose() {
  c.setLose()
  setTimeout(() => {
    document.addEventListener("keydown", handleStart, { once:true } )
    startScreenElem.classList.remove("hide")
  }, 500)
}

function handlePause() {
  
  console.log("Paused");

  if (pauseScreenElem.classList.contains("hide"))
  {
    pauseScreenElem.classList.remove("hide")
  }
  else
  {
    pauseScreenElem.classList.add("hide")
  }
}

function setPixelToWorldScale() {
  let worldToPixelScale;

  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}