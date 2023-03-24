import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../Redux/actions";

export default function Card(props) {
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((s) => s.myFavorites)

   function handleFavorite(ch) {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFavorites(ch.id))
      } else {
         setIsFav(true)
         dispatch(addFavorites(ch))
      }
   }

   useEffect(() => {
      myFavorites.forEach((ch) => {
         if (ch.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         <button onClick={props.onClose} className={styles.closeBt}>X</button>
         <Link to={`/Detail/${props.id}`}>
            <img src={props.image} className={styles.image} alt="Image not found" />
            <h2 className={styles.name}>{longName(props.name)}</h2>
            <h2 className={styles.data}>
               <p>Species:</p>{longSpecies(props.species)}</h2>
            <h2 className={styles.data2}>
               <p>Gender:</p>{props.gender}</h2>
         </Link>
         {
            isFav ? (
               <button onClick={() => handleFavorite(props)} className={styles.favorito}>❤️</button>
            ) : (
               <button onClick={() => handleFavorite(props)} className={styles.favorito}>🤍</button>
            )
         }
      </div>

   );
}

function longName(name) {
   if (name.length > 15) {
      return name.slice(0, 15)
   } else {
      return name;
   }
}

function longSpecies(species) {
   if (species.length > 12) {
      return species.slice(0, 12)
   } else {
      return species;
   }
}


