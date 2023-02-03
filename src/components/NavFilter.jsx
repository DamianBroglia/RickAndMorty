import { useState } from "react"
import Filter from "./Filter"
import styles from "./NavFilter.module.css"

export default function NavFilter({ filter, filterStatus, filterSpecies, filterGender }) {
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [gender, setGender] = useState("")


    return (
        <nav className={styles.nav}>
            <Filter filter={filter} />
            <div className={styles.div}>
                <p>Status:</p>
                <select name="status"  onClick={(e) => {
                    setStatus(e.target.value)
                    filterStatus(status)

                }}>
                    <option value="" >All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>

            <div className={styles.div}>
                <p>Species:</p>
                <select name="species"  onClick={(e) => {
                    setSpecies(e.target.value)
                    filterSpecies(species)
                }}>
                    <option value="" >All</option>
                    <option value="Human">Human</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Alien">Alien</option>
                    <option value="Animal">Animal</option>
                    <option value="Robot">Robot</option>
                    <option value="Mythological Creature">Mythological</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Disease">Disease</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                </select>
            </div>
            <div className={styles.div}>
                <p>Gender:</p>
                <select name="gender"  onClick={(e) => {
                    setGender(e.target.value)
                    filterGender(gender)

                }}>
                    <option value="" >All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
        </nav>
    )
}