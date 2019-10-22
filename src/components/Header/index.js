import React from 'react';
import './style.css';

import LogoFacebook from '../../assets/facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={LogoFacebook} />
        
        <div>
          <span>Meu perfil</span>
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;