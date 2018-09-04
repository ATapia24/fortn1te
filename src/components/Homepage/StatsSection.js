import React from "react";

class StatsSection extends React.Component {
  render() {
    return (
      <section id="first" class="main special">
        <header class="major">
          <h2>
            <b>Stats</b>
          </h2>
        </header>
        <ul class="features">
          <li>
            <span class="icon major style1 fa-user" />
            <h3>Personal</h3>
            <p>View your personal stats</p>
          </li>
          <li>
            <span class="icon major style3 fa-globe" />
            <h3>Global</h3>
            <p>View global stats from all uploaders</p>
          </li>
          <li>
            <span class="icon major style5 fa-video-camera" />
            <h3>Popular</h3>
            <p>View your favorite Streamer, Youtuber, and Pro Player Stats</p>
          </li>
        </ul>
        <footer class="major">
          <ul class="actions special">
            <li>
              <a href="generic.php" class="button">
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
