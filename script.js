// ---------------- Part 2: Functions & Scope ----------------

// Global variable
let globalMessage = "I am global!";

// Function with parameter & return value
function multiply(a, b) {
  return a * b; // returns a useful value
}

// Function showing local vs global scope
function showScope() {
  let localMessage = "I am local!";
  console.log(localMessage); // ✅ accessible here
  console.log(globalMessage); // ✅ can access global
}
showScope();
// console.log(localMessage); ❌ Error: not accessible outside

// ---------------- Part 3: Combining JS + CSS ----------------

// 1. Animate box on button click
const btn = document.getElementById("colorBtn");
const box = document.getElementById("box");

btn.addEventListener("click", function () {
  // Toggle CSS animation class
  box.classList.toggle("animate");
});

// 2. Modal control
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Function to open modal
function openModal() {
  modal.classList.remove("hidden", "hide");
  modal.classList.add("show");
}

// Function to close modal
function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
  // hide after fade-out completes
  setTimeout(() => modal.classList.add("hidden"), 500);
}

// Event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// ---------------- Testing Functions ----------------
console.log("Multiply 3 * 4 =", multiply(3, 4));