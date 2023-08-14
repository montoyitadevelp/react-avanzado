import EventItem from "./Events/components/EvenItem";
import useEventsData from "../hooks/useEventsData";

//Una vez que el padre se ha actualizado, se renderea searchTerm y esta sirve para filtrar los eventos
const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData();
  
  const handleEventItemClick = (id) => {
    //Recibimos el id como evento en el componente hijo
    console.log("evento clickeado: ", id);
  };

  //Regresando cada uno de los elementos con su mapeo, y para pasar las props hay que agregarle parentesis
  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      //Haciendo un filtrado
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      ); //Poner todo el nombre del evento en minuscula y si viene incluido en cada uno de las listas entonces busca el SearchTerm
    }
    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };
  
  //Hacer un rendereo condicional, error
  if (error) {
    return <div>Ha ocurrido un error</div>;
  } 

  //Este para saber si la informacion esta correcta
  if (isLoading) {
    return <div>Cargando resultados</div>
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
