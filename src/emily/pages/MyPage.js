import React, { useEffect } from "react";
import Board from "../components/Board/board";
import test from "../test";
// Book Mark 에 쓰일 데이터
import getMyBookmark from "../service/getMyBookmark";
// MY Posts 에 쓰일 데이터
import getMyPosts from "../service/getMyPosts";

const MyPage = () => {
  // const myBookmark = getMyBookmark();
  // const myPosts = getMyPosts();
  // const [postsInfo,setPostsInfo]=useEffect([])
  // const [bookMarkInfo,setBookMarkInfo]=useEffect([])
  // useEffect(async()=>{
  //   const bookmark= await myBookmark ();
  //   const posts= await myPosts();
  //   await setPostsInfo(bookmark)
  //   await setBookMarkInfo(bookMarkInfo)

  // },
  // [])
  // 위 데이터가 잘 가져와 지면 test 대신 postsInfo 와 bookMarkInfo 사용
  return (
    <div>
      <div style={{ fontSize: "50px", fontWeight: "bold", margin: "30px" }}>
        My Page
      </div>
      <Board title="Book Mark" info={test}></Board>
      <Board title="My Posts" info={test}></Board>
    </div>
  );
};

export default MyPage;
