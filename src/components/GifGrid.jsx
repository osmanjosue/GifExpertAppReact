import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [Images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
        /* .then(newImages => setImages(newImages)) */
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
            Images.map(({title, id})=> {
                return <li key={id}>{title}</li>
            })
        }
      </ol>
    </>
  );
};
