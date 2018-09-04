import React from "react";

class DownloadSection extends React.Component {
  render() {
    return (
      <section id="cta" class="main special">
        <header class="major">
          <h2>
            <b>Download</b>
          </h2>
          <p>
            Download our desktop client for automated uploads and better
            performance!
          </p>
        </header>
        <footer class="major">
          <ul class="actions special">
            <li>
              <a href="generic.php" class="button primary">
                Windows
              </a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default DownloadSection;
