import React from "react";
import * as styles from "./header.module.scss";

const Header = () => {
    return(
        <header className={styles.header}>
            <a href="" className={styles.header__title}><span>Rob Crossland</span></a>

            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <a className={`${styles.navLink} ${styles.navLinkActive}`} href="">About</a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="">Skills</a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
