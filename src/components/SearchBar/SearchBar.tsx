import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "../SearchBar/SearchBar.module.css";
import { FC, FormEvent } from "react";

type SearchBarProps = {
  onSubmit: (data: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const onSubmitBar = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const data = form.elements.namedItem("search") as HTMLInputElement;
    if (data.value.trim() === "") {
      toast.error("Input is empty!");
      return;
    }
    onSubmit(data.value.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.formContainer} onSubmit={onSubmitBar}>
        <button className={css.searchBtn} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
        <input
          className={css.inputSearch}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
