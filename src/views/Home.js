import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MoviesList from '../components/MoviesList';
import Section from '../components/Section';
import { movieFetchApi } from '../services/FetchApi';

export default class Home extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    movieFetchApi()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { movies, isLoading, error } = this.state;
    console.log(movies);
    const { match } = this.props;
    // const url = 'https://image.tmdb.org/t/p/w500';
    return (
      <Section>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {movies.length > 0 && (
          <>
            <h1>Welcome home!</h1>
            <ul className="MoviesList">
              {movies.map(movie => (
                <li className="MoviesListItem" key={movie.id}>
                  <Link to={`${match.url}${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <p>{movie.title}</p>
                    <span>{movie.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>
    );
  }
}
