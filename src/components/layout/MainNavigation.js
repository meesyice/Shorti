import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Shorti.xyz</Link>
      </div>
      <nav className={classes.link}>
        <ul>
          <li>
            <Link to="/">URL Shortner</Link>
          </li>
          <li>
            <Link to="/ClickTracker">URL Click Tracker</Link>
          </li>
          <li>
            <Link to="/ReportUrl">Report Malicious URL</Link>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>DM</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
