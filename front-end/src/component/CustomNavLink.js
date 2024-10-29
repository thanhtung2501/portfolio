import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

function CustomNavLink({ to, title }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <li className="nav-item">
        <NavLink to={to} className='nav-link'>
          <span className={`${match ? 'active-item' : ''}`}>{title}</span>
        </NavLink>
      </li>
    </>   
  )
}
export default CustomNavLink;