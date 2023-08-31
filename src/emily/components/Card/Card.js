import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div>
      <div className="container">
        <div className="id">{props.id}</div>
        <div className="box">
          <div className="box-title">{props.title}</div>
          <div className="box-content">{props.content}</div>
          <div className="box-img">
            <img src={props.image} alt="이미지 url"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
