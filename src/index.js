/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getBooks"] }] */
import { Book } from "../modules/book.js";
// import { Date } from "../modules/date.js";

const title = document.getElementById("title");
const author = document.getElementById("author");
const form = document.getElementById("add-form");

form.addEventListener("submit", () => {
  const newBook = new Book(title.value, author.value);
  newBook.saveBook();
});

const book = new Book();
window.onload = book.displayBooks();

const links = document.querySelectorAll(".link-item");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((item) => {
      const value = item.getAttribute("href");
      const element = document.querySelector(value);
      element.classList.add("hide");
      item.classList.remove("active-link");
    });
    const attributeValue = e.getAttribute("href");
    const section = document.querySelector(attributeValue);
    section.classList.remove("hide");
    e.classList.add("active-link");
  });
});

function removeBook(index) {
  const removeBooks = new Book();
  removeBooks.deleteBook(index);
  window.onload = removeBooks.displayBooks();
  console.log(index);
}

// function displayDate() {
//   const d = new Date();
//   const dformat =
//     `${[d.getMonth() + 1, d.getDate(), d.getFullYear()].join(" ")},` +
//     ` ${[d.getHours(), d.getMinutes(), d.getSeconds()].join(":")}`;
//   document.getElementById("date").innerHTML = dformat;
// }

// window.onload = displayDate();
