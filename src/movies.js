// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let sum = [];
        moviesArray.forEach(elem => sum.push(elem.director))
    return sum;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/* function howManyMovies(moviesArray) {
    const count = moviesArray.filter((elem) =>
        elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
    );
    return count.length;
  } */

function howManyMovies(moviesArray) {
    const total = moviesArray.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama'))
    return total.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scores = 0;
    moviesArray.forEach(elem => {
      if (elem['score'] !== undefined) {
        scores += elem.score;
      }
    })
    if (moviesArray.length === 0) {
        return 0;
    }
    const avgScore = scores / moviesArray.length
    return Math.round(avgScore * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let score = 0;
      const newArray = moviesArray.filter(element => {
        return element.genre.includes('Drama')
      })
      newArray.forEach(elem => score += elem.score) 
      if (score === 0) {
        return 0;
      }
      return Math.round((score / newArray.length) * 100) / 100;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
