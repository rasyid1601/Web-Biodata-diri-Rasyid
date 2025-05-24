/*Foto Profil Tentang Saya*/
const fotoProfil = document.querySelector(".foto-profil");
const greeting = document.getElementById("greeting-text");

fotoProfil.addEventListener("click", () => {
  fotoProfil.classList.add("clicked");
  greeting.classList.add("show");

  // Reset animasi agar bisa diklik ulang
  setTimeout(() => {
    fotoProfil.classList.remove("clicked");
  }, 600);
});

/* Donload cv rasyid yogyakarta */
function startDownload() {
  const bar = document.getElementById("progressBar");
  const fill = document.getElementById("progressFill");
  bar.style.display = "block";
  fill.style.width = "0%";

  let percent = 0;
  const interval = setInterval(() => {
    percent += 5;
    fill.style.width = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = "dokumen/CV Rasyid Yogyakarta.pdf"; // Ganti sesuai nama file CV
        bar.style.display = "none";
      }, 300);
    }
  }, 100);
}
