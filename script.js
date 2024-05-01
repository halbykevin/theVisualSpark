// Toggle the sidebar
document.querySelector(".toggle-button").onclick = function () {
    document.getElementById("sidebar").classList.toggle("open");
  };
  
  // Close the sidebar
  document.querySelector(".close-button").onclick = function () {
    document.getElementById("sidebar").classList.remove("open");
  };
  
  // Listen for a click on the document
  document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.querySelector(".toggle-button");
    // Check if the sidebar is open, and the clicked target is not the sidebar itself or the toggle button
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      event.target !== toggleButton
    ) {
      sidebar.classList.remove("open");
    }
  });
  
  // Prevent sidebar from closing when clicking inside it
  document.getElementById("sidebar").onclick = function (event) {
    event.stopPropagation();
  };
  