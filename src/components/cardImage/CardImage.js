export default function CardImage({ asset, selectedCard, size }) {
	const ImageComp = asset.Asset;

	return (
		<>
			{
				asset.isComponent ?
					<ImageComp
						alt={selectedCard.title}
						size={size}
						className="modal-body-image"
					/> :
					<img
						src={asset.Asset}
						alt={selectedCard.title}
						width={size}
						height={size}
						className="modal-body-image"
					/>
			}
		</>
	)
}
