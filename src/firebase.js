// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBHzZo3Uw7TEiccDCWx22-DUvEYvz_ha8",
  authDomain: "food-fight-43148.firebaseapp.com",
  projectId: "food-fight-43148",
  storageBucket: "food-fight-43148.appspot.com",
  messagingSenderId: "17373664875",
  appId: "1:17373664875:web:6ddedf96f58aea0518832e",
  measurementId: "G-L48Y6WCYFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const postRef = collection(db, 'posts');
const storage = getStorage(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    return null;
  }
}

signInWithGoogle()
.then((user) => {
  if (user) {
    console.log("Signed in user:", user);
  } 

  else {
    console.log("No such user");
  }
});


export async function getPostData(){
  return getDocs(postRef)
  .then((snapshot) => {
    let posts = [];

    var i = 1;
    snapshot.docs.forEach((doc) => {
      posts.push({ image: doc.data().image, name: doc.data().title, id: doc.id, key: i });
      i++;
    });

    var promises = posts.map(function(post){
      return post;
    });

    return Promise.all(promises);
  });
}

export async function sendPostData(title, username, imageUpload){
  const imageName = imageUpload.name;
  const imageRef = ref(storage, `images/${imageName}`);
  uploadBytes(imageRef, imageUpload) //Upload image to firebase storage
  .then(() => {
    getDownloadURL(imageRef) //Get URL of uploaded image
    .then((url) => {
      addDoc(collection(db, "posts"), { //Store post data in firebase collection
        title: title,
        username: username,
        image: url
      });
    })
  });
  
}

export async function getCommentData(postId){
  const commentRef = collection(db, 'posts/' + postId + '/comments');
  return getDocs(commentRef)
  .then((snapshot) => {
    let comments = [];

    snapshot.docs.forEach((doc) => {
      comments.push({ comment: doc.data().comment, user: doc.data().user });
    });

    var promises = comments.map(function(comment){
      return comment;
    });

    return Promise.all(promises);
  });
}

export async function sendCommentData(postId, user, comment){
  addDoc(collection(db, 'posts/' + postId + '/comments'), {
    user: user,
    comment: comment
  });
}