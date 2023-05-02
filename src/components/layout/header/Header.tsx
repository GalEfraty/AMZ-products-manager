import { Link } from 'react-router-dom';

import logoUrl from '/tag.png';

import './header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header-inner'>
        <Link to={'/'} className='header-inner-logo'>
          <img src={logoUrl} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
