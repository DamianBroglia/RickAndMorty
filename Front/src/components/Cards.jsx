import Card from './Card';
import styles from "./Cards.module.css" 

export default function Cards({characters, onClose}) {
  if(characters.length > 0){
   return (
      <div className={styles.cards}>  
       {    characters.map (p => 
            <Card 
            key = {p.id}
            id = {p.id}
            name={p.name}
            species={p.species}
            gender={p.gender}
            image={p.image}
            onClose={() => onClose(p.id)}/>)
         }
   </div>   
   );
}else{
      return(
         <div className={styles.msj}> No hay personajes seleccionados</div>
      )
   }
}
