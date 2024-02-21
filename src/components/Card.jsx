import React from "react";
import "./card.css";
import dummyData from "../data";
const Card = () => {
  return (<>
    {dummyData && dummyData.map((obj)=>{
        return <div className="card-cont">
        <div className="img-cont">
          <img
            src={obj.imageUrl}
            alt=""
          />
        </div>
        <div className="info-cont">
          <p className="title">{obj.title}</p>
          <p className="price">$ {obj.price}</p>
        </div>
      </div>
    })}
  </>);
};

export default Card;
