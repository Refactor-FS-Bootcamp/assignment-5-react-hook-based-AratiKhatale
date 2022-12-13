import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostIteam from './PostIteam'
const PostList = () => {
    const [posts, setPosts] = useState( [] )

    useEffect( () => {
      const url='https://fakestoreapi.com/products'
      axios.get(url)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[])
  return posts.map( post => <PostIteam key={post.id} post={post} />)
}

export default PostList

//image, title and price