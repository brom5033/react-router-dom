import React, { MouseEvent, useEffect, useState } from "react";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  function handleGoHome() {
    window.history.pushState(null, "", "/");
    setPathname("/");
  }

  function handleGoAbout(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href === null) return;
    window.history.pushState(null, "", href);
    setPathname(href);
  }

  useEffect(() => {
    const callback = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", callback);
    return () => {
      window.removeEventListener("popstate", callback);
    };
  }, []);

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
