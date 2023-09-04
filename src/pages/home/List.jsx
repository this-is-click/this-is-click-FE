import React from 'react';
import { useNavigate } from 'react-router-dom';


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
      {data.map((item) => (
        <div className="list-item" key={item.post_id}>
          <div className="list-item-text">
            <h2 className="list-item-title">{item.title}</h2>
            <p className="list-item-content">{item.content}</p>
            <img src={item.imageUrl} alt="Item" className="list-item-image" />
          </div>
          <div className="list-item-buttons">
              <button className="button" onClick={() => handleEditClick(item)}>
                수정하기
              </button>
              <button className="button" onClick={() => handleDeleteClick(item.post_id)}>
                삭제하기
              </button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default List;