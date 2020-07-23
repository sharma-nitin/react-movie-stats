import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'
import Navbar from './components/layout/navbar/Navbar'
import Spinner from './components/layout/spinner/Spinner';
import './app.scss'
const Landing = lazy(() => import('./components/home/landing/Landing'))
const Movie = lazy(() => import('./components/home/movie/Movie'))
const PageNotFound = lazy(() => import('./components/home/pageNotFound/PageNotFound'))

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/movie/:id" component={Movie} />
              <Route component={PageNotFound} />
            </Switch>
          </>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
