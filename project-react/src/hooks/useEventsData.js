import { useState, useEffect } from "react";
import eventsJSON from "../data/events.json";

//Creamos nuesto propio hook utilizando un hook original, y este funciona ya que se usa en JSX
const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  //useEffect se va mandar a llamar y se va ejecutar y deja un timeout 4s, simplemente va cargar la informacion en la referencia
  useEffect(() => {
    setTimeout(() => {
      try {
        //Cuando se va actualizar el error? se hace un try catch si ocurre un error, en try va toda la informacion si sale bien, y cuando hay un error manda el error
        setData(eventsJSON); //En este caso es mejor usar un useState
        setIsLoading(false); //Cuando la data ya este lista es falso
      } catch (error) {
        setError(error);
      }
    }, 4000);
    // Cargar la API CALL
  }, []);

  return {
    events: data?._embedded?.events || [], //? en caso de que no exista, sino existe events = undefined
    isLoading,
    error,
  };
};

export default useEventsData;
