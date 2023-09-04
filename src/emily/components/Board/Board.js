import React from "react";
import Card from "../Card/card";
import "./board.css";

const Board = (props) => {
  const data = [...props.info];
  return (
    <div>
      <div className="board-container">
        <div className="board-title">{props.title}</div>
        {data.map((a) => {
          return (
            <Card
              id={a.id}
              title={a.title}
              content={a.content}
              image={a.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
