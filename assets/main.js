// ================= HELP DROPDOWN =================
const helpToggle = document.getElementById("helpToggle");
const helpDropdown = document.getElementById("helpDropdown");

if (helpToggle && helpDropdown) {
  helpToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    helpDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    helpDropdown.classList.remove("show");
  });
}

// ================= PROGRAM FILTER =================
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".program-card, .card");

const heroTag = document.getElementById("heroTag");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    // Filter cards
    cards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Change hero content
    if (!heroTag || !heroTitle || !heroDesc) return;

    if (filter === "mobile") {
      heroTag.textContent = "Mobile Development";
      heroTitle.textContent = "Mobile App Development Programs";
      heroDesc.textContent =
        "Master Android, iOS, Flutter, and cross-platform app development.";
    }

    if (filter === "web") {
      heroTag.textContent = "Web Development";
      heroTitle.textContent = "Web Development Programs";
      heroDesc.textContent =
        "Learn modern frontend and full-stack web development.";
    }

    if (filter === "backend") {
      heroTag.textContent = "Backend Development";
      heroTitle.textContent = "Backend Development Programs";
      heroDesc.textContent =
        "Build scalable server-side applications and APIs.";
    }

    if (filter === "all") {
      heroTag.textContent = "All Courses";
      heroTitle.textContent = "Explore All Our Programs";
      heroDesc.textContent =
        "Discover our full range of software development courses.";
    }
  });
});
