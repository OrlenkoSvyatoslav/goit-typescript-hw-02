import css from "../LoadMoreBtn/LoadMoreBtn.module.css";
import { FC } from "react";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnConteiner}>
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
