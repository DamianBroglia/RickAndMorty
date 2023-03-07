import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar ({ onSearch }) {
    const[character, setCharacter] = useState ("")
    return (
    <form onSubmit ={(e) => {
        e.preventDefault();
         onSearch(character);
         setCharacter("")
    }}>
        <input type="text" 
        className={styles.search}
        placeholder="Id del personaje"
        value = {character}
        onChange = {e => setCharacter(e.target.value)}/>
        <input type="submit" className={styles.boton} value="Agregar"/>
    </form>
)
}