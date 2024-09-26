// script.js

// Tambahkan event listener untuk tombol di footer
document.addEventListener("DOMContentLoaded", function() {
    const footerButtons = document.querySelectorAll("footer li");
    footerButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        alert("Tombol di footer diklik!");
      });
    });
  });
  
  // Tambahkan animasi untuk header
  const header = document.querySelector("header");
  header.addEventListener("mouseover", function() {
    header.style.backgroundColor = "#ccc";
  });
  
  header.addEventListener("mouseout", function() {
    header.style.backgroundColor = "#f0f0f0";
  });