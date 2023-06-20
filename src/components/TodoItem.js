import React from "react";

export const TodoItem = () => {
  return (
    <div className="container-items">
      <div className="targeta-item">
        <h3 className="title-ietm">Sacar la basura</h3>
        <p>16/06/2023</p>
        <div className="botones-items">
          <input
            type="button"
            value="Completo"
            className="item-completo"
          ></input>
          <input type="button" value="Editar" className="item-editar"></input>
          <input
            type="button"
            value="Eliminar"
            className="item-eliminar"
          ></input>
        </div>
      </div>
      <div className="targeta-item">
        <h3 className="title-ietm">
          Comprar bicicleta con 25 cambios, de color roja y rodado 26''
        </h3>
        <p>16/06/2023</p>
        <div className="botones-items">
          <input
            type="button"
            value="Completa"
            className="item-completo"
          ></input>
          <input type="button" value="Editar" className="item-editar"></input>
          <input
            type="button"
            value="Eliminar"
            className="item-eliminar"
          ></input>
        </div>
      </div>
      <div className="targeta-item">
        <h3 className="title-ietm">Tomar ibuprofeno</h3>
        <p>15/06/2023</p>
        <div className="botones-items">
          <input
            type="button"
            value="Completa"
            className="item-completo"
          ></input>
          <input type="button" value="Editar" className="item-editar"></input>
          <input
            type="button"
            value="Eliminar"
            className="item-eliminar"
          ></input>
        </div>
      </div>
      <div className="targeta-item">
        <h3 className="title-ietm">Pasear el perro</h3>
        <p>15/06/2023</p>
        <div className="botones-items">
          <input
            type="button"
            value="Completa"
            className="item-completo"
          ></input>
          <input type="button" value="Editar" className="item-editar"></input>
          <input
            type="button"
            value="Eliminar"
            className="item-eliminar"
          ></input>
        </div>
      </div>
    </div>
  );
};
