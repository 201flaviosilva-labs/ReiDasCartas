import { useState } from "react";
import CardBook from "../cardBook/cardBook";
import Modal from "../cardModal/CardModal";

import "./style.css";

export default function Main() {
	const [selectedCardID, setSelectedCardID] = useState(0);

	function onCardSelected(id) {
		setSelectedCardID(id);
		console.log("Card selected: " + id);
	}

	return (
		<div className="main-container">
			<CardBook
				onCardSelected={onCardSelected}
			/>

			{
				selectedCardID && <Modal
					selectedCardID={selectedCardID}
					setSelectedCardID={setSelectedCardID}
				/>
			}
		</div>
	)
}
