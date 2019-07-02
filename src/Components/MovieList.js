import React, {Component, Fragment} from 'react'
import Movie from './Movie'

class MovieList extends Component {

    render(){


        const movieComponents = this.props.movies.map(movieData => {
            return (
                <Movie name={movieData.name} url={movieData.url} key={movieData.id}>
                    {movieData.name}
                </Movie>
            )
        })

        return (
            <Fragment>
                {movieComponents}
            </Fragment>
            
        )
    }
}

export default MovieList