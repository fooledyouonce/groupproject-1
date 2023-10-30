import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SelectedItem from "./components/SelectedItem";
import {
  getPostData,
  sendPostData,
  getCommentData,
  sendCommentData,
} from "./firebase";

const foodArray = await getPostData();

function App() {
  const [selectedPostName, setSelectedPostName] = useState(
    "Fruity Pebbles Pickle"
  );
  const [selectedComments, setSelectedComments] = useState([]);
  const selectedPost = foodArray.find(
    (otter) => otter.name === selectedPostName
  );

  useEffect(() => {
    async function test() {
      let comments = await getCommentData(selectedPost.id);
      setSelectedComments(comments);
    }

    test();
  }, [selectedPostName]);

  //For testing post upload
  const [imageUpload, setImageUpload] = useState(null);
  const [titleUpload, setTitleUpload] = useState("");
  const [userUpload, setUserUpload] = useState("");

  return (
    <div>
      <Header />
      <div className="directions">
        {" "}
        <p>
          Post your food <s>monstrosity</s> creation here...And let others be
          the judge!
        </p>
      </div>
      <div className="upload">
        <input id="up"
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <input id="up"
          placeholder="Title Your Creation"
          onChange={(event) => {
            setTitleUpload(event.target.value);
          }}
        />
        <input id="up"
          placeholder="Who are You?"
          onChange={(event) => {
            setUserUpload(event.target.value);
          }}
        />
        <button
          onClick={() => sendPostData(titleUpload, userUpload, imageUpload)}
        >
          Upload Post
        </button>
      </div>
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
        <SelectedItem
          i
          image={selectedPost.image}
          name={selectedPost.name}
          comments={selectedComments}
          id={selectedPost.id}
        />
      </div>
    </div>
  );
}

export default App;
