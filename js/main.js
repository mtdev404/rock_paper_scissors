// console.log(`jest`);

//obiekt wyników gry
const gameSummary = {
  games: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

// obiekt gra
const game = {
  playerChoice: '',
  compChoice: '',
}
// pobranie elementów strony
const resInfo = document.querySelector('.winner');
const gameNumber = document.querySelector('.counttitle');
const playerWins = document.querySelector('.wins');
const playerDraws = document.querySelector('.draws');
const playerLosses = document.querySelector('.losses');
// tablica wyboru gracza
const images = [...document.querySelectorAll('.image')];

//tablica wyboru komputera
const computer = images.map(e => e.getAttribute(`data-option`));
// console.log(computer);

//wybór komputera
function compSelection() {
  let index = Math.floor(Math.random() * computer.length);
  game.compChoice = computer[index];
  console.log(game.compChoice);
}
// funkcja określająca co się dzieje po wyborze gracza
const userSelection = function(img) {
  images.forEach(image => image.classList = ``);
  this.classList.toggle(`selected`);
  game.playerChoice = this.getAttribute('data-option');
  resInfo.textContent = '';
  //komputer losuje
  compSelection();
  // console.log(game.playerChoice);
}
// naschiwanie na klik na elementach tablicy wyboru gracza
images.forEach(image => image.addEventListener('click', userSelection));



// czyszczenie 
function clear() {
  images.forEach(image => image.classList = ``);
  resInfo.textContent = '';
  game.playerChoice = '';
}

// Sprawdzanie wyniku
const gameResult = function() {

  // przypisanie wyników
  let player = game.playerChoice;
  let comp = game.compChoice;

  // sprawdzenie czy grasz
  if (player == ``) {
    resInfo.textContent = 'nie dokonałeś wyboru!!';
  } else {
    //iteracja liczby gier
    gameSummary.games += 1;
    gameNumber.textContent = `Ilość gier: ${gameSummary.games}`;
    console.log(gameSummary.games);

    // sprawdzenie wyniku i zwrotka
    clear();
    if (player === comp) {
      resInfo.textContent = 'remis!!';
      gameSummary.draws++;
      playerDraws.textContent = `${gameSummary.draws}`;
    } else if ((player === 'rock' && comp === 'scissors') || (player === 'scissors' && comp === 'paper') || (player === 'paper' && comp === 'rock')) {
      gameSummary.wins++;
      playerWins.textContent = `${gameSummary.wins}`;
      resInfo.textContent = 'wygrałeś!! :)';
    } else if ((comp === 'rock' && player === 'scissors') || (comp === 'scissors' && player === 'paper') || (comp === 'paper' && player === 'rock')) {
      gameSummary.losses++;
      playerLosses.textContent = `${gameSummary.losses}`;
      resInfo.textContent = 'przegrałeś!! :(';
    }
  }
}
// pobranie buttona
const btn = document.querySelector('button');
//akcja po kliknięciu w button
btn.addEventListener('click', gameResult);