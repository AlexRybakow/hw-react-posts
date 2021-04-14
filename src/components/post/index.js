import React from 'react';
import './style.css';

const Post = ({ author, content, image, date, network }) => {
    return (
        <div className='container'>
        <div className='user-avatar'><img src={author.photo} alt='avatar'></img>       
        </div>
        <div className='post-body'>
        <div className='user-info'>
        <p className='user-name'>{author.name}</p>
        <p className='user-nickname'>{author.nickname}</p>
        <p className='post-date'>{date}</p>   
        </div>
        <div className='post-content'>
            <p className='post-text'>{content}</p>
            <img className='post-image'src={image} alt='post-pic'></img>
        </div>
        </div>
        </div>
        

    )
}

export default Post;