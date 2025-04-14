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
  let perkembangan = "";

  // Menambahkan video di awal
  perkembangan += `
    <div class="mb-4">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/s397LAv7Kx4" 
        title="Perkembangan Janin" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  `;

  // Perkembangan dari minggu 1 hingga 40+
  if (usiaMinggu <= 1) {
    perkembangan +=
      "<p>Pada minggu pertama, janin masih berupa zigot yang terbentuk setelah pembuahan dan mulai melakukan proses pembelahan sel.</p>";
  } else if (usiaMinggu <= 2) {
    perkembangan +=
      "<p>Pada minggu kedua, zigot berkembang menjadi blastokista yang menempel pada dinding rahim dan mulai membentuk lapisan-lapisan yang akan menjadi organ tubuh.</p>";
  } else if (usiaMinggu <= 3) {
    perkembangan +=
      "<p>Pada minggu ketiga, sistem saraf dan jantung mulai berkembang, dan mulai ada pembentukan tulang belakang dan otak.</p>";
  } else if (usiaMinggu <= 4) {
    perkembangan +=
      "<p>Pada minggu keempat, janin mulai terbentuk sebagai embrio, dan organ tubuh seperti jantung dan otak mulai berkembang lebih jelas.</p>";
  } else if (usiaMinggu <= 5) {
    perkembangan +=
      "<p>Pada minggu kelima, pembentukan tangan dan kaki mulai terlihat dengan adanya tonjolan pada sisi tubuh embrio.</p>";
  } else if (usiaMinggu <= 6) {
    perkembangan +=
      "<p>Pada minggu keenam, detak jantung mulai terdengar dan struktur wajah mulai terbentuk.</p>";
  } else if (usiaMinggu <= 7) {
    perkembangan +=
      "<p>Pada minggu ketujuh, organ tubuh seperti mata, telinga, dan mulut mulai terbentuk dengan lebih jelas.</p>";
  } else if (usiaMinggu <= 8) {
    perkembangan +=
      "<p>Pada minggu kedelapan, tangan dan kaki janin mulai berkembang dengan lebih jelas, dan organ tubuh mulai terbentuk lebih lengkap.</p>";
  } else if (usiaMinggu <= 9) {
    perkembangan +=
      "<p>Pada minggu kesembilan, janin sudah memiliki ukuran yang lebih besar dan gerakan awal mulai muncul meskipun ibu belum merasakannya.</p>";
  } else if (usiaMinggu <= 10) {
    perkembangan +=
      "<p>Pada minggu kesepuluh, perkembangan organ janin semakin lengkap, dan telinga serta mata semakin terlihat jelas.</p>";
  } else if (usiaMinggu <= 11) {
    perkembangan +=
      "<p>Pada minggu kesebelas, janin mulai bergerak lebih aktif meskipun ibu masih belum merasakannya.</p>";
  } else if (usiaMinggu <= 12) {
    perkembangan +=
      "<p>Pada minggu kedua belas, janin mulai berkembang lebih lanjut dengan pembentukan kaki, tangan, serta struktur wajah yang lebih jelas.</p>";
  } else if (usiaMinggu <= 13) {
    perkembangan +=
      "<p>Pada minggu ketiga belas, janin sudah berkembang lebih besar dan organ tubuh hampir sempurna terbentuk.</p>";
  } else if (usiaMinggu <= 14) {
    perkembangan +=
      "<p>Pada minggu keempat belas, janin mulai mengembangkan rambut halus di kulit kepala dan kuku-kuku mulai tumbuh.</p>";
  } else if (usiaMinggu <= 15) {
    perkembangan +=
      "<p>Pada minggu kelima belas, wajah janin semakin terbentuk, dengan alis dan bibir yang semakin terlihat jelas.</p>";
  } else if (usiaMinggu <= 16) {
    perkembangan +=
      "<p>Pada minggu keenam belas, janin sudah mulai memiliki rambut di kulit kepala dan kuku-kuku mulai tumbuh.</p>";
  } else if (usiaMinggu <= 17) {
    perkembangan +=
      "<p>Pada minggu ketujuh belas, organ tubuh semakin berkembang dan janin mulai terlihat lebih seperti manusia kecil.</p>";
  } else if (usiaMinggu <= 18) {
    perkembangan +=
      "<p>Pada minggu kedelapan belas, janin semakin aktif bergerak dan ibu mulai merasakannya lebih jelas.</p>";
  } else if (usiaMinggu <= 19) {
    perkembangan +=
      "<p>Pada minggu kesembilan belas, janin sudah mulai memiliki lapisan pelindung kulit dan bisa merasakan sentuhan ringan.</p>";
  } else if (usiaMinggu <= 20) {
    perkembangan +=
      "<p>Pada minggu kedua puluh, janin mulai mendengar suara dari luar dan ibu bisa merasakan gerakan janin pertama kali.</p>";
  } else if (usiaMinggu <= 21) {
    perkembangan +=
      "<p>Pada minggu kedua puluh satu, janin mulai memiliki refleks seperti menghisap jari dan bergerak lebih banyak.</p>";
  } else if (usiaMinggu <= 22) {
    perkembangan +=
      "<p>Pada minggu kedua puluh dua, kulit janin mulai lebih tebal dan lebih berwarna.</p>";
  } else if (usiaMinggu <= 23) {
    perkembangan +=
      "<p>Pada minggu kedua puluh tiga, janin mulai mengembangkan lebih banyak rambut dan dapat bergerak dengan lebih terkoordinasi.</p>";
  } else if (usiaMinggu <= 24) {
    perkembangan +=
      "<p>Pada minggu kedua puluh empat, kulit janin mulai lebih tebal dan janin sudah dapat membuka dan menutup matanya.</p>";
  } else if (usiaMinggu <= 25) {
    perkembangan +=
      "<p>Pada minggu kedua puluh lima, janin mulai mengembangkan lapisan lemak yang semakin terlihat dan berat badan janin meningkat.</p>";
  } else if (usiaMinggu <= 26) {
    perkembangan +=
      "<p>Pada minggu kedua puluh enam, janin semakin kuat dengan lapisan lemak dan gerakan yang semakin aktif.</p>";
  } else if (usiaMinggu <= 27) {
    perkembangan +=
      "<p>Pada minggu kedua puluh tujuh, janin mulai mengembangkan tulang dan otot yang semakin kuat.</p>";
  } else if (usiaMinggu <= 28) {
    perkembangan +=
      "<p>Pada minggu kedua puluh delapan, janin semakin berkembang dengan berat badan yang meningkat dan persiapan untuk lahir semakin jelas.</p>";
  } else if (usiaMinggu <= 29) {
    perkembangan +=
      "<p>Pada minggu kedua puluh sembilan, janin semakin aktif dan dapat membuka mata dengan lebih jelas.</p>";
  } else if (usiaMinggu <= 30) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh, organ-organ janin mulai lebih sempurna dengan perkembangan sistem saraf yang lebih baik.</p>";
  } else if (usiaMinggu <= 31) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh satu, janin semakin berkembang dengan lapisan lemak yang semakin terlihat dan sistem pernapasan semakin kuat.</p>";
  } else if (usiaMinggu <= 32) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh dua, janin memiliki lapisan lemak tubuh dan semakin siap untuk lahir dengan organ-organ vital yang semakin berkembang.</p>";
  } else if (usiaMinggu <= 33) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh tiga, janin semakin aktif bergerak dengan kekuatan otot yang lebih baik.</p>";
  } else if (usiaMinggu <= 34) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh empat, janin semakin besar dengan tubuh yang lebih berisi dan posisi janin mulai bergerak menuju persiapan lahir.</p>";
  } else if (usiaMinggu <= 35) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh lima, janin mulai semakin siap untuk dilahirkan dengan organ-organ tubuh yang semakin matang.</p>";
  } else if (usiaMinggu <= 36) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh enam, janin mulai menambah berat badan dengan cepat dan posisi janin biasanya sudah berada di bawah rahim.</p>";
  } else if (usiaMinggu <= 37) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh tujuh, janin sudah sangat berkembang dan siap untuk lahir kapan saja.</p>";
  } else if (usiaMinggu <= 38) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh delapan, janin semakin siap dengan persiapan kelahiran yang semakin matang.</p>";
  } else if (usiaMinggu <= 39) {
    perkembangan +=
      "<p>Pada minggu ketiga puluh sembilan, janin sudah memiliki berat badan yang cukup untuk dilahirkan.</p>";
  } else if (usiaMinggu <= 40) {
    perkembangan +=
      "<p>Pada minggu keempat puluh, janin sepenuhnya berkembang dan siap untuk dilahirkan.</p>";
  } else {
    perkembangan +=
      "<p>Usia kehamilan sudah melebihi 40 minggu, yang berarti persalinan bisa segera terjadi kapan saja.</p>";
  }

  return perkembangan;
}

