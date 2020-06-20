import React from "react";
import PropTypes from "prop-types";
import Botao from "../botao"
import "./style.css"

function Card (props) {
    return(
        <div className="carddoacoes">
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <Botao texto="Eu quero" tipo="sucesso"></Botao>
        </div>
    )
}

Card.protoTypes = {
    titulo: PropTypes.string,
    descricao: PropTypes.string,
}

export default Card