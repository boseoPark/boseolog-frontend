export function initTwinkle({ starCount = 120, heartCount = 16 } = {}) {
  let bg = document.querySelector(".twinkle-bg");
  if (bg) return;

  bg = document.createElement("div");
  bg.className = "twinkle-bg";
  document.body.appendChild(bg);

  const rand = (max) => Math.random() * max;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${rand(100)}%`;
    star.style.left = `${rand(100)}%`;
    star.style.animationDelay = `${rand(3)}s`;
    bg.appendChild(star);
  }

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♡";
    heart.style.top = `${rand(100)}%`;
    heart.style.left = `${rand(100)}%`;
    heart.style.fontSize = `${12 + rand(20)}px`;
    heart.style.animationDelay = `${rand(5)}s`;
    bg.appendChild(heart);
  }
}

