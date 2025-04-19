function particles(e) {
  for (let i = 0; i < 20; i++) {
    const div = document.createElement("div");
    e.appendChild(div);
    div.classList.add("particle");
    div.style.width = `${Math.random() * 10 + 5}px`;
    div.style.position = "absolute";
    div.style.aspectRatio = "1/1";
    div.style.borderRadius = "50%";
    div.style.transform = `translateX(${Math.floor(Math.random() * 70)}%)`;
    div.style.backgroundColor = `var(--primary-color${Math.floor(
      Math.random() * 5
    )})`;
    div.style.left = `${Math.random() * 100}vw`;
    div.style.animation = `particle 5s ${Math.floor(
      Math.random() * 10
    )}s infinite linear`;
    div.style.opacity = 0;
  }
}

document.querySelectorAll(".particled").forEach((e) => {
  particles(e);
});
