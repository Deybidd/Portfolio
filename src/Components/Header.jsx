import styles from '../Components-Css/Header.module.css'
import Logo from '../assets/Logo.svg'

function Header() {

    return (
			<header className={styles.header}>
				<img src={Logo} alt="Logo" />
				<nav>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li id="Projects">
							<a href="#projects">Projects</a>
						</li>
						<li id="About">
							<a href="#about">About</a>
						</li>
						<li id="Contact">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
				<hr></hr>
			</header>
		);
}

export default Header