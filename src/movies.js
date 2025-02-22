// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  arr = [];
    moviesArray.forEach(element => { if (arr.includes(element.director) !== true) { 
        arr.push(element.director) 
      }
    })
  return arr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const total = moviesArray.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'))
    return total.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scores = 0;
    moviesArray.forEach(element => { if (element['score'] !== undefined) {
        scores += element.score;
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
      newArray.forEach(element => score += element.score) 
      if (score === 0) {
        return 0;
      }
      return Math.round((score / newArray.length) * 100) / 100;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  arr = [];
      moviesArray.forEach(element => { arr.push(element) })
      arr.sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        }
        else {
          return a.title.localeCompare(b.title)
        }
      })
  return arr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  arr = [];
    moviesArray.forEach(element => arr.push(element.title))
  arr.sort((a, b) => a.localeCompare(b))
  return arr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
      let duration = movie.duration.split(' ');
      let minutes = 0;
      duration.forEach(time => {
        if (time.includes('h')) {
          minutes += parseInt(time) * 60;
        } 
        else {
          minutes += parseInt(time);
        }
      })
      return {...movie, duration: minutes}
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
