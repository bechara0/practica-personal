import React from "react";

export const Editar = ({
  tareaNueva,
  setListadoState,
  conseguirTareas,
  setEditar,
}) => {
  const tituloComponente = "Editar Tarea";
  const guardarEdicion = (e, id) => {
    e.preventDefault();
    //conseguir target evento
    let target = e.target;
    // buscar indice de tarea a buscar
    const tareas_almacenadas = conseguirTareas();
    const indice = tareas_almacenadas.findIndex(
      (tareaNueva) => tareaNueva.id === id
    );
    // crear objeto con el id de ese indice
    let fecha = new Date().toLocaleDateString();
    let tarea_actualizada = {
      id,
      tarea: target.editar.value, ///// aca quede
      fecha: fecha,
    };
    // actualizar el elemento con el indice
    tareas_almacenadas[indice] = tarea_actualizada;
    // guarda nuevo array en local storage
    localStorage.setItem("tareasNuevas", JSON.stringify(tareas_almacenadas));
    //actualizar estados
    setListadoState(tareas_almacenadas);
    setEditar(0);
  };
  return (
    <div className="editar_tarea">
      <h3 className="title-editar">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, tareaNueva.id)}>
        <div className="contenedoreditar-form">
          <input
            className="editar"
            type="text"
            name="editar"
            placeholder="Actualice aquí su Tarea"
          ></input>
          <input
            type="submit"
            value="Actualizar"
            className="editar-boton"
          ></input>
        </div>
      </form>
    </div>
  );
};
