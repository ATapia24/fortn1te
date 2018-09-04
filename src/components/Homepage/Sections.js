import React from "react";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import UploadSection from "./UploadSection";
import DownloadSection from "./DownloadSection";

class Sections extends React.Component {
  render() {
    return (
      <div id="main">
        <AboutSection />
        <StatsSection />
        <UploadSection />
        <DownloadSection />
      </div>
    );
  }
}

export default Sections;
