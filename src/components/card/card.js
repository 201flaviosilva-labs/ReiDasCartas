import React from "react";
import CardImage from "../cardImage/CardImage";

import "./style.css";

export default function Card({ id, title, assets, isOwner, onCardSelected }) {
	const asset = assets[0];
	const size = 275;

	const style = {
		opacity: isOwner ? 1 : 0.25,
	};

	return (
		<div
			title={title}
			className="card"
			style={style}
			onClick={() => onCardSelected(id)}
		>
			<p className="card-number">{id}</p>
			<CardImage asset={asset} selectedCard={title} size={size} />
			<p className="card-title">{title}</p>
		</div>
	)
}
