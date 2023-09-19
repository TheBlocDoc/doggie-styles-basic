const reviews = [
  {
    text: "",
    author: "",
  },
];

let currentReviewIndex = 0;

const reviewContainer = document.querySelector(".review-container");
const reviewForm = document.getElementById("reviewForm");
const reviewText = document.getElementById("reviewText");
const reviewAuthor = document.getElementById("reviewAuthor");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function displayReview(index) {
  const review = reviews[index];
  const reviewDiv = document.createElement("div");
  reviewDiv.className = "review";
  reviewDiv.innerHTML = `
        <p>"${review.text}"</p>
        <p><em>- ${review.author}</em></p>
    `;

  // Remove previous review and add the new one
  const existingReview = document.querySelector(".review");
  if (existingReview) {
    reviewContainer.removeChild(existingReview);
  }
  reviewContainer.appendChild(reviewDiv);
}

function addReview(event) {
  event.preventDefault();

  const text = reviewText.value;
  const author = reviewAuthor.value;

  if (text.trim() !== "" && author.trim() !== "") {
    reviews.push({ text, author });
    reviewText.value = "";
    reviewAuthor.value = "";
    currentReviewIndex = reviews.length - 1;
    displayReview(currentReviewIndex);
  }
}

prevBtn.addEventListener("click", () => {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview(currentReviewIndex);
});

nextBtn.addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview(currentReviewIndex);
});

reviewForm.addEventListener("submit", addReview);

// Display the initial review
displayReview(currentReviewIndex);
