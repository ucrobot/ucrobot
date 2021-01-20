class linkConnect {
	index() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'index.html';
		location.href = varIndex;
	}
	indexRobotics() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotics/robotics.html';
		location.href = varIndex;
	}
	indexRoboticsP() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotics/prek-k/robotics-p.html';
		location.href = varIndex;
	}
	indexRoboticsE() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotics/elementary/robotics-e.html';
		location.href = varIndex;
	}
	indexRoboticsM() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotics/middle/robotics-m.html';
		location.href = varIndex;
	}
	indexRoboticsH() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotics/high/robotics-h.html';
		location.href = varIndex;
	}

	indexMechanics() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'mechanics/mechanics.html';
		location.href = varIndex;
	}
	indexMechanicsP() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'mechanics/prek-k/mechanics-p.html';
		location.href = varIndex;
	}
	indexMechanicsE() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'mechanics/elementary/mechanics-e.html';
		location.href = varIndex;
	}
	indexMechanicsM() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'mechanics/middle/mechanics-m.html';
		location.href = varIndex;
	}
	indexMechanicsH() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'mechanics/high/mechanics-h.html';
		location.href = varIndex;
	}
	indexElectronics() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'electronics/electronics.html';
		location.href = varIndex;
	}
	indexElectronicsP() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'electronics/prek-k/electronics-p.html';
		location.href = varIndex;
	}
	indexElectronicsE() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'electronics/elementary/electronics-e.html';
		location.href = varIndex;
	}
	indexElectronicsM() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'electronics/middle/electronics-m.html';
		location.href = varIndex;
	}
	indexElectronicsH() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'electronics/high/electronics-h.html';
		location.href = varIndex;
	}
	indexCoding() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'coding/coding.html';
		location.href = varIndex;
	}
	indexCodingP() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'coding/prek-k/coding-p.html';
		location.href = varIndex;
	}
	indexCodingE() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'coding/elementary/coding-e.html';
		location.href = varIndex;
	}
	indexCodingM() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'coding/middle/coding-m.html';
		location.href = varIndex;
	}
	indexCodingH() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'coding/high/coding-h.html';
		location.href = varIndex;
	}
	indexRobotkit() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotkit/robotkit.html';
		location.href = varIndex;
	}
	indexRobotkitP() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotkit/prek-k/robotkit-p.html';
		location.href = varIndex;
	}
	indexRobotkitE() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotkit/elementary/robotkit-e.html';
		location.href = varIndex;
	}
	indexRobotkitM() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotkit/middle/robotkit-m.html';
		location.href = varIndex;
	}
	indexRobotkitH() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'robotkit/high/robotkit-h.html';
		location.href = varIndex;
	}
	indexRobotkitLabbot() {
		var varHome = new String('https://ucrobot.github.io/');
		var varIndex = varHome + 'labbot/rabbot.html.html';
		location.href = varIndex;
	}
}
let link = new linkConnect();

document.write(`
<header>
  <h1><a href="javascript:link.index()">Robot Study</a></h1>
  <p>Roboting Everyone</p>
  <div id="menu">
    <ul class="main">
      <li><a href="javascript:link.indexRobotics()">Robotics</a>
        <ul class="sub">
        <li><a href="javascript:link.indexRoboticsP()">PreK ~ K</a></li>
        <li><a href="javascript:link.indexRoboticsE()">Elementary</a></li>
        <li><a href="javascript:link.indexRoboticsM()">Middle School</a></li>
        <li><a href="javascript:link.indexRoboticsH()">High School</a></li>
        </ul>
      </li>
      <li><a href="javascript:link.indexMechanics()">Mechanics</a>
        <ul class="sub">
        <li><a href="javascript:link.indexMechanicsP()">PreK ~ K</a></li>
        <li><a href="javascript:link.indexMechanicsE()">Elementary</a></li>
        <li><a href="javascript:link.indexMechanicsM()">Middle School</a></li>
        <li><a href="javascript:link.indexMechanicsH()">High School</a></li>
        </ul>
      </li>
      <li><a href="javascript:link.indexElectronics()">Electronics</a>
        <ul class="sub">
          <li><a href="javascript:link.indexElectronicsP()">PreK ~ K</a></li>
          <li><a href="javascript:link.indexElectronicsE()">Elementary</a></li>
          <li><a href="javascript:link.indexElectronicsM()">Middle School</a></li>
          <li><a href="javascript:link.indexElectronicsH()">High School</a></li>
        </ul>
      </li>
      <li><a href="javascript:link.indexCoding()">Coding</a>
        <ul class="sub">
        <li><a href="javascript:link.indexCodingP()">PreK ~ K</a></li>
        <li><a href="javascript:link.indexCodingE()">Elementary</a></li>
        <li><a href="javascript:link.indexCodingM()">Middle School</a></li>
        <li><a href="javascript:link.indexCodingH()">High School</a></li>
        </ul>
      </li>
      <li><a href="javascript:link.indexRobotkit()">Robot kit</a>
        <ul class="sub">
          <li><a href="javascript:link.indexRobotkitP()">PreK ~ K</a></li>
					<li><a href="javascript:link.indexRobotkitE()">Elementary</a></li>
						<ul class="sub2">
							<li>&nbsp;&nbsp;- <a href="javascript:link.indexRobotkitLabbot()">LABBOT</a></li>
							<li>&nbsp;&nbsp;- <a href="#">EQ-ROBO</a></li>
							<li>&nbsp;&nbsp;- <a href="#">EQ-DUINO</a></li>
						</ul>
          <li><a href="javascript:link.indexRobotkitM()">Middle School</a></li>
          <li><a href="javascript:link.indexRobotkitH()">High School</a></li>
        </ul>
      </li>
    </ul>
  </div>
</header>
`);
