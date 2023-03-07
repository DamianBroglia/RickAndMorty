import SearchBar from "./SearchBar"
import Titulo from "./Titulo"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav({ onSearch }) {

    return (
        <nav className={styles.nav}>
            <Titulo />
            <Link to="/home">
            <button className={styles.selecButton}>Home</button>
            </Link>
            <Link to="/about">
            <button className={styles.selecButton}>About</button>
            </Link>
            <Link to="/favorites">
            <button className={styles.selecButton}>Favorites</button>
            </Link>
            <Link to="/filtered">
            <button className={styles.selecButton}>Filter</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}