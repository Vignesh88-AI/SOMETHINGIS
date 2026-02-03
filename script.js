// =====================
// PERSONALIZE HERE
// =====================
const HER_NAME = "MAHI";
const YOUR_NAME = "Vignesh";

const LOVE_LETTER = [
  `Dear ${HER_NAME},`,
  "",
  "You’re my favorite notification.",
  "You turn my worst days into “okay wait… life is kinda cute.”",
  "",
  "I like you a lot. Like…",
  "‘I would share my fries with you’ level a lot.",
  "",
  "Happy Valentine’s (early) 💜🧡",
  `— ${YOUR_NAME}`,
].join("\n");

// Apply names
document.getElementById("herName").textContent = HER_NAME;
document.getElementById("toName").textContent = HER_NAME;
document.getElementById("fromName").textContent = YOUR_NAME;
document.getElementById("quizName").textContent = HER_NAME;

// =====================
// FAKE MULTI-PAGE ROUTER
// =====================
const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".navLink")];

function showPage(id) {
  pages.forEach((p) => p.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  // little nav highlight (optional)
  navLinks.forEach((a) => {
    const target = (a.getAttribute("href") || "").replace("#", "");
    a.style.borderColor =
      target === id ? "rgba(255,255,255,0.18)" : "transparent";
    a.style.background =
      target === id ? "rgba(255,255,255,0.08)" : "transparent";
  });
}

function route() {
  const hash = (location.hash || "#home").replace("#", "");
  showPage(hash);
}
window.addEventListener("hashchange", route);
route();

// =====================
// FUN STATS
// =====================
const loveLevelEl = document.getElementById("loveLevel");
const chaosLevelEl = document.getElementById("chaosLevel");
const flowersCountEl = document.getElementById("flowersCount");

let chaos = 0;
let flowersPlanted = 0;

function bumpLove() {
  // goofy love number
  const base = 999;
  const extra = Math.min(9999, Math.floor(flowersPlanted / 4) + chaos * 7);
  loveLevelEl.textContent = base + extra;
}
function setChaos(n) {
  chaos = Math.max(0, n);
  chaosLevelEl.textContent = chaos;
  bumpLove();
}

// =====================
// SURPRISE BUTTON
// =====================
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseBox = document.getElementById("surpriseBox");

const surprises = [
  `✅ Verification: ${HER_NAME} is 100% adorable.`,
  `Breaking News: Scientists discovered purple + orange = ${HER_NAME}’s aura.`,
  `Alert: Your smile caused a 7.3 magnitude heartquake in my chest.`,
  `I would fight 1,000 mosquitoes for you. (Okay… 7 mosquitoes.)`,
  `You are my favorite person. Even when you steal my hoodie.`,
];

surpriseBtn.addEventListener("click", () => {
  const pick = surprises[Math.floor(Math.random() * surprises.length)];
  surpriseBox.textContent = pick;
  popConfetti(18);
});

// =====================
// MEMES: status shuffle
// =====================
const statusText = document.getElementById("statusText");
const shuffleStatus = document.getElementById("shuffleStatus");

const statuses = [
  "Taken… by her cuteness 😵‍💫",
  "Emotionally attached to her voice notes 🎧",
  "CEO of Missing You 😭",
  "Professional Simp (Certified) ✅",
  "Her biggest fan club: ME (founder + member) 😤",
];
function setRandomStatus() {
  statusText.textContent =
    statuses[Math.floor(Math.random() * statuses.length)];
}
shuffleStatus.addEventListener("click", setRandomStatus);
setRandomStatus();

// =====================
// Compliment cannon
// =====================
const complimentBtn = document.getElementById("complimentBtn");
const bubbleArea = document.getElementById("bubbleArea");

const compliments = [
  "You’re glowing 💜",
  "You’re ridiculously pretty 🧡",
  "Your vibe = elite ✨",
  "I like you. A lot. Like… a lot.",
  "You make everything better 🥺",
  "Your laugh is my favorite sound",
];

complimentBtn.addEventListener("click", () => {
  const count = 4 + Math.floor(Math.random() * 4);
  for (let i = 0; i < count; i++) {
    setTimeout(() => addBubble(), i * 90);
  }
});

function addBubble() {
  const b = document.createElement("div");
  b.className = "bubble";
  b.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  b.style.left = `${Math.random() * 70}%`;
  b.style.top = `${Math.random() * 55 + 10}%`;
  bubbleArea.appendChild(b);
  setTimeout(() => b.remove(), 2200);
}

// =====================
// PANIC button
// =====================
const panicBtn = document.getElementById("panicBtn");
const panicMsg = document.getElementById("panicMsg");

panicBtn.addEventListener("click", () => {
  const lines = [
    "Panic initiated. Sending emergency hugs… ✅",
    "System overload: her cuteness exceeded maximum limits.",
    "Deploying shield: 🛡️ ‘I like you’ protection activated.",
    "Attempting reboot… (please hold my hand).",
  ];
  panicMsg.textContent = lines[Math.floor(Math.random() * lines.length)];
  popConfetti(26);
});

// =====================
// LOVE LETTER (typewriter)
// =====================
const typedEl = document.getElementById("typedLetter");
const retypeBtn = document.getElementById("retype");

let typingTimer = null;

function typeLetter() {
  if (typingTimer) clearInterval(typingTimer);
  typedEl.textContent = "";
  let i = 0;

  typingTimer = setInterval(() => {
    typedEl.textContent += LOVE_LETTER[i] || "";
    i++;
    if (i >= LOVE_LETTER.length) {
      clearInterval(typingTimer);
      typingTimer = null;
    }
  }, 12);
}

retypeBtn.addEventListener("click", typeLetter);
typeLetter();

// Confetti
document
  .getElementById("confetti")
  .addEventListener("click", () => popConfetti(35));

function popConfetti(n = 25) {
  for (let i = 0; i < n; i++) {
    const p = document.createElement("div");
    p.style.position = "fixed";
    p.style.zIndex = "9";
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `-10px`;
    p.style.width = `${6 + Math.random() * 8}px`;
    p.style.height = `${6 + Math.random() * 8}px`;
    p.style.borderRadius = `${Math.random() > 0.5 ? "999px" : "4px"}`;
    p.style.background = `linear-gradient(90deg, #7c3aed, #fb923c)`;
    p.style.opacity = "0.9";
    document.body.appendChild(p);

    const fall = 900 + Math.random() * 900;
    const drift = (Math.random() - 0.5) * 220;
    const rot = (Math.random() - 0.5) * 720;

    p.animate(
      [
        { transform: `translate(0,0) rotate(0deg)`, opacity: 1 },
        {
          transform: `translate(${drift}px, ${window.innerHeight + 80}px) rotate(${rot}deg)`,
          opacity: 0,
        },
      ],
      { duration: fall, easing: "cubic-bezier(.2,.7,.2,1)" },
    );

    setTimeout(() => p.remove(), fall + 50);
  }
}

// =====================
// Valentine Yes/No (No runs away)
// =====================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseenter", () => {
  const pad = 18;
  const x =
    Math.random() * (window.innerWidth - noBtn.offsetWidth - pad * 2) + pad;
  const y =
    Math.random() * (window.innerHeight - noBtn.offsetHeight - pad * 2) + pad;
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  result.innerHTML = `
    <b>Approved ✅</b><br/>
    Congratulations ${HER_NAME}, you just unlocked:
    <br/>• Unlimited hugs ♾️
    <br/>• 24/7 “I miss you” messages 📩
    <br/>• A lifetime of me being obsessed 🧡💜
  `;
  popConfetti(40);
  setChaos(chaos + 1);
});

// =====================
// CHAOS MODE (funny + faster garden)
// =====================
const chaosBtn = document.getElementById("chaosBtn");
let chaosMode = false;

chaosBtn.addEventListener("click", () => {
  chaosMode = !chaosMode;
  chaosBtn.textContent = chaosMode ? "😇 Calm Mode" : "😈 Chaos Mode";
  setChaos(chaosMode ? chaos + 2 : Math.max(0, chaos - 1));
});

// =====================
// SOUND toggle (optional; put song.mp3 and uncomment in HTML)
// =====================
const soundBtn = document.getElementById("soundBtn");
const bgm = document.getElementById("bgm");
let soundOn = false;

soundBtn.addEventListener("click", async () => {
  // If no source is provided, this will do nothing; still keeps UI clean.
  try {
    soundOn = !soundOn;
    if (soundOn) {
      await bgm.play();
      soundBtn.textContent = "🔊 Sound: ON";
    } else {
      bgm.pause();
      soundBtn.textContent = "🔊 Sound: OFF";
    }
  } catch (e) {
    soundOn = false;
    soundBtn.textContent = "🔊 Sound: OFF (add song.mp3)";
  }
});

// =====================
// FLOWER GARDEN (cursor trail)
// =====================
const canvas = document.getElementById("garden");
const ctx = canvas.getContext("2d", { alpha: true });

let W = 0,
  H = 0;
function resize() {
  W = canvas.width = window.innerWidth * devicePixelRatio;
  H = canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
window.addEventListener("resize", resize);
resize();

let sparklesOn = true;
let slowMotion = false;

document.getElementById("sparkleToggle").addEventListener("click", (e) => {
  sparklesOn = !sparklesOn;
  e.target.textContent = sparklesOn ? "✨ Sparkles: ON" : "✨ Sparkles: OFF";
});
document.getElementById("slowMo").addEventListener("click", (e) => {
  slowMotion = !slowMotion;
  e.target.textContent = slowMotion ? "🐇 Normal Speed" : "🐢 Slow Motion";
});
document.getElementById("clearGarden").addEventListener("click", () => {
  particles.length = 0;
  ctx.clearRect(0, 0, W, H);
});
document.getElementById("boostGarden").addEventListener("click", () => {
  // spawn burst center-ish
  burst(lastX || window.innerWidth / 2, lastY || window.innerHeight / 2, 18);
});

let lastX = null,
  lastY = null;
const particles = [];
let lastSpawn = 0;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function addFlower(x, y) {
  const s = devicePixelRatio;
  const px = x * s;
  const py = y * s;

  const size = rand(6, 14) * s;
  const petals = 5 + Math.floor(Math.random() * 4);

  // purple/orange blend
  const hue =
    Math.random() < 0.6
      ? rand(265, 295) // purple
      : rand(18, 35); // orange

  particles.push({
    x: px,
    y: py,
    vx: rand(-0.4, 0.4) * s,
    vy: rand(-0.9, -0.2) * s,
    life: 1,
    decay: rand(0.01, 0.018) * (slowMotion ? 0.55 : 1),
    size,
    petals,
    hue,
    spin: rand(-0.08, 0.08),
    a: rand(0, Math.PI * 2),
    type: Math.random() < 0.22 ? "butterfly" : "flower",
  });

  flowersPlanted++;
  flowersCountEl.textContent = flowersPlanted;
  bumpLove();
}

function burst(x, y, n) {
  for (let i = 0; i < n; i++) {
    addFlower(x + rand(-18, 18), y + rand(-18, 18));
  }
  setChaos(chaos + 1);
}

function drawFlower(p) {
  const t = p.life;
  const alpha = Math.max(0, Math.min(1, t));
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.a);

  if (p.type === "butterfly") {
    // Cute butterfly
    ctx.globalAlpha = alpha * 0.85;
    ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 1)`;
    ctx.beginPath();
    ctx.ellipse(
      -p.size * 0.5,
      0,
      p.size * 0.55,
      p.size * 0.35,
      0,
      0,
      Math.PI * 2,
    );
    ctx.ellipse(
      +p.size * 0.5,
      0,
      p.size * 0.55,
      p.size * 0.35,
      0,
      0,
      Math.PI * 2,
    );
    ctx.fill();

    ctx.globalAlpha = alpha;
    ctx.fillStyle = `rgba(0,0,0,0.25)`;
    ctx.fillRect(-p.size * 0.1, -p.size * 0.35, p.size * 0.2, p.size * 0.7);
  } else {
    // Petals
    ctx.globalAlpha = alpha * 0.9;
    for (let i = 0; i < p.petals; i++) {
      const ang = (Math.PI * 2 * i) / p.petals;
      ctx.save();
      ctx.rotate(ang);
      ctx.fillStyle = `hsla(${p.hue}, 92%, 70%, 1)`;
      ctx.beginPath();
      ctx.ellipse(
        0,
        -p.size * 0.55,
        p.size * 0.25,
        p.size * 0.48,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
      ctx.restore();
    }
    // Center
    ctx.globalAlpha = alpha;
    ctx.fillStyle = `hsla(${(p.hue + 40) % 360}, 95%, 55%, 1)`;
    ctx.beginPath();
    ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
    ctx.fill();
  }

  // Sparkles
  if (sparklesOn) {
    ctx.globalAlpha = alpha * 0.6;
    ctx.strokeStyle = `hsla(${(p.hue + 20) % 360}, 100%, 85%, 1)`;
    ctx.lineWidth = 1.2 * devicePixelRatio;
    ctx.beginPath();
    ctx.moveTo(-p.size * 0.9, -p.size * 0.2);
    ctx.lineTo(-p.size * 0.6, -p.size * 0.5);
    ctx.moveTo(p.size * 0.9, p.size * 0.2);
    ctx.lineTo(p.size * 0.6, p.size * 0.5);
    ctx.stroke();
  }

  ctx.restore();
}

function tick() {
  // Fade trail (keeps “garden” dreamy)
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, W, H);

  // Update & draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * (chaosMode ? 1.4 : 1);
    p.y += p.vy * (chaosMode ? 1.4 : 1);
    p.a += p.spin * (chaosMode ? 1.5 : 1);
    p.life -= p.decay * (chaosMode ? 1.2 : 1);

    drawFlower(p);

    if (p.life <= 0) particles.splice(i, 1);
  }

  requestAnimationFrame(tick);
}
tick();

// Spawn flowers on mouse move (throttle)
window.addEventListener("mousemove", (e) => {
  lastX = e.clientX;
  lastY = e.clientY;
  const now = performance.now();
  const gap = chaosMode ? 10 : 18; // ms
  if (now - lastSpawn > gap) {
    addFlower(e.clientX, e.clientY);
    lastSpawn = now;
  }
});

// Also on touch
window.addEventListener(
  "touchmove",
  (e) => {
    const t = e.touches[0];
    if (!t) return;
    lastX = t.clientX;
    lastY = t.clientY;
    addFlower(t.clientX, t.clientY);
  },
  { passive: true },
);
