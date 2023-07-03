function concatenateArrayToItself(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      arr.push(arr[i]);
    }
    return arr;
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

console.log(cardArray);

const gridDisplay = document.querySelector('#grid')

console.log(gridDisplay)

function createBoard() {
    for (let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card)
        console.log(card);
    }
}

createBoard();


