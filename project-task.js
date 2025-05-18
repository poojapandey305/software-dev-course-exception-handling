/* for solution please check bottom of the page..
Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records. The program is meant to:
  
  Allow users to enter an animal type and adoption fee.
  
  Add the animal and fee to a list.
  
  Retrieve the adoption fee for a specific animal when requested.

However, the initial developer left the program in a buggy state, with missing exception-handling logic
and some errors in the implementation. Your job is to fix it!



Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
*/


// Will need to import / install readline-sync if not done so already within project dir: npm install readline-sync 
/*const readlineSync = require('readline-sync');

// Initial Code with Bugs (modified to use readline-sync)
let animals = [];
let fees = [];
function addAnimal(name, fee) {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push(name);
    fees.push(fee);
}
function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}
// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }
    if (action === "add") {
        let animal = readlineSync.question("Enter the animal's name: ");
        let fee = Number(readlineSync.question("Enter the adoption fee: "));
        addAnimal(animal, fee);
        console.log(`${animal} added with a fee of $${fee}.`);
    } else if (action === "fee") {
        let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
        console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);
    } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
}



/*
Problems to Solve

Invalid Input Errors:
  What happens if the user provides a negative adoption fee or leaves the name blank?

  What happens if the user tries to find the fee for an animal that hasn’t been added?

Code Flow Problems:
  What happens if the program throws an exception? Does the rest of the code continue running?

Structured Exception Handling:
  Add try/catch blocks to handle the above errors gracefully.
*/
////////////////////////////////////////////////////////////////////////////

const readlineSync = require('readline-sync');

let animals1 = [];
let fees1 = [];

// Function to add animal and fee
function addAnimal(name, fee) {
  if (!name || name.trim() === '' || isNaN(fee) || fee < 0) {
    throw new Error(" Invalid input: name must not be blank, and fee must be a non-negative number.");
  }
  animals.push(name);
  fees.push(fee);
}

// Function to get adoption fee
function getAdoptionFee(animalName) {
  let index = animals.indexOf(animalName);
  if (index === -1) {
    throw new Error(" Animal not found in records!");
  }
  return fees[index];
}

/*
 Problems to Solve
----------------------
Invalid Input Errors:
*/

// Test 1: Blank name or negative fee
try {
  addAnimal("", -10); // This will throw
} catch (error) {
  console.log("Test 1 - Blank name & negative fee:", error.message);
}

//  Test 2: Valid animal and fee
try {
  addAnimal("dog", 50);
  console.log("Test 2 - Added dog successfully.");
} catch (error) {
  console.log("Test 2 - Error:", error.message);
}

//  Test 3: Lookup fee for an animal not added
try {
  console.log("Test 3 - Fee for cat:", getAdoptionFee("cat")); // Not in the list
} catch (error) {
  console.log("Test 3 - Error:", error.message);
}

/*
🔁 Code Flow Problems:
----------------------
What happens when exception occurs? Does rest of code run?
*/

//Yes! The program continues —proving through using inpt

/*
 Structured Exception Handling:
-------------------------------
Add try/catch blocks to prevent crashing.
*/try {
    addAnimal("pigeon", -5); // Invalid fee
} catch (error) {
  console.log("Test 4 - Exception caught:", error.message);
}

console.log("Test 4 - After exception, adding valid animal:");
try {
  addAnimal("pigeon", 25); // Now valid
  console.log("Added pigeon successfully.");
} catch (error) {
  console.log("Still an error:", error.message);
}


// Manually asking user input to show it works too
try {
  let name = readlineSync.question("Enter an animal name to add: ");
  let fee = Number(readlineSync.question("Enter the adoption fee: "));
  addAnimal(name, fee);
  console.log(`${name} added with a fee of $${fee}.`);

  let search = readlineSync.question("Enter animal name to get its fee: ");
  let foundFee = getAdoptionFee(search);
  console.log(`${search}'s fee is $${foundFee}.`);

} catch (error) {
  console.log("User input section error:", error.message);
}