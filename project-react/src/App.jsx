import { useState, useRef } from "react";
import Events from "./components";
import Navbar from "./components/NavBar";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(); //Cuando declaramos a componentes ref se utiliza vacio

  const handleNavBarSearch = (term) => {
    console.log(containerRef.current.getterSomething) //Asi accedemos al elemento buscado, además para metdis o valores de setInput
    setSearchTerm(term);
  };

  return (
    <>
      <SignupForm />
      {/*Navbar tiene que comunicala a Events, mediante un filtrado de hijo a padre, y el padre mandarlo a Events  */}
      <Navbar onSearch={handleNavBarSearch} ref={containerRef} />
      {/*Obligo al componente reciba esa propiedad, y cuando el usario de keydown al enter, llame a esa funcion  */}
      <Events searchTerm={searchTerm} />
      {/*Cuando le den enter se estara actualizando  */}
    </>
  );
}

export default App;
