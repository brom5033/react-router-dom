import { Outlet, Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>Basic Example</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activeClass" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({ color: isActive ? "pink" : "" })}
            >
              DashBoard
            </NavLink>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/team/123">Team 123</Link>
          </li>
          <li>
            <Link to="/team/new">New</Link>
          </li>
          <li>
            <Link to="/team/123/task/456">Team 123 Task 456</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}