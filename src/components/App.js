import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from '../views/Home';
import Movies from '../views/Movies';
import MovieDetails from '../views/MovieDetails';
import Section from './Section';
import Navigation from '../components/Navigotion';
import routes from '../routes';

export default class App extends Component {
  state = {
    // movies: [],
    // isLoading: false,
    // error: null,
  };

  // componentDidUpdate(prevState) {}

  render() {
    return (
      <Section>
        <Navigation />
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={Movies} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route path="/:movieId" component={MovieDetails} />
        </Switch>
      </Section>
    );
  }
}
