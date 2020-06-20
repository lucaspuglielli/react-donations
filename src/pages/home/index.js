import React from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import Container from "../../components/container";
import Depoimento from "../../components/depoimento";
import Footer from "../../components/footer";
import "../../global.css";

function Home() {
	const titulo = "Pagina principal";
	const listaDeCards = [
		<Card key="1" titulo="Doação de brinquedos" descricao="lalalalalala" />,
		<Card key="2" titulo="Doação de alimento" descricao="kakakakakaka" />,
		<Card key="3" titulo="Doação de equipamento" descricao="jajajajajaja" />,
	];
	const listaDeDepoimentos = [
		<Depoimento
			key="1"
			nome="Bolinha"
			titulo="Excelente!"
			texto="Uau! Mudou minha vida!"
		/>,
		<Depoimento
			key="2"
			nome="Faustinho Silva"
			titulo="Olokinho meu!"
			texto="Ta pegando foguinho bixo!"
		/>,
		<Depoimento
			key="3"
			nome="Xulambis"
			titulo="Xablau!"
			texto="Xirofompila!"
		/>,
	];
	return (
		<>
			<Header />
			<h1 className="titulo">{titulo}</h1>
			<div className="container">{listaDeCards}</div>
			<Container>
				<section>
					<h1 className="titulo">Depoimentos</h1>
					<div className="container">{listaDeDepoimentos}</div>
				</section>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
