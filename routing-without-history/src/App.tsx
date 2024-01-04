import React, { MouseEvent } from "react";

function App() {
  const pathname = window.location.pathname;

  function handleGoHome() {
    window.history.pushState(null, "", "/");
  }

  function handleGoAbout(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    window.history.pushState(null, "", href);
  }

  return (
    <div>
      <h1>pathname: {pathname}</h1>
      <nav>
        <ul>
          <li>
            <button onClick={handleGoHome}>Home</button>
          </li>
          <li>
            <a href="/about" onClick={handleGoAbout}>
              About
            </a>
          </li>
        </ul>
      </nav>
      <div>
        {pathname === "/" && <h2>Home</h2>}
        {pathname === "/about" && <h2>About</h2>}
      </div>
    </div>
  );
}

export default App;
