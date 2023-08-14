import { useState, useEffect, forwardRef, useImperativeHandle } from "react"; //Con forwardRef se envia la ref directa al padre

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [input, setInput] = useState(""); //Sino escribimos nada en el parentesis es undefined(warning en consola), esto aplica para el input ''

  //Que se introduzca un actualización del padre al hijo
  useEffect(() => {
    console.log("onSearch cambio");
  }, [onSearch]);
  //Este toma dos argumentos el primero un callback, y el segundo un array que es el más importante
  useEffect(() => {
    console.log("Componente listo");
  }, []);

  useEffect(() => {
    console.log("input cambio");
  }, [input]);

  useImperativeHandle(ref, () => ({
    input, //Exponer el valor de input y acceder al valor de referencia
    setInput,
  })); //El primer arguemento es la referencia del padre, seguido por un aclback que regresa un objeto

  const handleInputChange = (evt) => {
    setInput(evt.target.value); //Actualizar el valor del estado hacerlo reactivo
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(input);
    }
  };

  return (
    //Hacer referencia para usarlo en useRef
    //Si queremos agregar estilo debemos hacerlo con un objeto
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        {/* Cada uno es 50% */}
        <p
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Mi boletera
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* Cada uno es 50% */}
        <input
          placeholder="Search your favorite event"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={input} //Un input tiene un value y controlamos el valor
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar"; //Regla para envolviendo un componente directamente con forwardRef

export default Navbar;
