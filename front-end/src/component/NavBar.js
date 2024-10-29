import Nav from 'react-bootstrap/Nav';
import CustomNavLink from './CustomNavLink';

function NavBar() {
  return (
    <>
      <Nav defaultActiveKey="/" className="navbar nav-bg" id="sideNav">
        <div className='navbar-brand'>
          <span>
            <img className="img-profile rounded-circle mx-auto mb-2" src="../assets/img/profile.jpg" alt="" />
          </span>
        </div>

        <div>
          <ul className="navbar-nav">
            <CustomNavLink to="/" title='About' />
            <CustomNavLink to="/experience" title='Experience' />
            <CustomNavLink to="/education" title='Education' />
            <CustomNavLink to="/skill" title='Skills' />
            <CustomNavLink to="/contact" title='Contact' />
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default NavBar;