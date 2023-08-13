import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostList.css'
import axios from 'axios';

const PostList = ({ filter }) => {

  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState([]);

  useEffect(() => {
    console.log(filter);
    axios.get('http://127.0.0.1:8000/get/topPosts')
      .then((response) => {
        console.log(response.data);
        setTopPost(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);

      });




    if (filter.author != '') {
      console.log(filter.author);
      axios.get(`http://127.0.0.1:8000/get/post/author/${filter.author}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    else if (filter.date != '') {
      console.log('inside 2');
      axios.get(`http://127.0.0.1:8000/get/post/filter/date/${filter.date}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    else if (filter.sortby != '') {
      console.log('inside 2');
      axios.get(`http://127.0.0.1:8000/get/post/filter/likesAndComments/${filter.sortby}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });

    }
    // 
    else if (filter.search != '') {
      axios.get(`http://127.0.0.1:8000/posts/search?search=${filter.search}`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });


    }
    else {
      console.log('inside 3');
      axios.get('http://127.0.0.1:8000/posts/all')
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);

        });
    }

    if (topPost.length > 3) {
      topPost.splice(3, topPost.length - 3);
    }




  }, [filter]);

  function fundate(postdate) {
    const dateTimeString = postdate;

  const dateObj = new Date();


  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return formattedDate;
  }

  

  return (
    <div>
      <div className='trend'>
        <h2>Tranding Posts</h2>
        
      </div>
      {topPost.map((post) => (
        <div key={post.id} className="post">
          <div className="post-details">
          <div className='header'>
            <h3>{post.title}</h3>
            <p>Topic: {post.topic}</p>
            </div>
            <div className='bodydis'>
            <p>{post.text}</p>
            <img src={post.image} alt={post.title} />

            </div>
           <div className='linkbox'> <Link to={`/post/${post.id}`}>View Details</Link></div>
            <div className='footer'> 
            <p>Published on: {fundate(post.published_at)}</p>
          

            <p>Author: {post.author_name}</p>
            </div>
        
          </div>
         
        </div>
      ))}
      <h3>All Posts</h3>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-details">
            <div className='header'>
            <h3>{post.title}</h3>
            <p>Topic: {post.topic}</p>
            </div>
            <div className='bodydis'>
            <p>{post.text}</p>
            <img src={post.image} alt={post.title} />

            </div>
            <div className='linkbox'> <Link to={`/post/${post.id}`}>View Details</Link></div>
            <div className='footer'> 
            <p>Published on: {fundate(post.published_at)}</p>

            <p>Author: {post.author_name}</p>
            </div>
            {/* <Link to={`/post/${post.id}`}>View Details</Link> */}
          </div>
          {/* <img src={post.image} alt={post.title} /> */}
        </div>
      ))}
    </div>
    
  );
};

export default PostList;
