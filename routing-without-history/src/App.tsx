import React, { MouseEvent, useCallback, useEffect, useState } from "react";

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const listener = useCallback(() => {
    setPathname(window.location.pathname);
  }, []);

  const push = useCallback(
    (path: string) => {
      window.history.pushState(null, "", path);
      listener();
    },
    [listener]
  );

  useEffect(() => {
    const callback = () => {
      listener();
    };

    window.addEventListener("popstate", callback);
    return () => {
      window.removeEventListener("popstate", callback);
    };
  }, [listener]);

  return [pathname, push] as const;
}

function App() {
  const [pathname, push] = usePathname();

  function handleGoHome() {
    push("/");
  }

  function handleGoAbout(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href === null) return;
    push(href);
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
