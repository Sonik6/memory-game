document.addEventListener('DOMContentLoaded', function() {
  
  //create array with board elements
  const cardArray = [
    {
      name: 'clubs',
      img: 'images/icons8-ace-of-clubs-100.png'
    },
    {
      name: 'clubs',
      img: 'images/icons8-ace-of-clubs-100.png'
    },
    {
      name: 'diamonds',
      img: 'images/icons8-ace-of-diamonds-100.png'
    },
    {
      name: 'diamonds',
      img: 'images/icons8-ace-of-diamonds-100.png'
    },
    {
      name: 'hearts',
      img: 'images/icons8-ace-of-hearts-100.png'
    },
    {
      name: 'hearts',
      img: 'images/icons8-ace-of-hearts-100.png'
    },
    {
      name: 'spades',
      img: 'images/icons8-ace-of-spades-100.png'
    },
    {
      name: 'spades',
      img: 'images/icons8-ace-of-spades-100.png'
    },
    {
      name: 'chip',
      img: 'images/icons8-chip-100.png'
    },
    {
      name: 'chip',
      img: 'images/icons8-chip-100.png'
    },
    {
      name: 'clubs2',
      img: 'images/icons8-clubs-100.png'
    },
    {
      name: 'clubs2',
      img: 'images/icons8-clubs-100.png'
    },
    {
      name: 'favorite',
      img: 'images/icons8-favorite-100.png'
    },
    {
      name: 'favorite',
      img: 'images/icons8-favorite-100.png'
    },
    {
      name: 'dice',
      img: 'images/icons8-dice-100.png'
    },
    {
      name: 'dice',
      img: 'images/icons8-dice-100.png'
    }
    
  ];

  cardArray.sort(() => 0.5 - Math.random());


  const game = document.querySelector('#game');
  var cardsChosen = [];
  var cardsChosenId = [];
  var counter = 0;
  var flipped = 0;
  var counterDisplay = document.querySelector('.moves');

  //function to create board
  function createGame(){
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src', 'images/icons8-tarot-cards-100.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      game.appendChild(card);
    }
  }

  //function to check for matches
  function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
   
    optionOneId.removeEventListener('click', flipCard);
    optionTwoId.removeEventListener('click', flipCard);

    if(cardsChosen[0] === cardsChosen[1]){
      document.querySelector('p').innerHTML= 'You found a match!';
      counterDisplay.innerHTML = 'Moves: ' + ++counter;
      flipped += 1;
      if (flipped >= 8) {
        document.querySelector('.winWindow').style.display = ('block');
      };

    } else {
      optionOneId.addEventListener('click', flipCard);
      optionTwoId.addEventListener('click', flipCard);
      
      cards[optionOneId].setAttribute('src', 'images/icons8-tarot-cards-100.png');
      cards[optionTwoId].setAttribute('src', 'images/icons8-tarot-cards-100.png');

      document.querySelector('p').innerHTML= ' ';
      counterDisplay.innerHTML = 'Moves: ' + ++counter;
    }
    cardsChosen = [];
    cardsChosenId = [];
  }


  //function to flip cards
  function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500);
    }
  }

  //funciton to restart game
  function resetGame(){
    document.location.reload(true);
    }


  document.querySelector('.start').addEventListener('click', function(){
    var gameDiv = document.createElement('div');
  gameDiv.setAttribute('id', 'game');
  document.querySelector('body').appendChild(gameDiv);
  document.querySelector('p').innerHTML= 'Click on a card to start!';
  document.querySelector('.start').style.display = 'none';
    createGame();
    }
  );

  document.querySelector('.reset').addEventListener('click', function(){
    resetGame();
    }
  );

});