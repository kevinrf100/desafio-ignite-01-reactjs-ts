import styles from "./Header.module.css";
import RocketLogo from "../assets/rocket.svg";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img className={styles.rocket} src={RocketLogo} alt="Rocket"/>
            <div className={styles.textTodoContainer}>
                <span className={styles.textTo}>to</span>
                <span className={styles.textDo}>do</span>
            </div>
        </header>
    );
}