import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyPost.css'
import axios from 'axios';

const MyPost = ({heading="My posts"}) => {

    const [posts, setPosts] = useState([]);
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = {
        'authToken': jwtToken,
    };
    const [change,setChange]=useState('false');
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/get/myPost', { headers })
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);

            });
    }, [change]);
    const handleDelete = (postId) => {
        
        axios.delete(`http://127.0.0.1:8000/delete/posts/${postId}`,{headers})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);

            });
            axios.get('http://127.0.0.1:8000/get/myPost', { headers })
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);

            });
    }

    return (
        <div>
            <h2 className='mypost'>{heading}</h2>
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
                        <div className='footer'>
                        <p>Published on: {post.published_at}</p>
                        <p>Author: {post.author_name}</p>
                        </div>
                        <Link to={`/post/${post.id}`}>View Details</Link>
                        <div className="edit-delete-options">
                            <Link to={`/post/${post.id}/edit`}>Edit</Link>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                    
                    </div>
                   
                </div>





            ))}
        </div>
    );
};

export default MyPost;
