import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SelectedItem from "./components/SelectedItem";
import { getPostData } from './firebase';

const foodArray = await getPostData();

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Fruity Pebbles Pickle");
  const selectedPost = foodArray.find(
    (otter) => otter.name === selectedPostName
  );
  return (
    <div>
      <Header />
      <div className="app-content">
        <ul className="post-list">
          {foodArray.map((post) => (
            <Post
              key={post.id}
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
