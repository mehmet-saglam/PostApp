import React from 'react'

const PostList = ({text, deletePost}) => {
  return (
    <div>
        
      {text.map((post, index) => (
          <div className ="Box">
          <p key={index}>{post.post}</p>
          
          <button
            className='Sil'
            onClick={() => {
              deletePost(post.id);
            }}
          >
            Sil
          </button>      
          </div>
      ))}
    </div>
  )
}

export default PostList
