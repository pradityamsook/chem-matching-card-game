import React, { useState, useRef } from "react";
import firebase from "firebase";
import { nanoid } from "nanoid";

// internal functions.
import { app } from "./base";

const db = app.firestore();
const storage = app.storage();

export const NewCard = ({ currentGame }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cardName, setCardName] = useState("");

  const ref = useRef();
  const refCardName = useRef();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onNameChange = (e) => {
    setCardName(e.target.value);
  };

  const onUpload = async () => {
    let checkType = ["jpeg", "jpg", "png"];
    if (file) {
      if (cardName === "") {
        alert("Please input name of card's name");
      } else {
        console.log(file);
        console.log(db.collection.name);
        let splitType = file.type.split("/");
        let typeImage = splitType[1];
        if (checkType.includes(typeImage)) {
          db.collection("games").onSnapshot((snapshot) => {
            // console.log(snapshot.currentGame);
          });
          setLoading(true);
          const storageRef = storage.ref();
          const fileName = nanoid();
          const nameOfCard = cardName; // nameOfCards defined for use to matching card and name's clone of card.
          const fileRef = storageRef.child(fileName);
          await fileRef.put(file).then((snapshot) => {
            // console.log("Uploaded file");
          });
          db.collection("games")
            .doc(currentGame)
            .update({
              images: firebase.firestore.FieldValue.arrayUnion({
                name: fileName,
                cardName: nameOfCard,
                url: await fileRef.getDownloadURL(),
              }),
            })
            .then(() => {
              setLoading(false);
              setFile(null);
              setCardName("");
              // document.getElementById("uploadFile").requestFullscreen();
              ref.current.value = "";
              refCardName.current.value = "";
            });
        } else {
          alert("Noob code");
        }
      }
    }
  };

  return (
    <>
      <input type="file" ref={ref} onChange={onFileChange} />
      <input
        type="text"
        value={cardName}
        ref={refCardName}
        onChange={onNameChange}
      />
      <button disabled={loading} onClick={onUpload}>
        Upload image
      </button>
    </>
  );
};
