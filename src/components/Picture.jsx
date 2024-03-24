import { useState } from "react";
import data from "../helper/data";

export default function Picture() {

  const [clickLike, setClickLike] = useState (false); 
  const handleClickLike = (e) => {
    setClickLike(!clickLike)
  }

    return (
      <div className="pictureContainer">
        {data.map((item, index) => (
          <div key={index} className = "pictureMain">
            <div className="picture"><img src={item.src.large} alt={item.photographer} /></div>
            <div className="h1-like">
              <h1>{item.photographer}</h1>
              <div onClick={ (e) => handleClickLike(e)} className="like">
                {
                  clickLike?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i> 
                }
                
                
              </div>
              

              
             
            </div>
          </div>
        ))}
      </div>
    );

  }