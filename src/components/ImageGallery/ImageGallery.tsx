import { Images } from "../../types";
import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

type PropsImageGallery = {
  items: Images[];
  onImgClick: (regular: string) => void;
};

const ImageGallery: FC<PropsImageGallery> = ({ items, onImgClick }) => {
  return (
    <div>
      <ul className={css.galleryList}>
        {items.map((item: Images) => (
          <li key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
