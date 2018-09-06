import React from "react";
import styles from "../../styles.css";

class AboutSection extends React.Component {
  render() {
    return (
      <section className={`${styles.main} ${styles.intro}`}>
        <div className={styles.spotlight}>
          <div className={styles.content}>
            <header className={styles.major}>
              <h2>About</h2>
            </header>
            <p>
              We analyze your Fortnite replay files and provide you with
              detailed statistics
              <br /> about you and your opponents to improve your game!
            </p>
            <ul className={styles.actions}>
              <li>
                <button className={styles.button}>Learn More</button>
              </li>
            </ul>
          </div>
          {/*Class also had fa-graduation-cap below*/}
          <span className={`${styles.icon} ${styles.major}`} />
        </div>
      </section>
    );
  }
}

export default AboutSection;
