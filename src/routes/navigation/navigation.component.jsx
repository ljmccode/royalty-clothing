import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <h1>I am the navigation bar</h1>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
