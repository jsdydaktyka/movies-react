import React, { Component } from 'react' ;
import { getMovies } from './fake_movies';

class Movie extends Component {

    state = {
        movies: getMovies() 
    }

    render(){

        return (
            <>
            <h1> {this.state.movies[0].title} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map(movie => (
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button > Delete </button></td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>
            </>
        )
    }
}

export default Movie;
