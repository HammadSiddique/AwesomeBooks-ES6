/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getBooks"] }] */
import { Book } from '../modules/book.js';
import { Date } from '../modules/date.js';
import { removeBook } from '../modules/removebook.js';

Date();

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('add-form');

form.addEventListener('submit', () => {
  const newBook = new Book(title.value, author.value);
  newBook.saveBook();
});

const book = new Book();
window.onload = book.displayBooks();

const links = document.querySelectorAll('.link-item');

links.forEach((e) => {
  e.addEventListener('click', () => {
    links.forEach((item) => {
      const value = item.getAttribute('href');
      const element = document.querySelector(value);
      element.classList.add('hide');
      item.classList.remove('active-link');
    });
    const attributeValue = e.getAttribute('href');
    const section = document.querySelector(attributeValue);
    section.classList.remove('hide');
    e.classList.add('active-link');
  });
});

const removeButton = document.querySelectorAll('.remove-button');

removeButton.forEach((e) => {
  e.addEventListener('click', () => {
    const id = e.getAttribute('id');
    removeBook(parseInt(id, 10));
    window.location.reload();
  });
});
