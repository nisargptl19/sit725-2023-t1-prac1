//variables to keep track 
var previousIndex = -1;
var counter = 0;

function generateRandom(length) {
  return Math.floor(Math.random() * length);
} 

function updateText() {
  // Array of text to display
  var textArray = [
    "Hello World!",
    "Welcome to SIT725",
    "This is javascript demo",
    "Programming is beautiful",
  ];
  // Generate random index
  var randomIndex = generateRandom(textArray.length);
  console.log(randomIndex);

  // Check if the random index is same as previous, if yes then displays text with count
  if (randomIndex === previousIndex) {
    counter++;
    document.getElementById("heading").innerHTML =
      textArray[randomIndex] + " (" + counter + ")";
  } else {
    counter = 0;
    document.getElementById("heading").innerHTML = textArray[randomIndex];
  }
  previousIndex = randomIndex;
}
