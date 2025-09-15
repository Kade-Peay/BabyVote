// Initialize vote counts if they don't exist
if (!localStorage.getItem('boyVotes')) {
    localStorage.setItem('boyVotes', '0');
    localStorage.setItem('girlVotes', '0');
}

// Get elements
const boyButton = document.getElementById("boy");
const girlButton = document.getElementById("girl");
const boyResultText = document.getElementById("bResults");
const girlResultText = document.getElementById("gResults");
const boyMessage = document.getElementById("boy-message");
const girlMessage = document.getElementById("girl-message");
const boyProgress = document.getElementById("boy-progress");
const boyPercentage = document.getElementById("boy-percentage");
const girlPercentage = document.getElementById("girl-percentage");

// Get current vote counts
let boyCounter = parseInt(localStorage.getItem('boyVotes'));
let girlCounter = parseInt(localStorage.getItem('girlVotes'));

// Update display with current values
updateDisplay();

function boyIncrement() {
    boyCounter++;
    localStorage.setItem('boyVotes', boyCounter.toString());
    updateDisplay();

    // Show confirmation message
    boyMessage.style.display = 'block';
    girlMessage.style.display = 'none';

    // Hide message after 3 seconds
    setTimeout(() => {
        boyMessage.style.display = 'none';
    }, 3000);
}

function girlIncrement() {
    girlCounter++;
    localStorage.setItem('girlVotes', girlCounter.toString());
    updateDisplay();

    // Show confirmation message
    girlMessage.style.display = 'block';
    boyMessage.style.display = 'none';

    // Hide message after 3 seconds
    setTimeout(() => {
        girlMessage.style.display = 'none';
    }, 3000);
}

function updateDisplay() {
    // Update counts
    boyResultText.innerText = boyCounter;
    girlResultText.innerText = girlCounter;

    // Calculate percentages
    const total = boyCounter + girlCounter;
    const boyPct = total > 0 ? Math.round((boyCounter / total) * 100) : 50;
    const girlPct = total > 0 ? Math.round((girlCounter / total) * 100) : 50;

    // Update progress bar and percentages
    boyProgress.style.width = `${boyPct}%`;
    boyPercentage.innerText = `${boyPct}%`;
    girlPercentage.innerText = `${girlPct}%`;
}

// Add event listeners
boyButton.addEventListener('click', boyIncrement);
girlButton.addEventListener('click', girlIncrement);