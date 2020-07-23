import React, { useEffect } from 'react'
import './movie.scss'
import Button from '../../../common/button/Button'
import Spinner from '../../../components/layout/spinner/Spinner'
import { fetchMovie, setLoading } from '../../../actions/searchActions';
import { connect } from 'react-redux';

const Movie = (props) => {
    useEffect(() => {
        props.fetchMovie(props.match.params.id);
        props.setLoading();
    }, [])

    const { loading, movie } = props;

    let movieInfo = (
        <div data-test = 'container' className="container">
            <div className="row">
                <div className="detail-wrapper" data-test = 'detail-wrapper'>
                    <div className="detail-container" data-test = 'detail-container'>
                        <div className="movie-poster" >
                            <img src={movie.Poster} className="thumbnail" alt="Poster" data-test = 'Poster' />
                        </div>
                        <div className="movie-detail">
                            <h2 className="movie-title" data-test = 'movie-title'>{movie.Title}</h2>
                            <ul>
                                <li className="movie-title" data-test = 'Genre'>
                                    <span><strong>Genre:</strong></span>
                                    <span>{movie.Genre}</span>
                                </li>
                                <li className="movie-title" data-test = 'Released'>
                                    <span><strong>Released:</strong></span>
                                    <span>{movie.Released}</span>
                                </li>
                                <li className="movie-title" data-test = 'Rated'>
                                    <span><strong>Rated:</strong></span>
                                    <span>{movie.Rated}</span> 
                                </li>
                                <li className="movie-title" data-test = 'Rating'>
                                    <span><strong>IMDB Rating:</strong></span>
                                    <span>{movie.imdbRating}</span>
                                </li>
                                <li className="movie-title" data-test = 'Director'>
                                    <span><strong>Director:</strong></span>
                                    <span>{movie.Director}</span>
                                </li>
                                <li className="movie-title" data-test = 'Writer'>
                                    <span><strong>Writer:</strong></span>
                                    <span>{movie.Writer}</span>
                                </li>
                                <li className="movie-title" data-test = 'Actors'>
                                    <span><strong>Actors:</strong></span>
                                    <span>{movie.Actors}</span>
                                </li>
                            </ul>
                            <div className="text-center" data-test = 'backbutton'>
                                <Button btnName="go back to home" goTo={'/'} /> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div data-test = 'content'>{content}</div>;
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
});

export default connect(
    mapStateToProps,
    { fetchMovie, setLoading }
)(Movie);
