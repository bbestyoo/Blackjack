
let cards = []      //array of cards initially
let sum = 0         //sum of cards initially
let hasBlackjack = false        //assining a boolean function as false for manipulation later
let isAlive = false             //assining a boolean fn as false before the game starts

let messageEl = document.getElementById("main")         //bringing from html to js
console.log("messageEl")

let cardsEl = document.getElementById("cards-el")       // bringing from html to js for cards part

let sumEl = document.getElementById("sum-el")           // bringing from html to js for sum part


function randomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1 
    //creates a random num from 0-12 without decimal and adding 1 makes it 1-13//
    
    if(randomNum === 1){            //ace is considered 11
        return 11
    }
    else if(randomNum >10){         //J K and Q are considered 10
        return 10
    }
    else {
        return randomNum

    }
   

}


function start(){                 // declaring start fn separately because might be used for multi purpose later
    isAlive = true
    let firstCard = randomCard()        //choosing cards randomly from fn
    let secondCard = randomCard()       //same 
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
     renderGame()                       //calling another fn for further work

}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i =0; i < cards.length; i++){       //for loop that renders the cards from array
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum
   
    if (sum <= 20){
        message = "Do y wanna draw a new card"      //game goes on
    
    }
    else if (sum === 21){
        message = "Boom Blackjack"
        hasBlackjack = true              //this notifies y got a black jack 
    }
    else {
        message = "You're out of the game"
        isAlive = false                 //notifies out 
    }
    messageEl.textContent = message     //displays messageis screen prev it was internal only

}
    
function newcard(){                     //newcard fn

    let card = randomCard()             //choosing a card by calling a function
    sum += card
    cards.push(card)                    //adding new card to the original array of cards   
    renderGame()                        // renders game again and changes the display 


}




