import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";
import { FC } from "react";

type ImageModalProps = {
  image: string;
  imgModal: boolean;
  onModalClose: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ imgModal, onModalClose, image }) => {
  return (
    <div>
      <Modal
        isOpen={imgModal}
        onRequestClose={onModalClose}
        className={css.modal}
      >
        <img className={css.modalImg} src={image} />
      </Modal>
    </div>
  );
};

export default ImageModal;
