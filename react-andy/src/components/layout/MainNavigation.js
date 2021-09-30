import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shorti.xyz</div>
      <nav>
        <ul>
          <li>
            <Link to="/">URL Shortner</Link>
          </li>
          <li>
            <Link to="/ClickTracker">URL Click Counter</Link>
          </li>
          <li>
            <Link to="/ReportUrl">Report Malicious URL</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
