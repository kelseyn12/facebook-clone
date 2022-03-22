import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        <Post 
        profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sCAvrW1yFi0UYMgTZb113I0SwtW0dpby8Q&usqp=CAU'
        message='Woohoo! This works!'
        timeStamp='This is a timestamp'
        username='Kelszo'
        image='https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg'
        /> 
        <Post
        profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sCAvrW1yFi0UYMgTZb113I0SwtW0dpby8Q&usqp=CAU'
        message='Woohoo! This works!'
        timeStamp='This is a timestamp'
        username='Kelszo' /> 
    </div>
  )
}

export default Feed;