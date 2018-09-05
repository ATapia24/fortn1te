import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <section>
          <h2>Development</h2>
          <p>
            Fortn1te is still in the early stages of development so please be
            sure to reach out to us with any request you would like to see or
            any bugs you encounter, thank you.
          </p>
          <ul class="actions">
            <li>
              <a href="generic.php" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <dl class="alt">
            <dt>Location</dt>
            <dd>Los Angeles, California</dd>
            <dt>Email</dt>
            <dd>
              <p>business@fortn1te.com</p>
            </dd>
          </dl>
          <ul class="icons">
            <li>
              <a
                href="https://twitter.com/Fortn1teDotCom"
                class="icon fa-twitter alt"
              >
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fortn1tedotcom"
                class="icon fa-instagram alt"
              >
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC2MzeLwZ0aZ2UR3Gmsmo98A"
                class="icon fa-youtube alt"
              >
                <span class="label">Youtube</span>
              </a>
            </li>
          </ul>
        </section>
        <p class="copyright">&copy; Fortn1te.com</p>
      </footer>
    );
  }
}

export default Footer;
