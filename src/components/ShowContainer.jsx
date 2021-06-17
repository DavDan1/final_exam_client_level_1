import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowContainer = () => {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
    const response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    );
    setShows(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    );
  };

  useEffect(() => {
    getShows();
  }, []);

  let show = shows.map((show) => {
    return (
      <div className='show-card' data-cy='show-card'>
        <img className='show-img' src={show.content.images.landscape.url} alt='series illustration' />
      </div>
    );
  });

  return <div id='shows-container' data-cy='shows-container'>{show}</div>;
};

export default ShowContainer;
