import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import FavoriteButton from './FavoriteButton'
import { StateContext } from '../state'
import styles from '../styles/MovieList.module.scss'

const MovieList = ({ movies }) => {
  const {
    state: { favorites },
  } = useContext(StateContext)
  const movieItemClassnames = classnames(styles.movie_list__movie, styles.scalable)

  return (
    <ul className={styles.movie_list}>
      {movies.map((m) => (
        <li key={m.imdbID} className={movieItemClassnames}>
          <figure className={styles.movie__poster}>
            <Link to={`/${m.imdbID}`} href="#?">
              <img
                src={
                  m.Poster !== 'N/A'
                    ? m.Poster
                    : 'https://via.placeholder.com/300x420/2F3240/CECECE/?text=Poster%20N/A'
                }
                alt={m.Title}
              />
            </Link>
          </figure>
          <FavoriteButton
            iconClassName={styles.movie__favorite_icon}
            movie={m}
            favorite={favorites.find((m2) => m.imdbID === m2.imdbID) !== undefined}
          />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
