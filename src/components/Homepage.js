import React from "react";
import Header from "./Homepage/Header";
import Navbar from "./Homepage/Navbar";
import Sections from "./Homepage/Sections";
import Footer from "./Homepage/Footer";

class Homepage extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Navbar />
        <Sections />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
