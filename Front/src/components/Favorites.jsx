import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, filterCardsSpecies, reset } from "../Redux/actions";
import Card from "./Card"
import styles from "./Cards.module.css"
import styles2 from "./Favorites.module.css"



export default function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector((s) => s.myFavorites)
    const myFavorites2 = useSelector((s) => s.myFavoritesOrigin)

    if (myFavorites2.length > 0) {
        function handleClick(e) {
            e.preventDefault();
            const { name, value } = e.target
            if (name === "filter") {
                return dispatch(filterCards(value))
            }
            if (name === "order") {
                dispatch(orderCards(value))
            }
            if (name === "filterSpecies") {
                dispatch(filterCardsSpecies(value))
            }
        }
        return (
            <div className={styles.cards}>
                <div>
                    <nav className={styles2.navFilter}>
                    <select className={styles2.select} name="order" defaultValue={"DEFAULT"} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Select order</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                    <select className={styles2.select} name="filter" defaultValue={"DEFAULT"} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Select filter</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <select className={styles2.select} name="filterSpecies" defaultValue={"DEFAULT"} onChange={handleClick}>
                        <option value="DEFAULT" disabled>Select filter</option>
                        <option value="Human">Human</option>
                        <option value="Humanoid">Humanoid</option>
                        <option value="Alien">Alien</option>
                        <option value="Animal">Animal</option>
                        <option value="Robot">Robot</option>
                        <option value="Mythological Creature">Mythological</option>
                        <option value="Cronenberg">Cronenberg</option>
                        <option value="Disease">Disease</option>
                        <option value="Poopybutthole">Poopybutthole</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <div>
                        <button className={styles2.selecButton} onClick={() => dispatch(reset())}>
                            Reset
                        </button>
                    </div>
                    </nav>
                </div>
                {myFavorites.map(p =>
                    <Card
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        species={p.species}
                        gender={p.gender}
                        image={p.image} />)
                }
            </div>
        );
    } else {
        return (
            <div className={styles.msj}> No hay personajes favoritos</div>
        )
    }
}



