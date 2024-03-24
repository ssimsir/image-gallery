import React, { useState } from "react";

function PictureCard({pictureName}) {
	const [clickLike, setClickLike] = useState(false);
	const handleClickLike = (e) => {
      console.log(e.target)
		setClickLike(!clickLike);
	};
   //console.log(pictureName)
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
