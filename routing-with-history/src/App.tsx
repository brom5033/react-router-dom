import { type FC, useState, MouseEvent, useEffect } from "react";
import { type BrowserHistory } from "history";

const App: FC<{ history: BrowserHistory }> = ({ history }) => {
  const [pathname, setPathname] = useState(history.location.pathname);

  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setPathname(location.pathname);
    });

    return () => {
      unlisten();
    };
  }, [history, pathname]);

  const handleGoHome = () => {
    history.push("/");
  };
  const handleGoAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href === null) return;
    history.push(href);
  };

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
        {pathname === "/" && <>Home</>}
        {pathname === "/about" && <>About</>}
      </div>
    </div>
  );
};
export default App;
