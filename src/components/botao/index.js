import React from "react";
import "./style.css"

function Botao (props) {
    return(
        <button className={"botao " + props.tipo}>
            {props.texto}
        </button>
    )
}

export default Botao