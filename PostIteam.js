import React from 'react'
import './PostIteam.css'
const PostIteam = ({ post }) => {
  return (
    <form>
        <div className='div1'>
            <div className='title'>
                <h1>Title :- {post.title}</h1>
            </div>
            <div className='img'> 
                <img src={post.image} />
            </div>
            <div className='title'>
                <h1>Price :- {post.price}</h1>
            </div>
         </div>

    </form>
  )
}

export default PostIteam