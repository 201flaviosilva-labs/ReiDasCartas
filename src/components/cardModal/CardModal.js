import { RiCloseLine } from "react-icons/ri";
import CardsList from "../../Cards/Cards";
import CardImage from "../cardImage/CardImage";

import "./style.css";

export default function CardModal({ selectedCardID, setSelectedCardID }) {
	const selectedCard = CardsList.find((card) => card.id === selectedCardID);
	const size = 275;

	function closeModal() { setSelectedCardID(null); }

	return (
		<div className="modal-container">
			<div className="modal-header">
				<h1>{selectedCard.title}</h1>

				<button className="modal-close-button" onClick={closeModal}>
					<RiCloseLine />
				</button>

			</div>

			<div className="modal-body">
				<div className="modal-body-image-container">
					{
						selectedCard.assets.map((asset, index) => {
							return <CardImage
								key={index}
								asset={asset}
								selectedCard={selectedCard}
								size={size}
							/>
						})
					}
				</div>

				<div className="modal-body-description">
					<p>{selectedCard.description}</p>
				</div>

				<div className="modal-body-author">
					<p>
						<a href={selectedCard.author[0].homepage}>
							{selectedCard.author[0].name}
						</a>
					</p>
				</div>
			</div>

			<div className="modal-footer">
				<button
					title={"Price by the card"}
				>{selectedCard.price === 0 ? "Free" : selectedCard.price}</button>
			</div>
		</div>
	)
}
