let movies = [{
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "ratings": [],
    "favorites": [66380, 7001, 9250, 34139],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
    }, {
    "title": "The Godfather",
    "duration": "PT175M",
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "ratings": [],
    "favorites": [15291, 51417, 7001, 9250, 71389, 93707],
    "watchlist": [62289, 66380, 34139, 6146]
    }, {
    "title": "The Dark Knight",
    "duration": "PT152M",
    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "ratings": [],
    "favorites": [15291, 7001, 9250, 34139, 93707],
    "watchlist": [51417, 62289, 6146, 71389]
    }, {
    "title": "Pulp Fiction",
    "duration": "PT154M",
    "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    "ratings": [],
    "favorites": [15291, 51417, 62289, 66380, 71389, 93707],
    "watchlist": [7001, 9250, 34139, 6146]
    }];

let users = [{
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
    },
    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
    },
    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
    },
    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
 }];



function topFavouriteMoviesAmongFriends(userId) {
  let user = users.find((input) => input.userId == userId);
  let moviesFavCounts = [];

  for (let movie of movies) {
    let favCount = movie.favorites.reduce((accumulator, value) => {
      if (user.friends.includes(value)) {
        return ++accumulator;
      } else {
        return accumulator;
      }
    }, 0)
    let movieCount = [movie.title, favCount];
    moviesFavCounts.push(movieCount);
  }

  sortedByfavCount = moviesFavCounts.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    // if they are equal, have nested if to determine order alphabetically
    if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
      if (a[0] === b[0]) return 0;
      if (a[0] > b[0]) return 1;
    }
    if (a[1] < b[1]) return 1;
  });

  topThree = sortedByfavCount.slice(0, 3).map((input) => {
    return input[0];
  });
  
  return topThree;
}

console.log(topFavouriteMoviesAmongFriends(15291));
module.exports = topFavouriteMoviesAmongFriends;