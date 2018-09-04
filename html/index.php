<!DOCTYPE HTML>
<!--
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->

<?php
$servername = "localhost";
$username = "fortntec_site";
$password = "bR#FTt0_d-g5";
$dbname = "fortntec_replays_master";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


//n_players
$sql = "SELECT COUNT(DISTINCT name) AS n FROM players";
$result = $conn->query($sql);
$n_players = $result->fetch_assoc()['n'];

//n_replays
$sql = "SELECT * FROM replays";
$result = $conn->query($sql);
$n_replays = $result->num_rows;

//matches
$sql = "SELECT COUNT(DISTINCT guid) AS n FROM replays";
$result = $conn->query($sql);
$n_matches = $result->fetch_assoc()['n'];

//elims
$sql = "SELECT * FROM eliminations";
$result = $conn->query($sql);
$n_elims = $result->num_rows;

//mistakes
$sql = "SELECT * FROM eliminations WHERE eliminator=eliminated";
$result = $conn->query($sql);
$n_mist = $result->num_rows;

/*if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["guid"]. " - Name: " . $row["file"]. " " . $row["date"]. "<br>";
    }
} else {
    echo "0 results";
}*/

$conn->close();
?>

<html>
	<head>
		<title>Fortn1te</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<!--<span class="logo"><img src="images/logo.svg" alt="" /></span>-->
						<span class="fa fa-flask fa-40x"></span>
						<h1>Fortn1te</h1>
						<p>We analyze your Fortnite replay files and provide you with detailed statistics<br/> about you and your opponents to improve your game!</p>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">About</a></li>
							<li><a href="#first">Stats</a></li>
							<li><a href="#second">Upload</a></li>
							<li><a href="#cta">Download</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">

						<!-- Introduction -->
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>About</h2>
										</header>
										<p>We analyze your Fortnite replay files and provide you with detailed statistics<br/> about you and your opponents to improve your game!</p>
										<ul class="actions">
											<li><a href="generic.php" class="button">Learn More</a></li>
										</ul>
									</div>
									<span class="icon major fa-graduation-cap"></span>
								</div>
							</section>

						<!-- First Section -->
							<section id="first" class="main special">
								<header class="major">
									<h2><b>Stats</b></h2>
								</header>
								<ul class="features">
									<li>
										<span class="icon major style1 fa-user"></span>
										<h3>Personal</h3>
										<p>View your personal stats</p>
									</li>
									<li>
										<span class="icon major style3 fa-globe"></span>
										<h3>Global</h3>
										<p>View global stats from all uploaders</p>
									</li>
									<li>
										<span class="icon major style5 fa-video-camera"></span>
										<h3>Popular</h3>
										<p>View your favorite Streamer, Youtuber, and Pro Player Stats</p>
									</li>
								</ul>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.php" class="button">Learn More</a></li>
									</ul>
								</footer>
							</section>

						<!-- Second Section -->
							<section id="second" class="main special">
								<header class="major">
									<h2><b>Upload</b></h2>
									<p>Upload private or public Replay Files.</p>
								</header>
								<ul class="statistics">
									<li class="style1">
										<span class="icon fa-users"></span>
										<strong><?php echo $n_players; ?></strong> Unique Players
									</li>
									<li class="style2">
										<span class="icon fa-film"></span>
										<strong><?php echo $n_replays; ?></strong> Replay Files
									</li>
									<li class="style3">
										<span class="icon fa-gamepad"></span>
										<strong><?php echo $n_matches; ?></strong> Matches
									</li>
									<li class="style4">
										<span class="icon fa-crosshairs"></span>
										<strong><?php echo $n_elims; ?></strong> Eliminations
									</li>
									<li class="style5">
										<span class="icon fa-grav"></span>
										<strong><?php echo $n_mist;?></strong> Mistakes Made
									</li>
								</ul>	
								<p class="content">	</p>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.php" class="button">Start Uploading</a></li>
									</ul>
								</footer>
							</section>

						<!-- Get Started -->
							<section id="cta" class="main special">
								<header class="major">
									<h2><b>Download</b></h2>
									<p>Download our desktop client for automated uploads and better performance!</p>
								</header>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.php" class="button primary">Windows</a></li>
									</ul>
								</footer>
							</section>

					</div>

				<!-- Footer -->
					<footer id="footer">
						<section>
							<h2>Development</h2>
							<p>Fortn1te is still in the early stages of development so please be sure to reach out to us with any request you would like to see or any bugs you encounter, thank you.</p>
							<ul class="actions">
								<li><a href="generic.php" class="button">Learn More</a></li>
							</ul>
						</section>
						<section>
							<h2>Contact</h2>
							<dl class="alt">
								<dt>Location</dt>
								<dd>Los Angeles, California</dd>
								<dt>Email</dt>
								<dd><a href="#">business@fortn1te.com</a></dd>
							</dl>
							<ul class="icons">
								<li><a href="https://twitter.com/Fortn1teDotCom" class="icon fa-twitter alt"><span class="label">Twitter</span></a></li>
								<li><a href="https://www.instagram.com/fortn1tedotcom" class="icon fa-instagram alt"><span class="label">Instagram</span></a></li>
								<li><a href="https://www.youtube.com/channel/UC2MzeLwZ0aZ2UR3Gmsmo98A" class="icon fa-youtube alt"><span class="label">Youtube</span></a></li>
							</ul>
						</section>
						<p class="copyright">&copy; Fortn1te.com</p>
					</footer>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
