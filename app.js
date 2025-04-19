function particles(e) {
    for (let i = 0; i < 20; i++) {
    const div = document.createElement("div").className = "particle";
    e.appendChild(div);
    e.style.position = "relative";
    div.style.width = `${Math.random() * 10 + 5}px`;
    div.style.position = "absolute";
    div.style.height = `${Math.random() * 10 + 5}px`;
    div.style.borderRadius = "50%";
    div.style.transform = `translateX(${Math.floor(Math.random() * 100)}%)`;
    div.style.backgroundColor = `var(--primary-color${Math.floor(Math.random() * 5)})`;
    div.style.left = `${Math.random() * 100}vw`;
    div.style.top = `${Math.random() * 100}vh`;
   div.style.animation = `particle ${Math.random() * 2 + 1}s linear forwards`;
    }
}