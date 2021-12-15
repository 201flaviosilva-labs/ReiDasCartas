import React from "react";
import * as GI from "react-icons/gi";

import "./style.css";

export default function Card({ id, title, asset, isOwner }) {
	const Image = GI[asset];
	const size = 275;

	const style = {
		opacity: isOwner ? 1 : 0.25,
	};
	return (
		<div className="card" style={style}>
			<p className="card-number">{id}</p>
			{/* <img src="http://placehold.it/275x350" alt="card" className="card-image" /> */}
			<Image size={size} className="card-image" />
			<p className="card-title">{title}</p>
		</div>
	)
}
