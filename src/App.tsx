import React, { useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Logout from "./Logout";
import ImageList from "./components/ImageList";
import { auth } from "./firebase";
import { RouteComponentProps } from "react-router-dom"

const App = ({history}: RouteComponentProps<{}>) => {
  const [userInput, setUserInput] = useState<string>("");
  const [images, setImages] = useState<DATA[]>([]);


  const changeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const userLogout = async () => {
    try {
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const params = {
        key: process.env.REACT_APP_PIXABAY_APIKEY,
        q: userInput,
      };
      const response = await axios.get("https://pixabay.com/api/", { params });
      setImages(response.data.hits);
      if (response.data.total === 0) {
        alert("お探しの画像は見つかりませんでした。");
      }
      console.log(response);
    } catch (error) {
      alert(error.massage);
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <SearchBar
          onSubmit={onSearchSubmit}
          userInput={userInput}
          changeUserInput={changeUserInput}
        />
        <Logout userLogout={userLogout} />
      </div>
      <ImageList images={images} />
    </div>
  );
};

export type DATA = {
  comments: number
  downloads: number
  favorites: number
  id: number
  imageHeight: number
  imageSize: number
  imageWidth: number
  largeImageURL: string
  likes: number
  pageURL: string
  previewHeight: number
  previewURL: string
  previewWidth: number
  tags: string
  type: string
  user: string
  userImageURL: string
  user_id: number
  views: number
  webformatHeight: number
  webformatURL: string
  webformatWidth: number
}

export default App;
