import React, { FC } from "react";
import { Images } from "../../types";

type ImageCardProps = {
  item: Images;
  onImgClick: (regular: string) => void;
};

const ImageCard: FC<ImageCardProps> = ({
  item: {
    alt_description,
    urls: { small, regular },
  },
  onImgClick,
}) => {
  return (
    <div>
      <div>
        <img
          src={small}
          alt={alt_description}
          onClick={() => onImgClick(regular)}
          width={320}
          height={200}
        />
      </div>
    </div>
  );
};

export default ImageCard;
