import React from "react";

import "./style.css";

export default function Card() {
	return (
		<div className="card">
			<p className="card-number">0</p>
			<img src="http://placehold.it/275x350" alt="card" className="card-image" />
			<p className="card-title">Title</p>
		</div>
	)
}
