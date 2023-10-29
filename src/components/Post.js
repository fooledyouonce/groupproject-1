function Post({ image, name }) {

  return (
    <div class="modal" id={name}>
      <div class="modal-content">
        <div class="modal-header">
          {name}<button class="modal-close">
            <ion-icon class="close-icon" name="close-outline">Close</ion-icon>
          </button>
        </div>
        <div class="modal-body">
          <img src={image} alt={name}></img>
          <div class="modal-footer">
            <button class="button close-btn modal-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
