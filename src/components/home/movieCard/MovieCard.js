import React from 'react'
import './movieCard.scss'
import Button from '../../../common/button/Button';

const MovieCard = (props) => {
    const { movie } = props;
    return (
        <div data-test='cards_wrap' className="cards_wrap">
            <div data-test="card_item" className="card_item">
                <div data-test="card_inner" className="card_inner">
                    <div data-test="card_top" className="card_top">
                        <img src={movie.Poster} alt="car" />
                    </div>
                    <div data-test="card_bottom" className="card_bottom">
                        <div data-test="card_info" className="card_info">
                            <p className="title">{movie.Title}</p>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                    <Button data-test="detail-button" btnName="Movie Details" goTo={'/movie/' + movie.imdbID} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
