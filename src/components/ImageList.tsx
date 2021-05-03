import React from "react";
import "./ImageList.css";
import Masonry from "react-masonry-component";
import { DATA } from '../App'

interface PROPS {
  images: DATA[]
}

const ImageList: React.FC<PROPS> = (props) => {
  return (
    <Masonry className="App">
      {props.images.map((image: DATA) => {
        return (
          <a
            href={image.pageURL}
            key={image.id}
            target="_blank"
            rel="noopener noreferrer"
            className="ui medium image"
          >
            <img src={image.webformatURL} alt={image.tags} />
          </a>
        );
      })}
    </Masonry>
  );
};

export default ImageList;
