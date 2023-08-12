// Import the function
const topFavouriteMoviesAmongFriends = require('./app');

// Test case 1: Valid input with existing user ID
test('Test with valid input', () => {
  const userId = 15291;
  const expectedOutput = ['Pulp Fiction', 'The Godfather', 'The Dark Knight'];

  const result = topFavouriteMoviesAmongFriends(userId);

  expect(result).toEqual(expectedOutput);
});
