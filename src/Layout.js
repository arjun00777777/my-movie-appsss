import { Outlet, Link } from "react-router-dom";
import data from "./data";
import Rate from "./mostrated";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/data">Recent</Link>
            </li>
            <li className="nav-item">
              <Link to="/mostrated">Most Rated</Link>
            </li>
            <li className="nav-item">
              <Link to="/currently-out">Currently Out</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
