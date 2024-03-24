import React, { useState } from "react";

function PictureCard() {
	const [clickLike, setClickLike] = useState(false);
	const handleClickLike = (e) => {
      console.log(e.target)
		setClickLike(!clickLike);
	};
	return (
		<div>
			<div onClick={(e) => handleClickLike(e)} className="like">
				{clickLike ? (
					<i className="fa-solid fa-heart"></i>
				) : (
               <i className="fa-regular fa-heart"></i>
				)}
			</div>
		</div>
	);
}

export default PictureCard;
