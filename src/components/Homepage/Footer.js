import React from "react";
import styles from "../../styles.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section>
          <h2>Development</h2>
          <p>
            Fortn1te is still in the early stages of development so please be
            sure to reach out to us with any request you would like to see or
            any bugs you encounter, thank you.
          </p>
          <ul className={styles.actions}>
            <li>
              <button className={styles.button}>Learn More</button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <dl className={styles.alt}>
            <dt>Location</dt>
            <dd>Los Angeles, California</dd>
            <dt>Email</dt>
            <dd>
              <p>business@fortn1te.com</p>
            </dd>
          </dl>
          <ul className={styles.icons}>
            <li>
              <a
                href="https://twitter.com/Fortn1teDotCom"
                class="icon fa-twitter alt"
              >
                <span className={styles.label}>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fortn1tedotcom"
                class="icon fa-instagram alt"
              >
                <span className={styles.label}>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC2MzeLwZ0aZ2UR3Gmsmo98A"
                class="icon fa-youtube alt"
              >
                <span className={styles.label}>Youtube</span>
              </a>
            </li>
          </ul>
        </section>
        <p className={styles.copyright}>&copy; Fortn1te.com</p>
      </footer>
    );
  }
}

export default Footer;
