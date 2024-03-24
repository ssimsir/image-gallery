import data from "../helper/data";
import PictureCard from "./PictureCard";

export default function Picture() {



    return (
      <div className="pictureContainer">
        {data.map((item, index) => (
          <div key={index} className = "pictureMain">
            <div className="picture"><img src={item.src.large} alt={item.photographer} /></div>
            <div className="h1-like">
              <h1>{item.photographer}</h1>
                <PictureCard/>
              
            </div>
          </div>
        ))}


      </div>
    );

  }