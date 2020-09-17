import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { FetchMovieDetails } from '../services/FetchApi';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';

export default class MovieDetails extends Component {
  state = {
    movie: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    console.log(this.props.match.params);
    FetchMovieDetails(this.props.match.params.movieId)
      .then(data => {
        this.setState({ movie: data[0].data });
        this.setState({ cast: data[1].data.cast });
        this.setState({ reviews: data[2].data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleGoBack = e => {
    console.log('e');
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home);
  };
  render() {
    console.log(this.state.movie);
    const movie = this.state.movie;
    const { match } = this.props;
    const historyState = this.props.history.location.state;

    return (
      <>
        <button className="goBackBtn" onClick={this.handleGoBack}>
          go back
        </button>

        {movie !== null && (
          <>
            <div className="cover">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="movieImg"
                alt="img"
              ></img>
              <div>
                <p>{movie.original_title}</p>
                <span>{`(${movie.release_date.substr(0, 4)})`}</span>
                <p>{`User score: ${movie.vote_average * 10}%`}</p>
                <p>Overview:</p>
                <p>{movie.overview}</p>
                <p>Genres:</p>
                <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
              </div>
            </div>
            <hr />
            <div>
              Aditianal information
              <ul className="aditianalUl">
                {historyState ? (
                  <>
                    <Link
                      to={{
                        pathname: `${match.url}/cast`,
                        state: { from: historyState.from },
                      }}
                    >
                      Cast
                    </Link>
                    <Link
                      to={{
                        pathname: `${match.url}/reviews`,
                        state: { from: historyState.from },
                      }}
                    >
                      Reviews
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={`${match.url}/cast`}>Cast</Link>
                    <Link to={`${match.url}/reviews`}>Reviews</Link>
                  </>
                )}
              </ul>
              <Route
                path={`${match.path}/cast`}
                render={() => <Cast cast={this.state.cast} />}
              />
              <Route path={`${match.path}/reviews`} component={Reviews} />
            </div>
          </>
        )}
      </>
    );
  }
}
