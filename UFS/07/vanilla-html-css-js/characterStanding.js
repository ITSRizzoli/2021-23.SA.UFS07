export function startScreenCharacter(name) {

    this.name = name;

    const characterElem = document.querySelector("[data-start-screen-character]")

    this.stand = function() {

        let i = 0;
        const timeInBetweenFrames = 250;

        const editImage = () => {

            characterElem.src = `./assets/images/characters/${name}/${name}-stationary-${i}.png`;

            if(i < 1) {
                window.setTimeout(editImage, timeInBetweenFrames)
                i++;
            } else {
                i = -1;
                window.setTimeout(editImage, timeInBetweenFrames)
                i++;
            }
        }
        
        editImage();
    }

}