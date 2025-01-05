// DOM Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Background Music Auto-Play with Interaction Fallback
const backgroundMusic = document.getElementById('backgroundMusic');
document.body.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});

// Countdown Functionality
function updateCountdown() {
  const targetDate = new Date('January 1, 2026 00:00:00').getTime();
  const currentDate = new Date().getTime();
  const difference = targetDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Run Countdown Every Second
setInterval(updateCountdown, 1000);
updateCountdown();
                                          
