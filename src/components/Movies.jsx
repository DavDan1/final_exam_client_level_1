import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    );
    setMovies(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    );
  };

  useEffect(() => {
    getMovies();
  }, []);
  let movie = movies.map((movie) => {
    return (
      <div class='display-show:nth-child' data-cy='movies'>
        <img src={movie.content.images.landscape.url} />
      </div>
    );
  });
  return (
    <div class='display-show' data-cy='movie-container'>
      {movie}
    </div>
  );
};

export default Movies;
