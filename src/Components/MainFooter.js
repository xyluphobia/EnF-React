import '../css/componentStyles/MainFooter.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function MainFooter() {
    return (
        <footer>
        <div className="footer-wrapper">
            <div className="footer-link-holder">
                <h3>Site</h3>
                <h3>Links</h3>
                <h3>Games</h3>
                <ul>
                    <CustomListElement to="/projects" linkName="Projects" />
                    <CustomListElement to="/about" linkName="About" />
                    <CustomListElement to="/contact" linkName="Contact" />
                    <CustomListElement to="/articles" linkName="News" />
                </ul>
                <ul>
                    <li><a>GitHub</a></li>
                    <li><a>Steam</a></li>
                </ul>
                <ul>
                    <li><a>SoulSwap</a></li>
                </ul>
            </div>
            <div className="footer-contact-holder">
                <h3>Contact</h3>
                <ul>
                    <li><a href="mailto:email@email.com">questions@email.com</a></li>
                    <li><a href="mailto:email@email.com">business@email.com</a></li>
                </ul>
            </div>
            <p className="copyright-p">&copy;2024 ErrorNotFound. All Rights Reserved.</p>
            <div className="footer-legal-holder"><a>Terms of Service</a> <p>|</p> <a>Privacy Policy</a></div>
        </div>
        </footer>
    );
}

function CustomListElement({to, linkName}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}><Link to={to} onClick={resetFocusToH1()}>{linkName}</Link></li>
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

export default MainFooter;