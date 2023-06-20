import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const TodoItem = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    console.log("Componente de listado de tareas cargado");
    conseguirTareas();
  }, []);

  const conseguirTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareasNuevas"));
    setListadoState(tareas);
    return tareas;
  };

  // para borrar tareas
  const borrarTarea = (id) => {
    // conseguir tareas almacenadas
    let tareas_almacenadas = conseguirTareas();
    //filtrar la tarea que quiero eliminar
    let nuevo_array_tareas = tareas_almacenadas.filter(
      (tareaNueva) => tareaNueva.id !== parseInt(id)
    );
    // actualizar estado de la lista de tareas
    setListadoState(nuevo_array_tareas);
    // actualizar local storage
    localStorage.setItem("tareasNuevas", JSON.stringify(nuevo_array_tareas));
  };

  return (
    <div className="container-items">
      {listadoState.map != null ? (
        listadoState.map((tareaNueva) => {
          return (
            <div key={tareaNueva.id} className="targeta-item">
              <h3 className="title-ietm">{tareaNueva.tarea}</h3>
              <p>{tareaNueva.fecha}</p>
              <div className="botones-items">
                <input
                  type="button"
                  value="Completa"
                  className="item-completo"
                ></input>
                <input
                  onClick={() => {
                    setEditar(tareaNueva.id);
                  }}
                  type="button"
                  value="Editar"
                  className="item-editar"
                ></input>
                {/* Aparece formulario editar */}
                {editar === tareaNueva.id && (
                  <Editar
                    tareaNueva={tareaNueva}
                    conseguirTareas={conseguirTareas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                  />
                )}
                <input
                  type="button"
                  value="Eliminar"
                  className="item-eliminar"
                  onClick={() => borrarTarea(tareaNueva.id)}
                ></input>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="sin-tareas">No hay tareas para mostrar</h2>
      )}
    </div>
  );
};
