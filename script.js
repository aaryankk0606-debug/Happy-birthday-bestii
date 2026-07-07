function checkPassword() {
    const pass = document.getElementById("password").value.trim();

    if (pass.toLowerCase() === "bakapiyo") {
        window.location.href = "gallery.html";
    } else {
        document.getElementById("wrong").innerHTML =
            "❌ Oops! Wrong password 💜";
    }
}

// Floating hearts
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💜";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.transition = "all 6s linear";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-10vh";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 700);