const books = [
  {
    id: 1,
    title: 'The Power of your subconscious mind',
    author: 'Joseph Morphy',
  },
];

const bookListSection = document.querySelector('#book-list');

function renderBookList(bookList) {
  bookListSection.innerHTML = bookList
    .map(
      (book) => `<p class="title">${book.title}</p>
            <p>${book.author}</p>
            <button data-id=${book.id} class="remove">Remove</button>
            <hr>`,
    ).join('');
}