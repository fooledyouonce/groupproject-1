function FoodPost({ image, name, setSelectedPostName }) {
    return (
        <li className="food-post-component">
            <img className="food-post-img" src={image} alt={name} />
            <p className="food-post-name">{name}</p>
            <textarea className="comment-section" placeholder="Comments"></textarea>
        </li>   
    )
}

export default FoodPost;