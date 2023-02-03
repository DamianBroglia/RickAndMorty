import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function Filter({ filter }) {
    const [character, setCharacter] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            filter(character);
            setCharacter("");
        }}>
            <input type="text"
                className={styles.search2}
                placeholder="Nombre del personaje"
                value={character}
                onChange={e => setCharacter(e.target.value)} />                       
                <input type="submit" className={styles.boton} value="Buscar" />       
        </form>
    )
}