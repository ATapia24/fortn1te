import React from "react";
import styles from "../../styles.css";

class DownloadSection extends React.Component {
  render() {
    return (
      <section id="cta" className={`${styles.main} ${styles.special}`}>
        <header className={styles.major}>
          <h2>
            <b>Download</b>
          </h2>
          <p>
            Download our desktop client for automated uploads and better
            performance!
          </p>
        </header>
        <footer className={styles.major}>
          <ul className={`${styles.actions} ${styles.special}`}>
            <li>
              <button className={`${styles.button} ${styles.primary}`}>
                Windows x86 (32 bit)
              </button>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default DownloadSection;
