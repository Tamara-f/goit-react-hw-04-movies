import React from 'react';

const Cast = ({ cast }) => {
  console.log(cast);
  return (
    <div>
      <p>Movie cast</p>

      <ul>
        {cast.map(item => (
          <li key={item.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt="img"
            />
            <p>{`name: ${item.name}`}</p>
            <p>{`character: ${item.character}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
