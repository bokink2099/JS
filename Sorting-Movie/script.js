/**
 * DONE: Change sortMovies() function to sort movies list by rank
 * DONE: Sort movies by id, rank, and tittle through dynamic function
 * DONE: Create helper function called getMaxMovieObject() for finding max movie
 */

 // List of movie
 let movies = [
     {
         title: "Fight Club",
         rank: 10,
         id: "tt0137523"
     },
     {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt01111161"
    },
    {
        title: "The Lord of The rings",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    },
    {
        title: "The Godfather 2",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "The Good, the bad and the ugly",
        rank: 5,
        id: "tt0060196"
    }
    
 ]

 window.onload = function(){
    //  let sortedMovies = sortMoviesByRank(movies);
    let sortedMovies = sortMoviesByAttr(movies, 'rank')
     // Display Movies list
     displayMovies(movies);
 } 

 /**
  * Display list of movies in a table
  * You don't have to worry so much about this
  */
 function displayMovies(movies){
     let table = "<table border='1' style='widht: 100%'>";
     table += "<tr><th>ID</th><th>NAME</th><th>RANK</th></tr>";
     for (let index =0; index < movies.length; index++){
         table +="<tr>";
         table +="<td>" + movies [index].id + "</td>";
         table +="<td>" + movies [index].title + "</td>";
         table +="<td>" + movies [index].rank + "</td>";
         table +="</tr>";
         
     }
     // Close the table
     table += "</table>";
     document.getElementById("movies-list").innerHTML = table;
 }

 /**
  * Sort movies by rank from greatest to smalest
  * Hint : Make sure you are comparing the right value in if (...)
  * Hint : Replace numbers with movies.
  */
 function sortMoviesByRank(movies){
     // Code from previous sortBestRatingFirst() function
     for (let j = 0; j < movies.length - 1; j++){

        let max_obj = movies[j];
        // {
        //     tittle: "Fight Club",
        //     rank: 10,
        //     id: "tt0137523"
        // },
        let max_location = [j];

        for (let i = j; i < movies.length; i++){
            if (movies[i].rank > max_obj.rank){
                // Know max And it;s index (location)
                // If we found object with higher rank, then replace max_obj with the new object
                max_obj = movies[i]
                max_location = i
            }
        } 
        // Swap the first and the last
        movies[max_location] = movies[j]// --> 10
        movies[j]= max_obj
    }
    return movies
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr){
        for (let j = 0; j < movies.length - 1; j++){

            let max_obj = movies[j];
            // {
            //     tittle: "Fight Club",
            //     rank: 10,
            //     id: "tt0137523"
            // },
            let max_location = j;
            let max = getMaxMovieObject(movies, j, sortAttr);
            max_obj = max.max_obj;
            max_location = max.max_index;

            // for (let i = j; i < movies.length; i++){
            //     if (movies[i][sortAttr] > max_obj[sortAttr]){
            //         // Know max And it;s index (location)
            //         // If we found object with higher rank, then replace max_obj with the new object
            //         max_obj = movies[i]
            //         max_location = i
            //     }
            // } 
            // Swap the first and the last
            movies[max_location] = movies[j]// --> 10
            movies[j]= max_obj
        }
        return movies
}

/**
 * Retrieve the max movie object based on attribute
 * Hint : Make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr){
    //Code from previous findMaxHelper() function
    let max_obj = movies [start];
    let max_location = start

    for (let i = start; i < movies.length; i++){
        if (movies[i][sortAttr]> max_obj[sortAttr]){
            max_obj = movies[i]
            max_location = i
        }
    }
    return {max_obj: max_obj, max_index: max_location}
}