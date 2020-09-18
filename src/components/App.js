import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Section from './Section';
import Navigation from './Navigation/Navigation';
import routes from '../routes';

const AsyncMovies = lazy(() =>
  import('../views/Movies' /* webpackChunkName: 'Movies'*/),
);
const AsyncMovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails' /* webpackChunkName: 'MovieDetails'*/),
);

export default function App() {
  return (
    <Section>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={AsyncMovies} />
          <Route
            path={routes.searchMovieDetails}
            component={AsyncMovieDetails}
          />
          <Route path={routes.homeMovieDetails} component={AsyncMovieDetails} />
        </Switch>
      </Suspense>
    </Section>
  );
}
