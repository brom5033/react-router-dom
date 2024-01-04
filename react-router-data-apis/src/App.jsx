import {
  Route,
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

import { createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<>Home</>} />
      <Route path="about" element={<>About</>} />
      <Route path="dashboard" element={<>DashBoard</>} />
      <Route path="*" element={<>Not Found</>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
