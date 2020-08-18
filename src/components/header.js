import React from 'react';
import Logo from './Logo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header(params) {
  return(
    <header className="App-header">
      <nav>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
      </nav>
      <Logo />
    </header>
  )
}
function Home() {
  return (
    <div className="icons">
      <a href="https://codepen.io/slimcady/pens/public/">
        <svg width="36" height="40" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg"><title>CodePen</title><path d="M15.98 5.474v-.34l-.068-.068h-.068L8.364.102a.737.737 0 0 0-.748 0L.136 5.066H.068L0 5.134v5.712l.068.068h.068l7.48 4.964c.136.068.272.136.408.136.136 0 .272-.068.408-.136l7.48-4.964h.068l.068-.068V5.542c-.068 0-.068 0-.068-.068zM8.5 1.938l5.508 3.672-2.448 1.632-3.06-2.04V1.938zm-1.36 0v3.264l-3.06 2.04-2.448-1.7L7.14 1.938zM1.088 6.902l1.7 1.156L1.02 9.214V6.902h.068zm6.052 7.276l-5.508-3.672L4.08 8.874l3.06 2.04v3.264zm.68-4.488L5.372 8.058 7.82 6.426l2.448 1.632L7.82 9.69zm.68 4.488v-3.264l3.06-2.04 2.448 1.632L8.5 14.178zm6.052-4.964l-1.7-1.156 1.768-1.156v2.312h-.068z" fill="#FFF" fillRule="evenodd"/></svg>
      </a>
      <a href="https://github.com/philcady">
        <svg width="36" height="40" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Github</title><path d="M8 0C3.6 0 0 3.6 0 8a7.991 7.991 0 0 0 5.467 7.6c.4.067.533-.2.533-.4v-1.333c-2.2.466-2.667-1.067-2.667-1.067-.333-.933-.866-1.2-.866-1.2-.8-.467 0-.467 0-.467.8.067 1.2.8 1.2.8.733 1.2 1.866.867 2.333.667.067-.533.267-.867.533-1.067-1.8-.2-3.666-.866-3.666-3.933 0-.867.333-1.6.8-2.133 0-.267-.334-1.067.133-2.134 0 0 .667-.2 2.2.8.667-.2 1.333-.266 2-.266s1.333.066 2 .266c1.533-1.066 2.2-.8 2.2-.8.467 1.134.133 1.934.067 2.134.533.533.8 1.266.8 2.133 0 3.067-1.867 3.733-3.667 3.933.267.267.533.734.533 1.467v2.2c0 .2.134.467.534.4A7.991 7.991 0 0 0 15.933 8C16 3.6 12.4 0 8 0z" fill="#FFF" fillRule="evenodd"/></svg>
      </a>
    </div>
  );
}

function About() {
  return (
    <div>
      <p>&ldquo;Now is the time for all good men to come to the aid of their country.&rdquo;</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
     Hit me up yo
    </div>
  );
}

export default Header;
