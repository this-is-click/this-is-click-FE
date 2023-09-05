import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';


function List({ data, setData }) {
  const navigate = useNavigate();
  const handleEditClick = (data) => {
    navigate(`/editPost`, {state: {data}});
  };

  const handleDeleteClick = async (postId) => {
    const confirmDelete = window.confirm("삭제하실건가요?");
    if (confirmDelete) {
      try {
        /*
        const apiAddress = `http://localhost:8080/api/posts/${post_id}//`; 
        await axios.get(apiAddress);
        */
        setData( exdata => exdata.filter(item => item.post_id !== postId ))
        console.log(`삭제되었습니다. (게시물 ID: ${postId})`);
      } catch (error) {
        console.error("에러", error);
      }
    }
  };
  return (
    <div className="list">
      {data.map((item) => 
        <Post item={item} setData={setData}/>)}
    </div>
  )
}

export default List;