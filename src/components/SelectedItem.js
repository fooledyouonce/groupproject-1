import { sendCommentData } from "../firebase";
import { useState } from "react";

function SelectedItem({ image, name, comments, id }) {
    const [commentUpload, setCommentUpload] = useState('');

    return (

        <div className='selected-item'>
            <p>{name}</p>
            <img src={image} alt={name} />
            <h1 style={{color: 'white'}}>Comments:</h1>
            <ul className="post-list">
             {comments.map((post) => (
            <p style={{color: 'white'}}> {post.user}: {post.comment}</p>
          ))}
        </ul>
        <input onChange={(event) => {setCommentUpload(event.target.value)}}/>
        <button onClick={() => sendCommentData(id, 'user', commentUpload)}>Post Comment</button>
        </div>
    )
}

export default SelectedItem;