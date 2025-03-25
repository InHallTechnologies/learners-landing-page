import React from "react";
import Styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {

    return(
        <div className={Styles.navigationContainer}>
            <Link href='/'>
                <img className={Styles.logo} alt="Learners Global School And PU College" src="/logo.png" /> 
            </Link>

            <div>
                <ul className={Styles.navigationListContainer}>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Our Story</Link>
                    </li>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Courses</Link>
                    </li>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Faculty</Link>
                    </li>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Event</Link>
                    </li>
                    <li>
                        <Link className={Styles.navigationItem} href='/'>Mandatory Disclosure</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;