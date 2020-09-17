import React, { Component } from 'react';

import { FetchCast } from '../services/FetchApi';

export default class Cast extends Component {
  state = {
    cast: null,
  };
  componentDidMount() {
    FetchCast(this.props.match.params.movieId)
      .then(cast => {
        this.setState({ cast: cast.data.cast });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const cast = this.state.cast;

    return (
      <>
        {cast && (
          <>
            <p>Movie cast</p>
            <ul>
              {cast.map(item => (
                <li key={item.cast_id}>
                  {item.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                      alt="img"
                      width="200"
                    />
                  ) : (
                    <img
                      src="https://www.sv-boeblingen.de/wp-content/uploads/person_blank.png"
                      alt="img "
                      height="300"
                      width="200"
                    />
                  )}
                  <h3>{item.name}</h3>
                  <h4>{`character: ${item.character}`}</h4>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
