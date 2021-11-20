const movies = require('./data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(list) {
  return list.map(function (item) {
    //return here bc function above must have a value
    return item.director; // this return must have a value from the return above
  });

  //const allDirectors = movies.map((movie) => {
  // return movie.director;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(listOfMovies) {
  if (listOfMovies.length === 0) {
    return 0;
  } else {
    const dramasMoviesSpielberg = listOfMovies.filter(function (item) {
      //item is the value of the object
      return (
        item.director === 'Steven Spielberg' && item.genre.includes('Drama')
      );
    });

    return dramasMoviesSpielberg.length;
  }

  //testing if this is what we need to return by typign: return 1;
  //(list) is needed because in the test we expect howManyMovies([]) so we expect an array

  /* const list.filter(function(item){
    return list.director === 'Steven Spielberg' && list.genre === 'drama';
  })

 /* const spielbergDramaMovies = list.filter((element) => {
    return element.director === 'Steven Spielberg' && element.genre === 'drama'
  })*/
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/* function scoresAverage(listOfMovies) {
  const sumOfTheScores = listOfMovies.reduce(function (previousValue, currentValue) {
    //1 iteration 
    //previous value = 0
    //current Value = { score: 8 }

    //2 iteration
    // previousValue = 8
    // currentValue = {score:8}

    //3 iteration
    //previousValue = 17
    //currentValue = {score: 9}

    //sum = 26

    return previousValue + currentValue.score;
  }, 0); //adding initializer to start at 0
*/
  function scoresAverage(listOfMovies) {
    if (listOfMovies.length === 0){
      return 0;
    } 

    // [...] --> filter --> [...] minus the objects I dont want --> reduce --> SUM
    const correctObjects = listOfMovies.filter(function(item){
      return typeof item.score === 'number';
      });


    const sumOfTheScores = correctObjects.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.score;
    },
     0);
    const average = sumOfTheScores / listOfMovies.length;
    const stringWithTwoDecimals = average.toFixed(2); // returns a string
    const toNumberWithDecimals = parseFloat(stringWithTwoDecimals);
    return toNumberWithDecimals;
  }

 // return parseFloat(sum / listOfMovies.length).toFixed(2);

  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(listOfMovies) {
  //movies with everything --> filter --> movies only drama --> reduce --> average
  //{ genre: ['Action'], score: 8 },
  //{ genre: ['Romance'], score: 9 },
  //{ genre: ['Sci-Fi'], score: 7 }
 
  //filter
  // []
  const dramaMovies = listOfMovies.filter(function(item){
    return item.genre.includes('Drama');
  }); 
//[] 

if (dramaMovies.length === 0) {
  return 0;
}

const totalSum = dramaMovies.reduce(function(previousValue, currentValue){
  return previousValue + currentValue.score;
}, 0);

const average = totalSum / dramaMovies.length;
const fixedAverage = average.toFixed(2);
const toNumberWithDecimals = parseFloat(fixedAverage);
return toNumberWithDecimals;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// never change the parameter of your function (listOfMovies):
function orderByYear(listOfMovies) {
  const newListOfMovies = [...listOfMovies];

  newListOfMovies.sort(function(a, b){

    if (a.year < b.year) {
      return -1
    }
    if (a.year > b.year){
      return 1
    }
    if (a.year === b.year){
      if(a.title < b.title){
        return -1;
      } else{
      return 0 
    }
   }
  })
  return newListOfMovies;
}

//alternative solution:
/* function orderByYear(listOfMovies) {
  const newListOfMovies = [...listOfMovies];

  const sortedMoviesByYearAsc = newListOfMovies.sort(function(a, b){

    if (a.year < b.year) {
      return -1
    }
    if (a.year > b.year){
      return 1
    }
    if (a.year === b.year){
      return 0 
    }
  })
  return sortedMoviesByYearAsc;
} */

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(listOfMovies) {
const newListOfMovies = [...listOfMovies];

if (newListOfMovies.length === 1){
  return newListOfMovies[0].title;
}

if (newListOfMovies.length > 20){
  // receives a list that is bigger than 20
  //we should sort the list
  // reduce it to 20 elements
  //map to a new list of strings
  newListOfMovies.sort(function(a,b){
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    if(a.title === b.title){
      return 0;
    }
  });

  const listWith20Elements = newListOfMovies.filter(function(item, index){
if (index < 20){
return item;
}
  });

  const mappedTitles = listWith20Elements.map(function(item){

    return item.title;
  });

  return mappedTitles;

 } else{

  //array with less than 20 elements
  const mappedTitles = newListOfMovies.map(function(item){
return item.title;

  });

  mappedTitles.sort();
 
  return mappedTitles;
 }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
