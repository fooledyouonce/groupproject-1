import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SelectedItem from "./components/SelectedItem";
import fruityPebblesPickle from "./food/food1.png";
import uniMeal from "./food/food2.png";
import cheeseJalapenoSamosas from "./food/food3.png";
import friedSpamSandwiches from "./food/food4.png";
import deviledEggs from "./food/food5.png";

const foodArray = [
  { image: fruityPebblesPickle, name: "Fruity Pebbles Pickle", id: 1 },
  { image: uniMeal, name: "University Meal (With Cheese!)", id: 2 },
  { image: cheeseJalapenoSamosas, name: "Cheese Jalapeno Samosas", id: 3 },
  { image: friedSpamSandwiches, name: "Fried Spam Sandwiches", id: 4 },
  { image: deviledEggs, name: "Deviled Eggs?", id: 5 },
];

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
