import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SelectedItem from "./components/SelectedItem";
import { getPostData, sendPostData, getCommentData, sendCommentData } from './firebase';

const foodArray = await getPostData();

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Fruity Pebbles Pickle");
  const selectedPost = foodArray.find(
    (otter) => otter.name === selectedPostName
  );

  //For testing post upload
  const [imageUpload, setImageUpload] = useState(null);
  const [titleUpload, setTitleUpload] = useState('');
  const [userUpload, setUserUpload] = useState('');

  return (
    
    <div>

      <input type='file' onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <input onChange={(event) => {setTitleUpload(event.target.value)}}/>
      <input onChange={(event) => {setUserUpload(event.target.value)}}/>
      <button onClick={() => sendPostData(titleUpload, userUpload, imageUpload)}>Upload Post</button>

      <Header />
      <div className="app-content">
        <ul className="post-list">
          {foodArray.map((post) => (
            <Post
              key={post.key}
              image={post.image}
              name={post.name}
              setSelectedPostName={setSelectedPostName}
            />
          ))}
        </ul>
        <SelectedItem i image={selectedPost.image} name={selectedPost.name} />
      </div>
    </div>
  );
}

export default App;
