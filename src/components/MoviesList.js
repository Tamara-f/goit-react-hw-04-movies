import React from 'react';

export default function MoviesList(movies) {
  console.log(movies);

  return (
    <>
      <ul className="MoviesList">
        {this.movies.map(movie => (
          <li className="MoviesListItem">
            <p>{movie.title}</p>
          </li>
          //            <img src={poster_path}
          //             alt={title}
          //             //   onClick={this.handleClick}
          //           />
          //         </li>
          //       ))}
        ))}
      </ul>
    </>
  );
}

{
  /* <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          Invalue={value}
          onImgClick={onImgClick}
          largeImageURL={largeImageURL}
        /> */
}
