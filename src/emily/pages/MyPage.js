import React from "react";
import Board from "../components/Board/Board";
import test from "../test";

const MyPage = () => {
  return (
    <div>
      <div style={{ fontSize: "50px", fontWeight: "bold", margin: "30px" }}>
        My Pape
      </div>
      <Board title="Book Mark" info={test}></Board>
      <Board title="MY Posts" info={test}></Board>
    </div>
  );
};

export default MyPage;
