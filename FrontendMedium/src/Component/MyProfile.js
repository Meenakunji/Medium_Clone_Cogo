import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MyProfile.css';
import MyPost from './MyPost';
import axios from 'axios';

const MyProfile = () => {
//   const { authorId } = useParams();
  const [activeTab, setActiveTab] = useState('home');
  const [aboutText, setAboutText] = useState('');
  const [authorDetails,setAuthorDetails]=useState('');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const jwtToken = localStorage.getItem('jwtToken');
  const headers = {
    'authToken': jwtToken
  };

  
  useEffect(()=>{
    console.log(headers);
    axios.get('http://127.0.0.1:8000/author/my/details',{headers})
      .then((response) => {
        setAuthorDetails(response.data);
        setAboutText(response.data.about)
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });


  },[])
  

  
  const handleAboutSubmit = () => {
    const val={
      about:aboutText
    }
    console.log(val);
    console.log(headers);
    axios.put('http://127.0.0.1:8000/authors/edit',{val},{headers})
      .then((response) => {
        //  setAboutText(val.about);
        // console.log(response.data);
        console.log(val.about)

      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });


  };

  return (
    <div className="author-profile">
      <div className="author-header">
        <h2>Author Name</h2>
        <div className="author-tabs">
          <button
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => handleTabChange('home')}
          >
            Home
          </button>
          <button
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => handleTabChange('about')}
          >
            About
          </button>
        </div>
      </div>
      <div className="author-content">
        {activeTab === 'home' ? (

          <MyPost/>
        ) : (
          /* Content for About tab */
          <div>
          
            <div class="author-section">
    <h1>Number Of Followers: {authorDetails.followers_count}</h1>
    <h1>Email: {authorDetails.email}</h1>
    {/* <p>{authorDetails.about || 'No Bio Added'}</p> */}
    <p>{aboutText || 'No Bio Added'}</p>
  </div>

          <div className='textbiobox'>
            <textarea
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Update Bio"
            />
            <button onClick={handleAboutSubmit}>Update Bio</button>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
