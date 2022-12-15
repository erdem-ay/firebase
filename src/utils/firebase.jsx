import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  push,
  child,
  update,
} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAfz7Sw_YUfNEALoFLucN60S9gdSe4m-38",
  authDomain: "sessioncontact-5b338.firebaseapp.com",
  databaseURL:
    "https://sessioncontact-5b338-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sessioncontact-5b338",
  storageBucket: "sessioncontact-5b338.appspot.com",
  messagingSenderId: "948023552838",
  appId: "1:948023552838:web:f777e36e8a367046aa5347",
};

const app = initializeApp(firebaseConfig);

export const writeUserData = (userName, phoneNumber, gender, id) => {
  const db = getDatabase(app);
  set(ref(db, "contacts/" + id), {
    userName: userName,
    phoneNumber: phoneNumber,
    gender: gender,
    id: id,
  });
};

export const getDataFromFirebase = (setContacts) => {
  const db = getDatabase(app);
  const starCountRef = ref(db, "contacts/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const arrayData = Object.values(data);
    setContacts(arrayData);
    // updateStarCount(postElement, data);
  });
};

export const deleteDataFromFirebase = (id) => {
  const db = getDatabase(app);
  remove(ref(db, "contacts/" + id));
};

export const updateDataToFirebase = (userName, phoneNumber, gender, id) => {
  const db = getDatabase(app);

  const updateData = {
    userName: userName,
    phoneNumber: phoneNumber,
    gender: gender,
    id: id,
  };
  //   const newPostKey = push(child(ref(db), "contacts")).key;

  const updates = {};
  updates["contacts/" + id] = updateData;
  //   updates["/user-contacts/" + id + "/" + newPostKey] = updateData;

  return update(ref(db), updates);
};
