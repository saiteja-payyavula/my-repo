// Programs → Home navigation
document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");

  if (homeBtn) {
    homeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});
// Home → Programs navigation
document.addEventListener("DOMContentLoaded", () => {
  const programsBtn = document.getElementById("programsBtn");

  if (programsBtn) {
    programsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "programs.html";
    });
  }
});
//============================================programs sub part=============*/

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".program-card, .card");

  const heroTag = document.getElementById("heroTag");
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      // active button
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // FILTER CARDS
      cards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // CHANGE HERO CONTENT
      if (filter === "mobile") {
        heroTag.textContent = "Mobile Development";
        heroTitle.textContent = "Mobile App Development Programs";
        heroDesc.textContent =
          "Master Android, iOS, Flutter, and cross-platform app development with hands-on training.";
      }

      if (filter === "web") {
        heroTag.textContent = "Web Development";
        heroTitle.textContent = "Web Development Programs";
        heroDesc.textContent =
          "Learn modern frontend and full-stack web development using industry-standard technologies.";
      }

      if (filter === "backend") {
        heroTag.textContent = "Backend Development";
        heroTitle.textContent = "Backend Development Programs";
        heroDesc.textContent =
          "Build scalable server-side applications, APIs, and databases with real-world projects.";
      }

      if (filter === "all") {
        heroTag.textContent = "All Courses";
        heroTitle.textContent = "Explore All Our Programs";
        heroDesc.textContent =
          "Discover our comprehensive range of software development courses designed for every skill level.";
      }
    });
  });


// Blog navigation (Home / Programs → Blog)
document.addEventListener("DOMContentLoaded", () => {
  const blogBtn = document.getElementById("blogBtn");

  if (blogBtn) {
    blogBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "blog.html";
    });
  }
});
//CONTACT//
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");

  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "contact.html";
    });
  }
});




