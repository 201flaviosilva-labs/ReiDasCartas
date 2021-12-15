import React from "react";

import Card from "../card/card";
import Cards from "../../Cards";

import "./style.css";

export default function CardBook() {
	return (
		<div className="cardBook">
			<ul className="cardBook-container">
				{
					Cards.map((card, index) => {
						return <Card
							key={index}
							id={index + 1}
							title={card.title}
							asset={card.asset}
							isOwner={false}
						/>;
					})
				}
			</ul>
		</div>
	)
}
