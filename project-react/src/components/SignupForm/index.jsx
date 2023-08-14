import { useForm } from "react-hook-form";

const SignupForm = () => {
  //Cuando no se le coloca valores al input manda error con el objeto de formState
  const { register, handleSubmit, reset, formState: { errors } } = useForm(); 

  const handleClearClick = () => {
    reset(); //Campo global de react-hook-form para limpiar los inputs
  };

  //Hacemos un objeto para tomar todos los valores
  const handleSubmitForm = (data) => {
    console.log(data); //Estructura de reack-hook-form que trae configurado el preventDefault con data
  };

  console.log(errors); //Llamando a errors del object destructuring

  return (
    //El submit tiene un comportamiento por default, se agrega un evento a la funcion
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} />{" "}
        {/* Llamamos las llaves y el argumento required is true para requerir el campo y asi se aplica en los demas. */}
      </label>
      <br />
      <label>
        Age
        <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} />
      </label>
      <br />
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>{" "}
        {/*Eventos a cada uno de los botones, tipo botton para enfocarse en el clear y no en submit  */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
