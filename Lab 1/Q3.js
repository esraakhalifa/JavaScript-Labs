let FavoriteMovies = ['P.S.: I love you.', 'Failure to launch', 'Monalisa smile', "My bestfriend's wedding"];

console.log(FavoriteMovies);

let favouriteMovies = FavoriteMovies;
favouriteMovies[2] = "Two weeks notice";

console.log(favouriteMovies[3]);
console.log(favouriteMovies[favouriteMovies.length-1]);
console.log(favouriteMovies.at(3));

favouriteMovies.unshift('Mamma Mia');



console.log(favouriteMovies);
