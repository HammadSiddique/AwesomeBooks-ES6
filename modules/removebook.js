/* eslint import/prefer-default-export: "off" */
import { Book } from "./book.js";

let removeBook = (index) => {
  const removeBooks = new Book();
  removeBooks.deleteBook(index);
  window.onload = removeBooks.displayBooks();
};

export { removeBook };
