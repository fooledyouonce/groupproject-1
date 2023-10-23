// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
const storageRef = ref(storage, 'images/');

export async function getPostData(){
  return getDocs(postRef)
  .then((snapshot) => {
    let posts = [];
    let i = 1;
    snapshot.docs.forEach((doc) => {
      posts.push({ image: doc.data().image, name: doc.data().title, id: i });
      i++;
    })

    var promises = posts.map(function(post){
      return post;
    });

    return Promise.all(promises);
  });
}

export async function sendPostData(title, username, imageUpload){
  const imageName = imageUpload.name;
  console.log(imageName);
  const imageRef = ref(storage, `images/${imageName}`);
  uploadBytes(imageRef, imageUpload)
  .then(() => {
    getDownloadURL(imageRef)
    .then((url) => {
      addDoc(collection(db, "posts"), {
        title: title,
        author: username,
        image: url
      });
    })
  });

  
}