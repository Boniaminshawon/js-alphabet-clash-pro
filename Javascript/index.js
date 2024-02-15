// function play() {
//     // step 1; hide the home screen;
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // document.getElementById('home-screen').classList.add('hidden');

//     // step 2: show the play ground;
//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Enter') {
        gameOver();
    }

    // get the expected start;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // checked matched or not;
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('score');
        const newScore = currentScore + 1;
        setTextElementValueById('score', newScore);




        // const currentScoreElement = document.getElementById('score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1 ;
        // currentScoreElement.innerText=newScore;


        removeBackgroundColorById(expectedAlphabet);
        gameLoop();
    }
    else {
        const currentLife = getTextElementValueById('life');
        const newLife = currentLife - 1;
        setTextElementValueById('life', newLife);
        // ----------------------------------------------------------------
        // const currentLifeElement = document.getElementById('life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife-1;
        // currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver()
        }

    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)




function gameLoop() {
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}



function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');



    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);


    gameLoop();

}


function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight;
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}

