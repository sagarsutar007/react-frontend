import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Project
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
