import { incrementCustomProperty, setCustomProperty, getCustomProperty } from "./updateCustomProperty.js"

export function character(name)
{
    this.name = name;

    const characterElem = document.querySelector("[data-character]")
    const JUMP_SPEED = .45
    const GRAVITY = 0.0015
    const CHARACTER_FRAME_COUNT = 6
    const FRAME_TIME = 100

    let isJumping
    let characterFrame
    let currentFrameTime
    let yVelocity

    this.setup = function() {
        isJumping = false
        characterFrame = 0
        currentFrameTime = 0
        yVelocity = 0

        setCustomProperty(characterElem, "--bottom", 0)
        document.removeEventListener("keydown", onJump)
        document.addEventListener("keydown", onJump)
    }
    
    this.update = function(delta, speedScale)
    {
        handleRun(delta, speedScale)
        handleJump(delta)
    }

    this.getRect = function()
    {
        return characterElem.getBoundingClientRect() 
    }

    this.setLose = function()
    {
        characterElem.src = `./assets/images/characters/${name}/${name}-death.png`
    }

    function handleRun(delta, speedScale)
    {
        if (isJumping)
        {
            characterElem.src = `./assets/images/characters/${name}/${name}-jump.png`
            return
        }

        if (currentFrameTime >= FRAME_TIME) {
            characterFrame = (characterFrame + 1) % CHARACTER_FRAME_COUNT
            characterElem.src = `./assets/images/characters/${name}/${name}-run-${characterFrame}.png`
            currentFrameTime -= FRAME_TIME
        }

        currentFrameTime += delta * speedScale 
    } 

    function handleJump(delta) {
        if (!isJumping) return

        incrementCustomProperty(characterElem, "--bottom", yVelocity * delta)

        if (getCustomProperty(characterElem, "--bottom") <= 0){
            setCustomProperty(characterElem, "--bottom", 0)
            isJumping = false
        }

        yVelocity -= GRAVITY * delta
    }

    function onJump(e) {
        if (e.code !== "Space" || isJumping) return

        yVelocity = JUMP_SPEED
        isJumping = true
    }

}