// Question 1 
// Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions:
//   The opening brackets: 
// - Must match with the corresponding closing brackets of the same type 
// - Must be closed in the correct order 
// - Should have a corresponding opening bracket of the same type 

let isValid = function(s) {
    const stack = [];
    const parens = {'(': ')', '{': '}', '[': ']'};      //key-value pairs 

    for (let i = 0; i < s.length; i ++) { 
        const char = s[i];

        // If it's an opening bracket 
        if (parens[char]) { 
            stack.push(char);  

        //If it's a clsoing bracket 
        } else {
            const lastOpened = stack.pop();  

            //If mismatched brackets
            if (parens[lastOpened] !== char) {
                return false;
            }
        }
    }
    //check if all brackets are closed 
    return stack.length === 0; 
};

const inputString = "{}[]()";
console.log(isValid(inputString)); 

// Question 2
// There are n people in a line waiting to purchase tickets, 
// with the 0th person at the front and the (n - 1)th person at the back. 
// You are given a 0-indexed integer array of tickets of length n, 
// where tickets[I] represents the number of tickets that the ith person wishes to purchase. 
// Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a 
// time and must return to the end of the line (which happens instantly) to purchase additional tickets.
// If a person has no more tickets to buy, he or she will leave the line. 
// Return the time spent for the individual at position k (0-indexed) to 
// finish buying tickets. 

//tickets --> # of tickest
//k ---> index of person 

let timeSpentToBuy = function (tickets, k) {
    let seconds = 0;

    while (tickets[k] > 0) {                           //there are still tickets to buy 
        for (let i = 0; i < tickets.length; i++) {    //iterate through each person at each index
            if (tickets[k] === 0) break               //no more tickets to buy 
            if (tickets[i] > 0) {                     //if person has tickets to buy 
                tickets[i]--                                //decrement the number of tickets available 
                seconds++                                   // and increase the time spent 
            }
        }
    }
	
    return seconds
};

const tickets = [2, 3, 1, 4];   //# of tickets each person wants to buy  
const k = 2;                    //person at index 2 
console.log(`Time spent for person at position ${k}: ${timeSpentToBuy(tickets, k)} seconds`);


// Question 3

// You are given an array heights representing the heights of students in a 
// class. The students are standing in a line, and their heights are listed 
// in the order they appear from left to right. The school wants to arrange 
// the students in a non-decreasing order by their heights. However, when they 
// rearrange the students, a few may end up in different positions from their original positions.

// You need to write a function heightChecker(heights) that determines the 
// minimum number of students who are not standing in the correct positions 
// after the rearrangement. Implement the function heightChecker and return the 
// minimum number of students who are not positioned correctly.

// Example: 

// Input: heights = [1,1,4,2,1,3]
// Output: 3



function heightChecker(heights) {
    incorrectPosition = 0 
    const sortedHeights = ([...heights].sort((a,b) => a - b ))   //sort heights

                                                                    
    for (let i = 0; i < heights.length; i ++) {                  //iterate through each height in the array
        if (heights[i] !== sortedHeights[i]){                    //if original array height is not equal to sorted height
            incorrectPosition++                                  //increment incorrectPosition
        }

        }
       return incorrectPosition
    }

const heights = [1,1,4,2,1,3]
const result = heightChecker(heights)
console.log(result)
    



// Question 4
// You are given a deck of integer arrays. There is a deck of cards with each card having 
// a unique integer, and the integer on the ith card is deck[i].  
// You can arrange the deck in any order; all cards in one deck are initially face-down (unrevealed).  
// Repeat the following steps until all cards are revealed.  
// Step 1: Take out the top card from the deck and reveal it. 
// Step 2: If there are still cards in the deck, you should place the next top card at the bottom of the deck. 
// Step 3: If any cards remain unseen, return to step 1. Otherwise, proceed to the end. 
// Step 4: Return a deck order that reveals the cards in increasing order. 


function deck(integers) {
    const revealedCards = [];

    // Iterate through each deck
    for (let i = 0; i < integers.length; i++) {
        // Check if the deck is not empty before attempting to reveal a card
        if (integers[i].length > 0) {
            // Take out the top card and reveal it
            revealedCards.push(integers[i][0]);

            // If there are still cards, place the next top card on the bottom of the deck
            if (integers[i].length > 1) {
                integers[i] = integers[i].slice(1);
            }
        }
    }

    // Return the revealed cards sorted in increasing order
    return revealedCards.sort((a, b) => a - b);
}


const integerDeck = [17, 13, 11, 2, 3, 5, 7];
const answer = deck(integerDeck);
console.log(answer);



