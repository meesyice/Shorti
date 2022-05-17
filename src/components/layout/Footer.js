import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div>
        <ul>
          <li>
            <a href="https://github.com/meesyice/shorti" target="_blank" rel="noopener noreferrer">Source</a>
          </li>
          <li>|</li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Terms">Terms of Service</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Privacy">Privacy</Link>
          </li>
        </ul>
        <div>© 2022 Shorti.xyz - Tool to shorten long URLs.</div>
        <div>Made with <span className={classes.heart}>&#10084;</span> in Amman</div>
      </div>
    </footer>
  );
}

export default Footer;
