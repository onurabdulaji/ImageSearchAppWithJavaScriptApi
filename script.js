// Unsplash API
const accesKey = "DtlOfJR06ZKKQL6ypJULsYalVoKO43Rm8HdO4wonoi8";

// Imported All Element Form Index File
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = ""; // This Will Store Data and Keywords
let page = 1; // Initial Start Page

async function searchImages() {
  inputData = inputEl.value;
  //   API FETCH
  const url =
    ~`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    // Append
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault;
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages;
});
