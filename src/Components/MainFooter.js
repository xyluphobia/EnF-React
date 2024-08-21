import '../css/componentStyles/MainFooter.css'

function MainFooter() {
    return (
        <footer>
        <div className="footer-wrapper">
            <div className="footer-link-holder">
                <h3>Site</h3>
                <h3>Links</h3>
                <h3>Games</h3>
                <ul>
                    <li><a>Projects</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Careers</a></li>
                    <li><a>News</a></li>
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
                    <li><a href="mailto:email@email.com">email@email.com</a></li>
                </ul>
            </div>
            <p className="copyright-p">&copy;2024 ErrorNotFound. All Rights Reserved.</p>
            <div className="footer-legal-holder"><a>Terms of Service</a> <p>|</p> <a>Privacy Policy</a></div>
        </div>
        </footer>
    );
}

export default MainFooter;