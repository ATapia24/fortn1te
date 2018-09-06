import React from "react";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import UploadSection from "./UploadSection";
import DownloadSection from "./DownloadSection";
import styles from "../../styles.css";

class Sections extends React.Component {
  render() {
    return (
      <div className={styles.mainId}>
        <AboutSection />
        <StatsSection />
        <UploadSection />
        <DownloadSection />
      </div>
    );
  }
}

export default Sections;
