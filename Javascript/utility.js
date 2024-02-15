function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-400');
}

function getTextElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById (elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text= element.innerText;
    return text;
}


function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqurstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomAlphabetIndex = Math.random() * 25;
    const index = Math.round(randomAlphabetIndex);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-400');
}