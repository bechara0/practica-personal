import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Entradas = ({ setListadoState }) => {
  const [tareaState, setTareaState] = useState({
    tarea: "",
    fecha: "",
  });
  const { tarea, fecha } = tareaState;
  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // conseguir datos form

    let tarea = e.target.ingreso.value;
    let fecha = new Date().toLocaleDateString();
    // crear el objeto tarea a guardar
    let tareaNueva = {
      id: new Date().getTime(),
      tarea,
      fecha,
    };
    //guardar estado
    setTareaState((prevState) => ({ ...prevState, ...tareaNueva }));

    //actualizar estado
    setListadoState((elementos) => {
      return [...elementos, tareaNueva];
    });

    //guardar el local storage
    GuardarEnStorage("tareasNuevas", tareaNueva);
  };

  return (
    <div>
      <form onSubmit={conseguirDatosForm}>
        <div className="contenedor-form">
          <label className="label-1">Nueva Tarea</label>
          <input
            className="ingreso"
            type="text"
            name="ingreso"
            placeholder="Escriba su nueva Tarea"
          ></input>
          <input
            type="submit"
            value="guardar"
            className="boton-enviar"
            id="save"
          ></input>
        </div>
      </form>
      <p className="tarea-agregada">
        {tarea && fecha && "Nueva tarea: " + tarea}
      </p>
    </div>
  );
};
