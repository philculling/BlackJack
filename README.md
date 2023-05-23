# BlackJack
Completing exercise from Bootcamp using JavaScript to create BlackJack game

In our Bootcamp we were given the instructions below.
This was an exercise to be completed in our own time.
I decided to finish this 7 weeks after the Bootcamp had finished, to refresh and keep alive my skills in JavaScript.
I completed this without reference to the given solution, which was very different; in fact, I believe my user interactions are much clearer in terms of the messages that users see in both the confirms and the console logs.

## Instructions

* Create a simple blackjack game with the following properties:

  * Deals the player a random number between 4 and 21 inclusive.
  
    * If the player has 21 they win!
   
  * Deals a random number between 2 and 11 inclusive to the dealer.
   
  * If the player hits, add a number between 2 and 11.
   
    * If the player goes over 21 they lose.
     
    * If the player has 21, stay for them.
     
    * Repeat until they choose to stay or they bust
     
  * Once player stays add a number between 2 and 11 to the dealer's hand.
     
    * If dealer number is less than 17 add another number
     
    * Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
    * If dealer goes over 21 they lose.
  
  * Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

* Pseudocode the outline of your game before you write any code.

* Create functions if you begin to repeat yourself.

### Notes

This is a difficult challenge. How you build this game is up to you. The goal here is to demonstrate when to use functions. If at any point you begin to type the same line of code, or if your code becomes unreadable, consider a function!

## Hints

  * Be sure that your random number generator is inclusive of the outer numbers.
   
  * We've used a lot of `for` loops. Don't forget that there are other types of loops.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.