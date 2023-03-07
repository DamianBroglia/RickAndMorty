import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card"
import styles from "./Cards.module.css"

export default function Favorites({ characters, onClose }) {
    const myFavorites = useSelector((s) => s.myFavorites)
    const favCharacters = characters.filter((e) => {
        return myFavorites.includes(e.id)
    })
    
    if (favCharacters.length > 0) {
        return (
            <div className={styles.cards}>
                {favCharacters.map(p =>
                    <Card
                        id={p.id}
                        name={p.name}
                        species={p.species}
                        gender={p.gender}
                        image={p.image}
                        onClose={() => onClose(p.id)} />)
                }
            </div>
        );
    } else {
        return (
            <div className={styles.msj}> No hay personajes favoritos</div>
        )
    }
}



