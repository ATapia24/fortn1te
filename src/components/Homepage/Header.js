import React from "react";
import styles from "../../styles.css";

class Header extends React.Component {
  render() {
    return (
      <header className={`${styles.alt} ${styles.header}`}>
        <span className="fa fa-flask fa-40x" />
        <h1>Fortn1te</h1>
        <p>
          We analyze your Fortnite replay files and provide you with detailed
          statistics
          <br /> about you and your opponents to improve your game!
        </p>
      </header>
    );
  }
}

export default Header;
