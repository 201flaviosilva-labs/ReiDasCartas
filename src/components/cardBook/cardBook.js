import React from "react";

import Card from "../card/card";
import CardsList from "../../Cards/Cards";

import "./style.css";

export default function CardBook({ onCardSelected }) {
	return (
		<div className="cardBook">
			<ul className="cardBook-container">
				{
					CardsList.map((card, index) => {
						return <Card
							key={index}
							id={card.id}
							title={card.title}
							assets={card.assets}
							isOwner={false}
							onCardSelected={onCardSelected}
						/>;
					})
				}
			</ul>
		</div>
	)
}
