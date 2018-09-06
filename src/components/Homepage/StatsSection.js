import React from "react";
import styles from "../../styles.css";
class StatsSection extends React.Component {
  render() {
    return (
      <section id="first" className={`${styles.main} ${styles.special}`}>
        <header className={styles.major}>
          <h2>
            <b>Stats</b>
          </h2>
        </header>
        <ul className={styles.features}>
          <li>
            {/*class below is missing fa-user*/}
            <span
              className={`${styles.icon} ${styles.major} ${styles.style1}`}
            />
            <h3>Personal</h3>
            <p>View your personal stats</p>
          </li>
          <li>
            {/*class below is missing fa-globe*/}
            <span
              className={`${styles.icon} ${styles.major} ${styles.style3}`}
            />
            <h3>Global</h3>
            <p>View global stats from all uploaders</p>
          </li>
          <li>
            {/*class below is missing fa-video-camera*/}
            <span
              className={`${styles.icon} ${styles.major} ${styles.style5}`}
            />
            <h3>Popular</h3>
            <p>View your favorite Streamer, Youtuber, and Pro Player Stats</p>
          </li>
        </ul>
        <footer className={styles.major}>
          <ul className={`${styles.actions} ${styles.special}`}>
            <li>
              <a href="generic.php" className={styles.button}>
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default StatsSection;
