import axios from 'axios';

const GUESS_NUMBER = 'GUESS_NUMBER';
const guessNumber = (number) => {
  return {
    type: GUESS_NUMBER,
    number: number
  }
}

const NEW_GAME = 'NEW_GAME';
const newGame = (newGame) => {
  return {
    type: NEW_GAME,
    newGame: true
  }
}

const GET_FEWEST_GUESSES = 'GET_FEWEST_GUESSES';

export function guessNum (guessNum) {
  const url = 'http://localhost:8080/fewest-guesses';
  let request = axios.get(url)
    return {
      type: GET_FEWEST_GUESSES,
      payload: request
    }
}

const POST_FEWEST_GUESSES = 'POST_FEWEST_GUESSES';

export function postCount (count) {
  const url = 'http://localhost:8080/fewest-guesses';
  let request = axios.post(url, { count });

  return {
    type: POST_FEWEST_GUESSES,
    payload: request
  }
}

// create new action that handles 2 reducers


exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.GET_FEWEST_GUESSES = GET_FEWEST_GUESSES;
// exports.getFewestGuesses = getFewestGuesses;
exports.POST_FEWEST_GUESSES = POST_FEWEST_GUESSES;
// exports.postFewestGuesses = newFewestGuesses;
exports.guessNum = guessNum;
exports.postCount = postCount;
