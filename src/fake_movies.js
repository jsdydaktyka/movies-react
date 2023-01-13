

const movies = [
  {
    _id: "15",
    title: "Terminator",
    genre: { _id: "1818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "16",
    title: "Pan Tadeusz",
    genre: { _id: "1818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "17",
    title: "Wakacje z Reactem",
    genre: { _id: "1820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "19",
    title: "Podr� do React Native",
    genre: { _id: "1814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "1a",
    title: "Python kontratakuje",
    genre: { _id: "1814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "1b",
    title: "Wspomnienia JavaScripta",
    genre: { _id: "1814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "1e",
    title: "Python Girls",
    genre: { _id: "1820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "1f",
    title: "React wieczorow� por�",
    genre: { _id: "1820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "21",
    title: "The Pythongers",
    genre: { _id: "1818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}
