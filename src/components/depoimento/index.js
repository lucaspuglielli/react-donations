import React from "react";
import "./style.css"

function Depoimento (props) {
    return(
        <div className="carddepoimento">
            <h2>{props.nome}</h2>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}

export default Depoimento