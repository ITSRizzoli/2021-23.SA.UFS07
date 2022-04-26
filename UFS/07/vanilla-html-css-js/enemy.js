import { setCustomProperty, incrementCustomProperty, getCustomProperty } from "./updateCustomProperty.js"

export function enemy(name)
{
    this.name = name;

    const SPEED = .05
    const ENEMY_INTERVAL_MIN = 700
    const ENEMY_INTERVAL_MAX = 2000
    const worldElem = document.querySelector("[data-world]")

    let nextEnemyTime

    this.setup = function()
    {
        nextEnemyTime = ENEMY_INTERVAL_MIN
        document.querySelectorAll("[data-enemy]").forEach(enemy => {
            enemy.remove()
        })
    }

    this.update = function(delta, speedScale)
    {
        document.querySelectorAll("[data-enemy]").forEach(enemy => {
            incrementCustomProperty(enemy, "--left", delta * speedScale * SPEED * -1)
            
            if (getCustomProperty(enemy, "--left") <= -100) {
                enemy.remove
            }
        })

        if (nextEnemyTime <= 0) {
            createEnemy()
            nextEnemyTime = randomNumberBetween(ENEMY_INTERVAL_MIN, ENEMY_INTERVAL_MAX) / speedScale
        }
        nextEnemyTime -= delta
    }

    this.getRects = function()
    {
        return [...document.querySelectorAll("[data-enemy]")].map(enemy => {
            return enemy.getBoundingClientRect()
        })
    }

    function createEnemy()
    {
        const enemy = document.createElement("img")
        enemy.dataset.enemy = true
        enemy.src = "./assets/images/enemies/werewolf/werewolf.png"
        enemy.classList.add("world__enemy")
        setCustomProperty(enemy, "--left", 100)
        worldElem.append(enemy)
    }

    function randomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
