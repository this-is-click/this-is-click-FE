// Post.js

import React from 'react';

function Post({ user, content, image }) {
  return (
    <div className="post">
      <div className="user-info">
        <img src={user.profilePicture} alt={user.name} />
        <p>{user.name}</p>
      </div>
      <p className="post-content">{content}</p>
      {image && <img src={image} alt="Post" className="post-image" />}
    </div>
  );
}

export default Post;
