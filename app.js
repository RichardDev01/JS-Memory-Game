function concatenateArrayToItself(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      arr.push(arr[i]);
    }
    return arr;
  }

function createBoard() {
    for (let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)

    }
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIDs[0]
    const optionTwoId = cardsChosenIDs[1]

    console.log("check for match")

    if (optionOneId == optionTwoId){
        alert("you clicked the same card :C")
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }

    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIDs = []

    const images = document.querySelectorAll('#grid img:not([src="images/blank.png"]):not([src="images/white.png"])');

    images.forEach(image => {
      image.setAttribute('src', 'images/blank.png')
    });

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "You have won!"
    }
}

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIDs.push(cardID)

    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}

const cardArray = [
    {
        name: 'apple_green',
        img: 'images/apple_green.png'
    },
    {
        name: 'blue_gem',
        img: 'images/blue_gem.png'
    },
    {
        name: 'heart_full',
        img: 'images/heart_full.png'
    },
    {
        name: 'key_A_violet',
        img: 'images/key_A_violet.png'
    },
    {
        name: 'potion_A_blue_full',
        img: 'images/potion_A_blue_full.png'
    },
    {
        name: 'star_with_face',
        img: 'images/star_with_face.png'
    }
]
concatenateArrayToItself(cardArray);

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs = []
const cardsWon = []

createBoard();