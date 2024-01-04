import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Data APIs Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home</>} />
        <Route path="about" element={<>About</>} />
        <Route path="dashboard" element={<>DashBoard</>} />
        <Route path="*" element={<>Not Found</>} />
      </Route>
    </Routes>
  );
}

export default App;
