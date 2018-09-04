import React from "react";

class AboutSection extends React.Component {
  render() {
    return (
      <section id="intro" class="main">
        <div class="spotlight">
          <div class="content">
            <header class="major">
              <h2>About</h2>
            </header>
            <p>
              We analyze your Fortnite replay files and provide you with
              detailed statistics
              <br /> about you and your opponents to improve your game!
            </p>
            <ul class="actions">
              <li>
                <a href="generic.php" class="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <span class="icon major fa-graduation-cap" />
        </div>
      </section>
    );
  }
}

export default AboutSection;
