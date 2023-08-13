import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SavedPost.css'
import axios from 'axios';

const SavedPost = () => {

    const [posts, setPosts] = useState([]);
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = {
        'authToken': jwtToken,
    };
    const [change,setChange]=useState('false');
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/author/savedPosts', {headers})
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);

            });
    }, [change]);
  

    return (
        <div>
            <h2 className='mypost'>Saved Posts</h2>
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
                        <Link to={`/post/${post.id}`}>View Details</Link>
                        <div className='footer'>
                        <p>Published on: {post.published_at}</p>
                        <p>Author: {post.author_name}</p>
                        </div>
                        
                       
                    
                    </div>
                    
                </div>





            ))}
        </div>
    );
};

export default SavedPost;
