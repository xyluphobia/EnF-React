import '../css/componentStyles/MainHeader.css'
import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function MainHeader() {
    const [header, setHeader] = useState(false);
    window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        console.log("black");
        setHeader(true);
    } else {
        console.log("trans");
        setHeader(false);
    }
    });
    

    return (
      <header className={header ? 'header header-scrolled' : 'header'}>
              <nav className="header-content-wrapper">
                  <Link className="nav-logo" to="/"></Link>
                  <ul>
                      <CustomListElement to="/projects" linkName="Projects" />
                      <CustomListElement to="/about" linkName="Who Am I" />
                      <CustomListElement to="/careers" linkName="Work With Us" />
                      <CustomListElement to="/articles" linkName="News" />
                  </ul>
                  <section className="header-social-links">
                      <a className="social-icons steam-icon" href='https://store.steampowered.com/' target='_blank'></a>
                  </section>
              </nav>
          </header>
    );
}

function CustomListElement({to, linkName}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li><Link to={to} onClick={resetFocusToH1()}>
            <p>{linkName}</p>
            <div className={isActive ? "header-underline active" : "header-underline"}></div>
        </Link></li>
    )
}

function resetFocusToH1() {
    let resetFocusItem = document.getElementsByTagName("h1")[0];
	if (resetFocusItem) {
    resetFocusItem.setAttribute("tabindex", "-1");
	  resetFocusItem.style.outline = "none";
	  resetFocusItem.focus();
  }
}

export default MainHeader;