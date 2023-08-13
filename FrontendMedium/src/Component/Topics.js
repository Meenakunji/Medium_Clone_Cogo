import React from 'react';
import './Topics.css'; // Import your CSS file for styling

// Fake topic data
const fakeTopics = [
  { id: 1, title: 'Programming' },
  { id: 2, title: 'Data Science' },
  { id: 3, title: 'International Relations' },
  { id: 4, title: 'Technology' },
  { id: 5, title: 'Current Affairs' },
  { id: 6, title: 'Machine Learning' },
  { id: 7, title: 'Self Improvment' },

];

function Topics() {
  return (
    <div className='topicbox'>
      <h3>Recommended Topics</h3>
    <div className="topic-list">
      
      {fakeTopics.map(topic => (
        <div key={topic.id} className="topic-item">
          {topic.title}
        </div>
      
      ))}
    </div>
    </div>
  );
}

export default Topics;
