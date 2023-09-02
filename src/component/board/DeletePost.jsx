import React from "react";
import axios from "axios";

function DeletePost({ post_Id }) {
  const handleDelete = async () => {
    try {
      const apiAddress = `http://localhost:8080/api/posts/${post_Id}`;
      const response = await axios.delete(apiAddress);
      console.log("글 삭제 완료:", response.data);
    } catch (error) {
      console.error("글 삭제 실패", error);
    }
  };

  return (
    <div>
      <h2>글 삭제</h2>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default DeletePost;
