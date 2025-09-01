document.addEventListener("touchstart", jump);
document.addEventListener("keydown", e => { if (e.code === "Space") jump(); });
document.addEventListener("click", jump);
document.addEventListener("touchstart", jump); // <--- add this
