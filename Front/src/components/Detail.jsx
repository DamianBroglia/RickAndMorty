import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css"
import { useParams, Link } from "react-router-dom";


export default function Detail() {
    const { detailid } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${detailid}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailid]);

    return (
        <div className={styles.general}>
            <img src={character.image} className={styles.foto} alt={character.name} />
            <div>
                <h1 className={styles.name}>{longName(character.name)}</h1>
                {character.status === "Dead" ? <h2 className={styles.caract}>-Status: ❌{character.status}</h2> : null}
                {character.status === "Alive" ? <h2 className={styles.caract}>-Status: ✅{character.status}</h2> : null}
                {character.status === "unknown" ? <h2 className={styles.caract}>-Status: ❔{character.status}</h2> : null}
                <h2 className={styles.caract2}>-Species: {longSpecies(character.species)}</h2>
                <h2 className={styles.caract3}>-Gender: {character.gender}</h2>
                <p className={styles.nid}>#{character.id}</p>
                <Link to="/home">
                    <button className={styles.button}>Volver</button>
                </Link>
            </div>
        </div>

    )
}
function longSpecies(species) {
    if (species) {
        if (species.length > 12) {
            return species.slice(0, 12)
        } else {
            return species;
        }
    }
}
function longName(name) {
    if (name)
        if (name.length > 15) {
            return name.slice(0, 15)
        } else {
            return name;
        }
}



