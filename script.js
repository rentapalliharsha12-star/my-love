// TYPEWRITER EFFECT
const text = "You are the one who shows lots of love with all your heart for me 🌹🌹 Love you so much darling 😘💕💕";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();

// BACKGROUND MUSIC (fade in)
const music = document.getElementById("bgMusic");
setTimeout(() => {
    music.volume = 0.3;
    music.play();
}, 1500);

// FLOATING HEARTS
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}, 350);

// ACCEPT BUTTON
function acceptLove() {
    document.body.classList.add("dark");
    celebrate();
}

// CONFETTI CELEBRATION
function celebrate() {
    for (let i = 0; i < 120; i++) {
        const conf = document.createElement("div");
        conf.className = "confetti";
        conf.innerHTML = "💖";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.top = Math.random() * 50 + "vh";
        conf.style.fontSize = (12 + Math.random() * 20) + "px";
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 2000);
    }
}
