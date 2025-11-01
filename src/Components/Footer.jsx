import styles from '../Components-Css/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <p>&copy; {new Date().getFullYear()} Iroy, David Harvey. All rights reserved.</p>
        </footer>
    );
}

export default Footer