function hitungKehamilan() {
  const input = document.getElementById("hpht").value;
  const hasil = document.getElementById("hasil");
  const perkembanganList = document.getElementById("perkembangan-list");

  if (!input) {
    hasil.innerHTML =
      '<p class="text-red-500">Silakan masukkan tanggal HPHT terlebih dahulu.</p>';
    return;
  }

  const hphtDate = new Date(input);
  const today = new Date();
  const selisihHari = Math.floor((today - hphtDate) / (1000 * 60 * 60 * 24));

  const usiaMinggu = Math.floor(selisihHari / 7);
  const usiaHari = selisihHari % 7;

  const usiaBulan = Math.floor(usiaMinggu / 4); // Perkiraan konversi
  const sisaMinggu = usiaMinggu % 4;

  const hpl = new Date(hphtDate);
  hpl.setDate(hpl.getDate() + 280);

  // Format tanggal HPL (contoh: 14 Agustus 2025)
  const hplFormatted = hpl.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Notifikasi HPL
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("HPL Tersimpan", {
        body: `HPL Anda: ${hplFormatted}`,
        icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
      });
    }
  });

  hasil.innerHTML = `
    <p><i class="fas fa-baby-carriage text-pink-500"></i> Usia kehamilan Anda: 
      <strong>${usiaMinggu} minggu ${usiaHari} hari</strong> 
      (<strong>${usiaBulan} bulan ${sisaMinggu} minggu</strong>)
    </p>
    <p><i class="fas fa-calendar-day text-pink-500"></i> Perkiraan tanggal lahir (HPL): 
      <strong>${hplFormatted}</strong>
    </p>
  `;

  perkembanganList.innerHTML = getPerkembanganJanin(usiaMinggu);
}

// Fungsi untuk menampilkan perkembangan janin berdasarkan usia kehamilan
function getPerkembanganJanin(usiaMinggu) {
  let perkembangan = `
    <div class="mb-4">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/s397LAv7Kx4" 
        title="Perkembangan Janin" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  `;

  if (usiaMinggu <= 4) {
    perkembangan +=
      "<p>Pada usia kehamilan 4 minggu, janin masih berupa embrio yang mulai terbentuk di dalam rahim. Sel-sel mulai berkembang menjadi organ penting.</p>";
  } else if (usiaMinggu <= 8) {
    perkembangan +=
      "<p>Pada usia kehamilan 8 minggu, organ tubuh janin mulai terbentuk dengan lebih jelas. Tangan dan kaki janin mulai berkembang.</p>";
  } else if (usiaMinggu <= 12) {
    perkembangan +=
      "<p>Pada usia kehamilan 12 minggu, janin mulai bergerak meskipun ibu belum merasakannya. Pipi dan bibir mulai terbentuk.</p>";
  } else if (usiaMinggu <= 16) {
    perkembangan +=
      "<p>Pada usia kehamilan 16 minggu, janin sudah mulai memiliki rambut di kulit kepala dan kuku-kuku mulai tumbuh.</p>";
  } else if (usiaMinggu <= 20) {
    perkembangan +=
      "<p>Pada usia kehamilan 20 minggu, janin mulai mendengar suara dari luar. Ibu bisa merasakan gerakan janin pertama kali.</p>";
  } else if (usiaMinggu <= 24) {
    perkembangan +=
      "<p>Pada usia kehamilan 24 minggu, kulit janin mulai lebih tebal dan janin sudah dapat membuka dan menutup matanya.</p>";
  } else if (usiaMinggu <= 28) {
    perkembangan +=
      "<p>Pada usia kehamilan 28 minggu, janin semakin berkembang dengan berat badan yang meningkat dan persiapan untuk lahir semakin jelas.</p>";
  } else if (usiaMinggu <= 32) {
    perkembangan +=
      "<p>Pada usia kehamilan 32 minggu, janin memiliki lapisan lemak tubuh dan semakin siap untuk lahir dengan organ-organ vital yang semakin berkembang.</p>";
  } else if (usiaMinggu <= 36) {
    perkembangan +=
      "<p>Pada usia kehamilan 36 minggu, janin mulai menambah berat badan dengan cepat dan posisi janin biasanya sudah berada di bawah rahim.</p>";
  } else if (usiaMinggu <= 40) {
    perkembangan +=
      "<p>Pada usia kehamilan 40 minggu, janin sepenuhnya berkembang dan siap untuk dilahirkan.</p>";
  } else {
    perkembangan +=
      "<p>Usia kehamilan sudah melebihi 40 minggu, yang berarti persalinan bisa segera terjadi kapan saja.</p>";
  }

  return perkembangan;
}
