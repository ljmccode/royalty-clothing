import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'></CrwnLogo>
        </Link>
        <div className='nav-links-container'></div>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
