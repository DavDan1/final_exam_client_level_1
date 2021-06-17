import React from 'react';

const Header = () => {
  return (
    <div data-cy='header' id='header'>
      <img
        data-cy='viaplay-logo'
        className='viaplay-logo'
        src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
        alt='viaplay logo'
      />
    </div>
  );
};

export default Header;
