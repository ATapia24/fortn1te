import React from "react";
import styles from "../../styles.css";

class UploadSection extends React.Component {
  render() {
    return (
      <section id="second" className={`${styles.main} ${styles.special}`}>
        <header className={styles.major}>
          <h2>
            <b>Upload</b>
          </h2>
          <p>Upload private or public Replay Files.</p>
        </header>
        <ul className={styles.statistics}>
          <li className={styles.style1}>
            {/*class below missing fa-users*/}
            <span className={styles.icon} />
            <strong>1</strong> Unique Players
          </li>
          <li className={styles.style2}>
            {/*class below missing fa-film*/}
            <span className={styles.icon} />
            <strong>1</strong> Replay Files
          </li>
          <li className={styles.style3}>
            {/*class below missing fa-gamepad*/}
            <span className={styles.icon} />
            <strong>1</strong> Matches
          </li>
          <li className={styles.style4}>
            {/*class below missing fa-crosshairs*/}
            <span className={styles.icon} />
            <strong>1</strong> Eliminations
          </li>
          <li className={styles.style5}>
            {/*class below missing fa-grav*/}
            <span className={styles.icon} />
            <strong>1</strong> Mistakes Made
          </li>
        </ul>
        <p className={styles.content}> </p>
        <footer className={styles.major}>
          <ul className={`${styles.actions} ${styles.special}`}>
            <li>
              <button className={styles.button}>Start Uploading</button>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default UploadSection;
