const ideaEl = document.getElementById("idea");
const generateBtn = document.getElementById("generate-btn");
const ideaType = document.getElementById("idea-type");

const generateRandomBackground = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 9);
  }
  return color;
};

// initially style the background when page is loaded
document.body.style.backgroundColor = generateRandomBackground();

const fetchRender = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      ideaEl.innerHTML = `<span class="idea-type">IDEA</span></br>${data.activity}`;
      ideaType.innerHTML = `<span class="idea-type">TYPE</span></br>${data.type
        .slice(0, 1)
        .toUpperCase()}${data.type.slice(1).toLowerCase()}`;
      document.body.style.backgroundColor = generateRandomBackground();
      document.querySelector(".divider").classList.add("divider-style");
    });
};
// for space bar
window.addEventListener("keydown", (e) => {
  if (e.key === 49) fetchRender();
});
generateBtn.addEventListener("click", () => {
  fetchRender();
});
