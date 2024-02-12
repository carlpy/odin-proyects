window.addEventListener("DOMContentLoaded", () => {
  updateBookList();
});

let bookList = [
  {
    title: "The Plague",
    author: "Albert Camus",
    year: 1947,
    rating: 5,
    status: true,
  },
  {
    title: "The ",
    author: "Albert Camus",
    year: 1947,
    rating: 5,
    status: true,
  },
];

// DOM elements
const addBookBtn = document.getElementById("addBook");
const closeBookBtn = document.querySelector(".close-modal");

const modal = document.querySelector(".book__modal__form");
const modalForm = document.getElementById("bookAddForm");
const overlay = document.querySelector(".overlay");

const bookCardsContainer = document.querySelector(".book__display");

addBookBtn.addEventListener("click", () => {
  openModal();
});
closeBookBtn.addEventListener("click", () => {
  closeModal();
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputsInfo = Array.from(e.target.querySelectorAll("input")).reduce(
    (prev, curr) => {
      if (curr.id === "status") {
        prev[curr.id] = curr.checked;
      } else {
        prev[curr.id] = curr.value;
      }

      return prev;
    },
    {}
  );

  e.target.querySelectorAll("input").forEach((inp) => (inp.value = ""));
  bookList.push(inputsInfo);
  updateBookList();
});

function createBookCard() {
  let htmlBooks = "";

  bookList.forEach((bookInfo) => {
    const { title, author, year, rating, status } = bookInfo;
    console.log(bookInfo);

    let readClass = status == true ? "status-read" : "status-pending-read";

    htmlBooks += `
      <div class="book__display__element">
        <h2 id="title">${title}</h2>
        <p>Author: ${author}</p>
        <p>Year: ${year}</p>
        <p>Rating: ${rating} / 5</p>  
        <button class="read-state ${readClass}">${
      status === true ? "Read" : "Not Read"
    }</button>
        <button class="remove-book">Remove</button>
      </div>`;
  });

  return htmlBooks;
}

function updateBookList() {
  bookCardsContainer.innerHTML = createBookCard();

  buttons = bookCardsContainer
    .querySelectorAll(".book__display__element .read-state")
    .forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const info = e.target.parentElement.querySelector("h2").textContent;

        for (const i of bookList) {
          if (i["title"] === info) {
            i["status"] = !i["status"];
            updateBookList();
            return;
          }
        }
      })
    );

  buttons = bookCardsContainer
    .querySelectorAll(".book__display__element .remove-book")
    .forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const info = e.target.parentElement.querySelector("h2").textContent;
        let newBookList = bookList.filter((book) =>  book.title !== info);
        
        bookList = newBookList;
        updateBookList();
      })
    );

  console.log(buttons);
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
