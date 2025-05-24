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

/* Modal untuk menampilkan gambar besar saat foto profil diklik*/
  const modal = document.getElementById("modalFoto");
  const modalImg = document.getElementById("imgModal");
  const closeBtn = document.getElementById("closeModal");

  fotoProfil.addEventListener('click', () => {
    // Tampilkan teks
    greeting.classList.add('show');

    // Tampilkan modal dengan gambar besar
    modal.style.display = "block";
    modalImg.src = fotoProfil.src;
  });

  // Tutup modal saat klik tombol close
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Tutup modal jika klik di luar gambar
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
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
