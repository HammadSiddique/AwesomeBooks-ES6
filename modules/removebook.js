import { Book } from "./book.js";

function removeBook(index) {
  const removeBooks = new Book();
  removeBooks.deleteBook(index);
  window.onload = removeBooks.displayBooks();
}

export { removeBook };
