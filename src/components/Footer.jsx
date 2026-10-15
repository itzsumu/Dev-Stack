
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h3>
          Dev <span>Stack</span>
        </h3>

        <p>
          Find the right tools for your next project
          and start building something great.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>PRODUCT</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div>
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>LEGAL</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
