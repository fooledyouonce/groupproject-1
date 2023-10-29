import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import FoodPost from "./components/FoodPost";
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

const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        body.classList.add("prevent-background-scroll");
    });
});

modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = (btn.closest(".modal").style.display = "none");
        body.classList.remove("prevent-background-scroll");
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Fruity Pebbles Pickle");
  const selectedPost = foodArray.find(
    (food) => food.name === selectedPostName
  );
  return (
    <div>
      <Header />
      <div className="app-content">
        <ul className="post-list">
          {foodArray.map((post) => (
            <FoodPost
              key={post.id}
              image={post.image}
              name={post.name}
            />
          ))}
        </ul>
        <Post 
          image={uniMeal}
          name="Uni Meal"
        />
      </div>
    </div>
  );
}

export default App;
