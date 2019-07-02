import React, {Component} from 'react'

class Movie extends Component {
    render(){
        return (
            <div className="movie">
                <a href={this.props.url}>{this.props.name}</a>
            </div>
        )
    }
}

export default Movie 