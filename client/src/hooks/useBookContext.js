import { useContext } from "react";
import { BooksContext } from "../context/bookContext";

export const useBookContext = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw Error("useBooksContext must be used with BooksContextProvider");
  }

  return context;
};
