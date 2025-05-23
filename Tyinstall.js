const groups = [
  ["G1S1.svg", "G1S2.svg", "G1S3.svg"],
  ["G2S1.svg", "G2S2.svg", "G2S3.svg"],
  ["G3S1.svg", "G3S2.svg", "G3S3.svg"],
  ["G4S1.svg", "G4S2.svg", "G4S3.svg"],
  ["G5S1.svg", "G5S2.svg", "G5S3.svg"],
];

let currentIndex = 0;
const track = document.getElementById("carousel-track");

function renderGroup(index) {
  track.innerHTML = ""; // Clear
  const group = groups[index];
  const container = document.createElement("div");
  container.className = "carousel-group active fade-in";
  group.forEach((filename, i) => {
    const img = document.createElement("img");
    img.src = `Typeinstall/${filename}`;
    img.alt = filename;
    img.className = `image-layer piece-${i + 1}`;
    img.style.zIndex = i + 1;
    container.appendChild(img);
  });
  track.appendChild(container);
}

function nextGroup() {
  transitionOut(() => {
    currentIndex = (currentIndex + 1) % groups.length;
    renderGroup(currentIndex);
  });
}

function prevGroup() {
  transitionOut(() => {
    currentIndex = (currentIndex - 1 + groups.length) % groups.length;
    renderGroup(currentIndex);
  });
}

function transitionOut(callback) {
  const current = document.querySelector(".carousel-group");
  if (current) {
    current.classList.remove("fade-in");
    current.classList.add("fade-out");
    setTimeout(callback, 500);
  } else {
    callback();
  }
}

// Start
document.addEventListener("DOMContentLoaded", () => {
  renderGroup(currentIndex);
});
