import React from "react";

class UploadSection extends React.Component {
  render() {
    return (
      <section id="second" class="main special">
        <header class="major">
          <h2>
            <b>Upload</b>
          </h2>
          <p>Upload private or public Replay Files.</p>
        </header>
        <ul class="statistics">
          <li class="style1">
            <span class="icon fa-users" />
            <strong>1</strong> Unique Players
          </li>
          <li class="style2">
            <span class="icon fa-film" />
            <strong>1</strong> Replay Files
          </li>
          <li class="style3">
            <span class="icon fa-gamepad" />
            <strong>1</strong> Matches
          </li>
          <li class="style4">
            <span class="icon fa-crosshairs" />
            <strong>1</strong> Eliminations
          </li>
          <li class="style5">
            <span class="icon fa-grav" />
            <strong>1</strong> Mistakes Made
          </li>
        </ul>
        <p class="content"> </p>
        <footer class="major">
          <ul class="actions special">
            <li>
              <a href="generic.php" class="button">
                Start Uploading
              </a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default UploadSection;
