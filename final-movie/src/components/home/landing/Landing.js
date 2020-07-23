import React, { lazy } from 'react'
import SearchForm from '../searchForm/SearchForm'
import Spinner from '../../layout/spinner/Spinner'
import { connect } from 'react-redux';
import ErrorBoundry from '../../../common/errorBoundry/ErrorBoundry'
const MoviesContainer = lazy(() => import('../moviesContainer/MoviesContainer'))

const Landing = (props) => {
    const { loading } = props;
    return (
        <div data-test="container" className="container">
            <ErrorBoundry data-test="errorboundary">
                <SearchForm  data-test="searchform"/>
                {loading ? <Spinner data-test="spinner" /> : <MoviesContainer />}
            </ErrorBoundry>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
