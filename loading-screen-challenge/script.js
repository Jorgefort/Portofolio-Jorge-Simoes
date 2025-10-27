/*
TODO: Create the loading screen logic

Tasks:

1. Initialize variables:
   - progress = 0 (current percentage)
   - totalDots = 80 (number of dots)

2. Get DOM elements:
   - loadingScreen (the main container)
   - progressDots (where dots will be rendered)
   - progressPercentage (where % text will be shown)
   - mainContent (the content after loading)

3. Create initializeDots() function:
   - Clear progressDots innerHTML
   - Create 80 dot spans using a loop
   - Each span should have class "dot"
   - Set innerHTML to "•" (bullet character)
   - Append each dot to progressDots

4. Create updateProgress() function:
   - Calculate how many dots should be filled: Math.floor((progress / 100) * totalDots)
   - Get all dots: document.querySelectorAll('.dot')
   - Loop through dots:
     - If index < dotsFilled, add 'filled' class
     - Otherwise, remove 'filled' class
   - Update percentage text: progress + '%'

5. Create startLoading() function:
   - Use setInterval (every 40ms):
     - Generate random increment: Math.floor(Math.random() * 3) + 2
     - Add increment to progress
     - Make sure progress doesn't exceed 100: Math.min(progress, 100)
     - Call updateProgress()
     - If progress >= 100:
       - clearInterval to stop
       - After 500ms delay (setTimeout):
         - Add 'fade-out' class to loadingScreen
         - After 1000ms delay:
           - Hide loadingScreen (display: none)
           - Show mainContent (display: block)

6. Initialize on page load:
   - Call initializeDots()
   - Call startLoading()

Hint: Use document.getElementById() and document.createElement()
*/

// Your JavaScript code here

let progress = 0;
const totalDots = 80;

// TODO: Get DOM elements


// TODO: Create initializeDots function


// TODO: Create updateProgress function


// TODO: Create startLoading function


// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    // TODO: Call your functions here
});
