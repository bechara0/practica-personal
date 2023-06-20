import React from "react";

export const Editar = (tareaNueva) => {
  const tituloComponente = "Editar Película";
  const guardarEdicion = (e, id) => {
    e.preventdefault();
    //conseguir target evento
    let target = e.target;
    // buscar indice de tarea a buscar
    const tareas_almacenadas = conseguirTareas();
    const indice = tareas_almacenadas.findIndex(
      (tareaNueva) => tareaNueva.id === id
      );
    // crear objeto con el id de ese indice
      let tarea_actualizada = {
          id,
          tarea: target. ///// aca quede
      }
  };
  return (
    <div>
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, tareaNueva)}>
        <div className="contenedor-form">
          <label className="label-1">Actualizar Tarea</label>
          <input
            className="ingreso"
            type="text"
            name="ingreso"
            placeholder="Actualice aquí su Tarea"
          ></input>
          <input type="submit" value="Actualizar" className="editar"></input>
        </div>
      </form>
    </div>
  );
};
