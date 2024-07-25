const imageUrls = {
  about: "images/about.jpg",
  how: "images/join.jpg",
  league: "images/fees.jpg",
  location: "images/location.jpg",
  season: "images/season.jpg",
};

document.body.classList.add("dark-mode");

const sections = document.querySelectorAll("section");
const header = document.querySelector("header");

const parallaxEffect = () => {
  const scrolled = window.scrollY - 360;
  header.style.backgroundPositionY = `${scrolled * 0.1}px`;
};

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section, _) => {
    const title = section.querySelector("h2").innerText.toLowerCase();
    const key = title.split(" ")[0];

    const imageUrl = imageUrls[key];

    if (imageUrl) {
      const img = document.createElement("img");
      img.style.backgroundImage = `url('${imageUrl}')`;
      img.style.backgroundSize = "cover";
      img.style.backgroundPosition = "center";
      img.style.opacity = "0.1";
      img.style.height = "100%";
      img.style.width = "100%";
      img.style.position = "absolute";
      img.style.top = "0";
      img.style.left = "0";
      img.style.zIndex = "0";
      img.style.pointerEvents = "none";
      img.ariaLabel = `${title} background image`;

      section.appendChild(img);

      section.addEventListener("mouseover", () => {
        img.style.opacity = "0.3";
      });
      section.addEventListener("mouseout", () => {
        img.style.opacity = "0.1";
      });
    }
  });

  window.addEventListener("scroll", parallaxEffect);

  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Light Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "20px 25px";
  toggleButton.style.backgroundColor = "#0077cc";
  toggleButton.style.color = "white";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.backgroundRepeat = "no-repeat";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.innerText = document.body.classList.contains("dark-mode")
      ? "Toggle Light Mode"
      : "Toggle Dark Mode";
  });
});
