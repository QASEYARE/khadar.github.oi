// Get the form element and attach an event listener to it
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user's weapon choice
  const selectedWeapon = document.querySelector('input[name="weapon"]:checked');
  const userWeapon = selectedWeapon ? selectedWeapon.value : null;

  // If the user didn't select a weapon, display an error message and exit
  if (!userWeapon) {
    const resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = '<p>Please select a weapon!</p>';
    return;
  }

  // Generate a random weapon for the computer
  const weapons = ['rock', 'paper', 'scissors'];
  const computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  // Determine the game result
  let result;
  if (userWeapon === computerWeapon) {
    result = 'tie';
  } else if (userWeapon === 'rock' && computerWeapon === 'scissors' ||
             userWeapon === 'paper' && computerWeapon === 'rock' ||
             userWeapon === 'scissors' && computerWeapon === 'paper') {
    result = 'win';
  } else {
    result = 'lose';
  }

  // Display the game result
  const resultsDiv = document.querySelector('.results');
  resultsDiv.innerHTML = `<p>You played ${userWeapon}. The computer played ${computerWeapon}.</p>`;
  if (result === 'tie') {
    resultsDiv.innerHTML += '<p>It\'s a tie!</p>';
  } else if (result === 'win') {
    resultsDiv.innerHTML += '<p>You win!</p>';
  } else {
    resultsDiv.innerHTML += '<p>You lose!</p>';
  }
});
