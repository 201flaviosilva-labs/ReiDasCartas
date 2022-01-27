import React from "react";
import * as GI from "react-icons/gi";

import "./style.css";

export default function Card({ id, title, assets, isOwner, onCardSelected }) {
	const Image = GI[assets[0]];
	const size = 275;

	const style = {
		opacity: isOwner ? 1 : 0.25,
	};

	return (
		<div className="card" style={style} onClick={() => onCardSelected(id)}>
			<p className="card-number">{id}</p>
			<Image size={size} className="card-image" />
			<p className="card-title">{title}</p>
		</div>
	)
}
