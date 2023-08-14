import styles from "./EventItem.module.css";
console.log(styles);

//Aqui traemos estas props para mostrarlas en un componente EventItem
const EventItem = ({ info, id, name, image, onEventClick }) => {
  //Creamos una funcion para mejor descripción del codigo
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => console.log("padre clickeado")}
      className={`${styles.eventItemContainer} ${styles.anotherContainer}`} //Concatenacion para usar varias clases en module css
    >
      {/*Si queremos mostrar algun argumento lo utilizamos como arrow  */}
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
