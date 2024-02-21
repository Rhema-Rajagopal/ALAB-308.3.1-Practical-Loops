// Part 1: Fizz Buzz
console.log("Part 1: Fizz Buzz");
for (let i = 1; i <= 100; i++) {
  // Check for divisibility by 3 and 5 first
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Part 2: Prime Time
function isPrime(num) {
  // Prime numbers are greater than 1
  if (num <= 1) {
    return false;
  }
  // Loop to check divisibility by numbers less than num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Not prime
    }
  }
  return true; // Prime
}

function findNextPrime(n) {
  while (true) {
    if (isPrime(n)) {
      return n;
    }
    n++; // Increment to check the next number
  }
}

// Example usage
let n = 4; // Starting number
console.log(
  "Starting from",
  n + ", the next prime number is",
  findNextPrime(n)
);

// Test with higher numbers if needed

// Part 3: Feeling Loopy
const csvData1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvData2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

function parseCSV(csvString) {
  let currentCell = "";
  let currentRow = [];

  for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

    // If current character is not a comma or new line character, add it to the current cell
    if (char !== "," && char !== "\n") {
      currentCell += char;
    }

    // If current character is a comma or new line character, move to the next cell or row
    if (char === "," || char === "\n") {
      currentRow.push(currentCell.trim()); // Trim to remove leading/trailing whitespaces
      currentCell = ""; // Reset current cell
    }

    // If current character is a new line character, log the current row
    if (char === "\n") {
      console.log(...currentRow); // Spread operator to log each cell separately
      currentRow = []; // Reset current row
    }
  }
}

// Test with example data
console.log("Parsing CSV 1:");
parseCSV(csvData1);

console.log("\nParsing CSV 2:");
parseCSV(csvData2);
