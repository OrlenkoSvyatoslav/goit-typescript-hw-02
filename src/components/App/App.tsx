import css from "../App/App.module.css";
import { fetchImages } from "../../photos-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMassage/ErrorMassage";
import { Images } from "../../types";
import Modal from "react-modal";

Modal.setAppElement("#root");
type Status = true | false;

const App = () => {
  const [imgs, setImgs] = useState<Images[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<Status>(false);
  const [error, setError] = useState<Status>(false);
  const [modal, setModal] = useState<Status>(false);
  const [imgUrl, setImgsUrl] = useState<string>("");
  const [notFoundError, setNotFoundError] = useState<Status>(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        setNotFoundError(false);

        const newImgs = await fetchImages(page, query);

        setImgs((prevImages): Images[] => {
          return [...prevImages, ...newImgs];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSubmit = (query: string): void => {
    setQuery(query);
    setPage(1);
    setImgs([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (url: string): void => {
    setImgsUrl(url);
    toggle();
  };

  const toggle = () => {
    setModal(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {imgs.length > 0 && <ImageGallery onImgClick={openModal} items={imgs} />}

      {error && <ErrorMessage />}
      {loading && <Loader />}
      {notFoundError && <p className={css.notFound}>Not found, try again!</p>}
      {imgs.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && (
        <ImageModal image={imgUrl} imgModal={modal} onModalClose={toggle} />
      )}
    </div>
  );
};

export default App;
