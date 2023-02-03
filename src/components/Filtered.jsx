import Card from './Card';
import styles from "./Cards.module.css" 

export default function Filtered({filterChar, onClose}) {
  if(filterChar){
   return (
      <div className={styles.cards}>  
       {    filterChar.map (p => 
            <Card 
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
