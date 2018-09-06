import React from "react";
import Header from "./Homepage/Header";
import Navbar from "./Homepage/Navbar";
import Sections from "./Homepage/Sections";
import Footer from "./Homepage/Footer";
import styles from "../styles.css";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className={styles.wrapper}>
          <Sections />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
