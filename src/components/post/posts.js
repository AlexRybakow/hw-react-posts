import React from 'react';
import './posts.css';
import Like from '../../assets/heart.png';
import Repost from '../../assets/repost.png'
import Comment from '../../assets/comment.png';


const Post = ({ author, content, image, date, networks }) => (
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
                <img className='post-image' src={image} alt='post-pic'></img>
            </div>
            <div className='post-networks'>
                <div className='network-logo'><img src={Like} alt='like'></img>{networks.like}</div>
                <div className='network-logo'><img src={Repost} alt='like'></img>{networks.repost}</div>
                <div className='network-logo'><img src={Comment} alt='like'></img>{networks.comment}</div>
            </div>
        </div>
    </div>


)


export default Post;