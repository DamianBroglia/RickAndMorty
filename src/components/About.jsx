
import styles from "./About.module.css"
import image from "../img/AppImagen.jpg"


export default function About() {
    return (
        <div className={styles.container}>
            <p>Aplicacion creada en el curso "Web Full Stack" de SoyHenry por:</p>

            <div className={styles.card}>
         
         {/* <Link to={`/Detail/${props.id}`}> */}
            <img src={image}  className={styles.image} alt="Image not found" />
            <h2 className={styles.name}>Damian Broglia</h2>
            <h2 className={styles.data}>
               <p>Species:</p>Human</h2>
            <h2 className={styles.data2}>
               <p>Gender:</p>Male</h2>
         {/* </Link> */}

      </div>
        </div>
    )
}