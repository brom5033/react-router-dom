import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/dashboard">DashBoard</a>
          </li>
          <li>
            <a href="/nothing-here">Nothing Here</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="about" element={<>About</>} />
        <Route path="dashboard" element={<>Dashboard</>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
