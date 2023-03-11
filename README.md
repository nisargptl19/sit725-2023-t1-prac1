# sit725-2023-t1-prac1
 SIT725 Practical 1 : Introduction of Programming
 
#How it Works
The updateText function first defines an array called textArray that contains several strings of text. It then generates a random index within the range of the textArray using the generateRandom function. If the random index is the same as the previous index, the function increments a counter variable and displays the text at the random index along with the counter. If the index is not the same as the previous index, the counter is reset to 0 and the text at the new index is displayed.

The generateRandom function generates a random number based on the length of an array passed in as an argument.

The code also defines two variables: previousIndex and counter. previousIndex is set to -1 to ensure that the first time updateText is called, the text will always be different from the previous text. counter keeps track of how many times the same text has been displayed in a row.
