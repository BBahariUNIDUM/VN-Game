const stories = {
    id: [
    // =================== EPISODE 1 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_school.jpg",
    text: "Legenda Raja Iblis telah lama padam. Namun, hari ini, sebuah jiwa lama terlahir kembali di tubuh seorang pemuda biasa.",
    bgm: "audio/ep1_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "{name} terbangun di ranjang sempit asrama murid kasta terendah. 'Inikah reinkarnasi? Sungguh ironis.'",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Senior",
    bg: "img/bg_corridor.jpg",
    char: "img/char/senior.png",
    text: "\"Dasar kelas bawah! Pergi sana, jangan rusak nama sekolah!\"",
    choices: [
      { text: "Menunduk meminta maaf", next: 3, moral: +1 },
      { text: "Memandang tajam tanpa bicara", next: 4 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_corridor.jpg",
    char: "img/char/mc_normal.png",
    text: "Aku menahan amarah. Hidup sebagai manusia memang sulit.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "{name}",
    bg: "img/bg_corridor.jpg",
    char: "img/char/mc_sly.png",
    text: "Suatu hari, mereka akan tahu siapa aku sebenarnya.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "Di asrama, seorang murid menyapa ramah.",
    choices: [{ text: "Sapa balik", next: 6, moral: +1 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Halo! Aku Leo. Kita satu kamar, ya?\"",
    choices: [
      { text: "Bersikap ramah", next: 7, moral: +1 },
      { text: "Abaikan saja", next: 8, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Semoga kita bisa berteman.\" Leo tersenyum lebar.",
    choices: [{ text: "Lanjut", next: 9 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Kalau butuh bantuan, bilang saja ya!\"",
    choices: [{ text: "Lanjut", next: 9 }]
  },
  {
    name: "Narator",
    bg: "img/bg_school.jpg",
    text: "Hari pertamamu di sekolah sihir terasa berat. Namun, petualanganmu baru saja dimulai.",
    choices: [
      { text: "Akhiri episode", next: 10 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_school.jpg",
    text: "Episode 1 selesai! Siap lanjut ke episode berikutnya?",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

  
    // =================== EPISODE 2 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_schoolhall.jpg",
    text: "Hari kedua, seluruh murid dikumpulkan untuk tes penempatan kasta. Semua terlihat tegang.",
    bgm: "audio/ep2_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Guru Kasta",
    bg: "img/bg_schoolhall.jpg",
    char: "img/char/teacher.png",
    text: "\"Mulai dari sekarang, prestasi dan moral kalian menentukan masa depan!\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Narator",
    bg: "img/bg_class.jpg",
    text: "Tes sihir dimulai. Kamu melihat seorang murid gagal dan diejek ramai-ramai.",
    choices: [
      { text: "Bantu murid itu", next: 3, moral: +1 },
      { text: "Ikut menertawakan", next: 4, moral: -1 }
    ]
  },
  {
    name: "Murid Lemah",
    bg: "img/bg_class.jpg",
    char: "img/char/weak_student.png",
    text: "\"T-terima kasih... kau baik sekali...\"",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Narator",
    bg: "img/bg_class.jpg",
    text: "Tawamu memekakkan telinga. Murid itu menunduk dan menjauh.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_class.jpg",
    char: "img/char/friend.png",
    text: "\"Kamu selalu aneh, ya! Tapi aku suka keberanianmu!\"",
    choices: [
      { text: "Balas candaan Leo", next: 6 },
      { text: "Cuek saja", next: 7 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Hehe, semua demi bertahan hidup, bro.\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_normal.png",
    text: "Aku harus lebih berhati-hati. Dunia ini keras.",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolhall.jpg",
    text: "Di akhir ujian, seorang guru misterius menatapmu dalam-dalam.",
    choices: [{ text: "Akhiri episode", next: 9 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolhall.jpg",
    text: "Episode 2 selesai. Kasta baru, tantangan baru.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

    // =================== EPISODE 3 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Setelah kelas, beberapa murid kaya menghampirimu.",
    bgm: "audio/ep3_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Murid Kaya",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/rich_kid.png",
    text: "\"Kamu pikir bisa naik kasta dengan mudah? Jangan bermimpi!\"",
    choices: [
      { text: "Menahan diri", next: 2, moral: +1 },
      { text: "Membalas dengan sihir kecil", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_normal.png",
    text: "Sabar adalah kunci kekuatan.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Murid Kaya",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/rich_kid.png",
    text: "\"Apa?! Kamu...\" Mereka marah, tapi akhirnya pergi.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Narator",
    bg: "img/bg_library.jpg",
    text: "Di perpustakaan, kamu membaca buku sihir kuno.",
    choices: [
      { text: "Pelajari rahasia sihir", next: 5, moral: +1 },
      { text: "Gunakan waktu tidur", next: 6 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_library.jpg",
    char: "img/char/mc_focus.png",
    text: "Ilmu lama mulai kembali. Aku mulai mengingat masa lalu.",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "{name}",
    bg: "img/bg_library.jpg",
    char: "img/char/mc_sleep.png",
    text: "Tak ada salahnya beristirahat sebentar.",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Malam harinya, suara misterius membisikkan ancaman.",
    choices: [{ text: "Akhiri episode", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 3 selesai. Makin banyak yang menyorotimu.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

    // =================== EPISODE 4 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "Tengah malam, seorang murid misterius masuk ke asramamu.",
    bgm: "audio/ep4_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Bawahan Lama",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Raja... Apakah itu benar kau?\" bisiknya pelan.",
    choices: [
      { text: "Akui identitas", next: 2 },
      { text: "Sembunyikan identitas", next: 3, moral: +1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Jangan sebut aku raja! Di sini aku hanya murid biasa!\"",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_normal.png",
    text: "\"Kau salah orang... Aku hanya manusia biasa.\"",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Bawahan Lama",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Saya akan selalu mendukung Anda, raja...\"",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Siapa itu tadi? Kamu kenal?\"",
    choices: [
      { text: "Jujur ke Leo", next: 6, moral: +1 },
      { text: "Bohong ke Leo", next: 7, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_sad.png",
    text: "\"Dia hanya teman lama... Tidak penting.\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Bukan siapa-siapa, kok!\" Leo tertawa kecil.",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Pagi tiba, rahasia baru mulai membayangi harimu.",
    choices: [
      { text: "Akhiri episode", next: 9 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 4 selesai. Siap menata strategi?",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

    // =================== EPISODE 5 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_class.jpg",
    text: "Ujian sihir besar dimulai. Anak keluarga elit, Sylas, muncul sebagai bintang baru.",
    bgm: "audio/ep5_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_class.jpg",
    char: "img/char/sylas.png",
    text: "\"Aku akan membuktikan kalau hanya yang berdarah murni yang layak jadi raja!\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Guru",
    bg: "img/bg_class.jpg",
    char: "img/char/teacher.png",
    text: "\"{name}, giliranmu!\" Semua mata menatapmu.",
    choices: [
      { text: "Tampilkan kekuatan", next: 3, moral: +1 },
      { text: "Sembunyikan kekuatan", next: 4 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_power.png",
    text: "Semua terkejut melihat kekuatanmu yang tidak biasa.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_normal.png",
    text: "Kamu memilih bermain aman.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_class.jpg",
    char: "img/char/sylas.png",
    text: "\"Kau... siapa sebenarnya?\"",
    choices: [
      { text: "Balas dengan santai", next: 6 },
      { text: "Balas dengan tantangan", next: 7, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Hanya murid biasa, kok.\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Tunggu saja, suatu hari aku akan melampauimu!\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Rivalitas baru dimulai. Siapakah yang akan menjadi raja selanjutnya?",
    choices: [
      { text: "Akhiri episode", next: 9 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 5 selesai.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

    // =================== EPISODE 6 ======================
    [
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "Kamu mulai membangun jaringan rahasia di antara murid-murid kasta bawah.",
    bgm: "audio/ep6_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Bawahan Lama",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Banyak yang setia padamu, Raja. Mereka hanya menunggu komando.\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Narator",
    bg: "img/bg_library.jpg",
    text: "Di perpustakaan, kamu melihat Leo diam-diam berbicara dengan guru. Apakah dia bisa dipercaya?",
    choices: [
      { text: "Percayai Leo", next: 3, moral: +1 },
      { text: "Curigai Leo", next: 4, moral: -1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"Aku bicara soal beasiswa untukmu. Semangat, ya!\"",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"Eh... cuma diskusi tugas kok!\" Leo tampak gugup.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Narator",
    bg: "img/bg_night.jpg",
    text: "Malam harinya, jaringanmu mulai bergerak: sabotase, propaganda, dan penggalangan kekuatan.",
    choices: [
      { text: "Rangkul murid lain", next: 6, moral: +1 },
      { text: "Paksa dengan ancaman", next: 7, moral: -1 }
    ]
  },
  {
    name: "Murid Biasa",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Terima kasih, {name}! Kami ikut karena percaya padamu.\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Murid Biasa",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Baik... kami ikut, jangan sakiti keluarga kami!\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Jaringan rahasiamu tumbuh, namun resiko pun meningkat.",
    choices: [
      { text: "Akhiri episode", next: 9 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 6 selesai. Jalan menuju tahta makin terbuka.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 6 ======================
[
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "Kamu mulai membangun jaringan rahasia di antara murid-murid kasta bawah.",
    bgm: "audio/ep6_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Bawahan Lama",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Banyak yang setia padamu, Raja. Mereka hanya menunggu komando.\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Narator",
    bg: "img/bg_library.jpg",
    text: "Di perpustakaan, kamu melihat Leo diam-diam berbicara dengan guru. Apakah dia bisa dipercaya?",
    choices: [
      { text: "Percayai Leo", next: 3, moral: +1 },
      { text: "Curigai Leo", next: 4, moral: -1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"Aku bicara soal beasiswa untukmu. Semangat, ya!\"",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"Eh... cuma diskusi tugas kok!\" Leo tampak gugup.",
    choices: [{ text: "Lanjut", next: 5 }]
  },
  {
    name: "Narator",
    bg: "img/bg_night.jpg",
    text: "Malam harinya, jaringanmu mulai bergerak: sabotase, propaganda, dan penggalangan kekuatan.",
    choices: [
      { text: "Rangkul murid lain", next: 6, moral: +1 },
      { text: "Paksa dengan ancaman", next: 7, moral: -1 }
    ]
  },
  {
    name: "Murid Biasa",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Terima kasih, {name}! Kami ikut karena percaya padamu.\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Murid Biasa",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Baik... kami ikut, jangan sakiti keluarga kami!\"",
    choices: [{ text: "Lanjut", next: 8 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Jaringan rahasiamu tumbuh, namun resiko pun meningkat.",
    choices: [
      { text: "Akhiri episode", next: 9 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 6 selesai. Jalan menuju tahta makin terbuka.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 7 ======================
[
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Kompetisi sihir tahunan dimulai! Semua murid ingin naik kasta.",
    bgm: "audio/ep7_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Guru",
    bg: "img/bg_arena.jpg",
    char: "img/char/teacher.png",
    text: "\"Dilarang curang. Semuanya diawasi sihir pengawas!\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_arena.jpg",
    char: "img/char/sylas.png",
    text: "\"Kali ini aku akan mengalahkanmu di depan semua orang, {name}!\"",
    choices: [{ text: "Lanjut", next: 3 }]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Pertandinganmu dimulai, tapi seseorang menjatuhkan ramuan licik di arahmu!",
    choices: [
      { text: "Terus bertarung jujur", next: 4, moral: +1 },
      { text: "Balas curang", next: 5, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_focus.png",
    text: "Kamu bertahan dengan sihir murni dan membuat semua kagum.",
    choices: [{ text: "Lanjut", next: 6 }]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_dark.png",
    text: "Kau gunakan trik licik, Sylas terpeleset dan dipermalukan.",
    choices: [{ text: "Lanjut", next: 6 }]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Leo tampak gelisah melihatmu. 'Kau berubah... atau memang seperti ini dari dulu?'",
    choices: [
      { text: "Abaikan Leo", next: 7, moral: -1 },
      { text: "Jelaskan pada Leo", next: 8, moral: +1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "Leo tampak kecewa dan menjauh.",
    choices: [{ text: "Lanjut", next: 9 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"Aku hanya ingin kau tetap jadi temanku, bukan monster baru...\"",
    choices: [{ text: "Lanjut", next: 9 }]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Kompetisi selesai. Kemenanganmu jadi pembicaraan semua orang.",
    choices: [
      { text: "Akhiri episode", next: 10 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Episode 7 selesai. Kemenangan tak selalu membawa kedamaian.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 8 ======================
[
  {
    name: "Narator",
    bg: "img/bg_night.jpg",
    text: "Isu tentangmu makin santer. Banyak murid penasaran siapa dirimu sebenarnya.",
    bgm: "audio/ep8_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Bawahan Lama",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Sudah saatnya, Raja. Banyak yang akan mengikutimu jika kau mau membuka identitas.\"",
    choices: [
      { text: "Akui dirimu Raja Iblis", next: 2, moral: -1 },
      { text: "Rahasiakan, tetap jadi murid", next: 3, moral: +1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Mulai sekarang, aku akan ambil kembali tahta!\"",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "Aku memilih hidup dengan dua identitas, menunggu saat yang tepat.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Keesokan harinya, kau mulai dicurigai. Musuh besarmu mulai bergerak.",
    choices: [
      { text: "Akhiri episode", next: 5 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 8 selesai. Identitasmu kini jadi rahasia terbesar di sekolah.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 9 ======================
[
  {
    name: "Narator",
    bg: "img/bg_schoolyard.jpg",
    text: "Monster misterius menyerang sekolah! Semua panik.",
    bgm: "audio/ep9_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/sylas.png",
    text: "\"Kau penakut, kan? Buktikan keberanianmu sekarang!\"",
    choices: [
      { text: "Selamatkan murid lain", next: 2, moral: +1 },
      { text: "Manfaatkan kekacauan demi ambisi", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_hero.png",
    text: "Kau menyelamatkan banyak murid, dan mereka mulai menghormatimu.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_dark.png",
    text: "Kau gunakan sihir gelap, membuat kekacauan lebih parah untuk memperlemah guru dan senior.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Leo",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/friend.png",
    text: "\"Kau pahlawan... atau monster baru?\"",
    choices: [
      { text: "Aku hanya berusaha bertahan hidup", next: 5 },
      { text: "Aku ingin kekuatan", next: 6 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_sad.png",
    text: "Kamu mulai meragukan tujuanmu sendiri.",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_dark.png",
    text: "Ambisi di depan mata, tak ada yang bisa menghentikanmu.",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Narator",
    bg: "img/bg_ruins.jpg",
    text: "Monster berhasil diusir. Tapi dunia sekolah tidak akan pernah sama.",
    choices: [
      { text: "Akhiri episode", next: 8 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_ruins.jpg",
    text: "Episode 9 selesai. Reputasimu kini misterius.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 10 ======================
[
  {
    name: "Narator",
    bg: "img/bg_dorm.jpg",
    text: "Leo dan beberapa teman mendebatmu. 'Apa kau masih teman kami, atau sudah jadi monster?'",
    bgm: "audio/ep10_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Pilih, {name}. Teman atau tahta?\"",
    choices: [
      { text: "Pilih teman", next: 2, moral: +1 },
      { text: "Abaikan demi tahta", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Kalian keluarga baruku... Maafkan semua ambisi bodohku.\"",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Tak ada yang lebih penting dari tahta... bahkan kalian pun tidak.\"",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Narator",
    bg: "img/bg_throne.jpg",
    text: "Salah satu guru senior menguji kesetiaanmu dengan tugas rahasia.",
    choices: [
      { text: "Terima tugas dengan jujur", next: 5, moral: +1 },
      { text: "Tipu guru demi keuntungan sendiri", next: 6, moral: -1 }
    ]
  },
  {
    name: "Guru Senior",
    bg: "img/bg_throne.jpg",
    char: "img/char/teacher.png",
    text: "\"Aku akan mengingat ketulusanmu. Semoga kau bijak di masa depan.\"",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Guru Senior",
    bg: "img/bg_throne.jpg",
    char: "img/char/teacher.png",
    text: "\"Kau pikir aku bodoh? Jangan pernah main-main denganku!\"",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Narator",
    bg: "img/bg_throne.jpg",
    text: "Ujian moral dan kesetiaan telah dilalui. Pilihanmu menuntun ke akhir cerita.",
    choices: [
      { text: "Akhiri episode", next: 8 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_throne.jpg",
    text: "Episode 10 selesai. Siap hadapi musuh terbesarmu?",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 11 ======================
[
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Final duel diadakan. Semua murid, guru, dan bahkan keluarga kerajaan menonton.",
    bgm: "audio/ep11_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_arena.jpg",
    char: "img/char/sylas.png",
    text: "\"Ini kesempatan terakhirmu. Buktiin siapa dirimu!\"",
    choices: [
      { text: "Duel ksatria (adil)", next: 2, moral: +1 },
      { text: "Duel licik", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_hero.png",
    text: "Pertarungan berlangsung sengit dan dramatis.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_dark.png",
    text: "Kau gunakan sihir gelap, dan Sylas hampir celaka.",
    choices: [{ text: "Lanjut", next: 4 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"Kau menang... tapi harga yang kau bayar besar!\"",
    choices: [
      { text: "Peluk Leo", next: 5, moral: +1 },
      { text: "Abaikan", next: 6, moral: -1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"Aku selalu jadi temanmu, apapun yang terjadi.\"",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"Selamat, {name}. Aku harap kau temukan apa yang kau cari.\"",
    choices: [{ text: "Lanjut", next: 7 }]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Pertarungan selesai. Semua bersiap menanti penobatan atau kehancuran.",
    choices: [
      { text: "Akhiri episode", next: 8 }
    ]
  },
  {
    name: "Narator",
    bg: "img/bg_arena.jpg",
    text: "Episode 11 selesai. Akhir segalanya di depan mata.",
    choices: [
      { text: "Lanjut ke episode berikutnya", next: "next-episode" },
      { text: "Kembali ke menu episode", next: -1 }
    ]
  }
],

// =================== EPISODE 12 ======================
[
  {
    name: "Narator",
    bg: "img/bg_ceremony.jpg",
    text: "Semua murid berkumpul di aula. Hari penentuan telah tiba.",
    bgm: "audio/ep12_bgm.mp3",
    choices: [{ text: "Lanjut", next: 1 }]
  },
  {
    name: "Guru Kepala",
    bg: "img/bg_ceremony.jpg",
    char: "img/char/principal.png",
    text: "\"Setelah banyak ujian, hanya yang berjiwa besar yang layak jadi raja.\"",
    choices: [{ text: "Lanjut", next: 2 }]
  },
  {
    name: "Narator",
    bg: "img/bg_ceremony.jpg",
    text: "Kamu menatap kursi tahta. Semua pilihanmu—baik dan buruk—bermain di benakmu.",
    choices: [
      { text: "Terima nasib", next: "ending-check" }
    ]
  }
],

// =================== True Ending ======================
[
  {
    name: "Narator",
    bg: "img/bg_throne.jpg",
    text: "Dengan moral tinggi dan hati yang berubah, kau dinobatkan menjadi raja. Dunia baru terlahir, penuh harapan dan keadilan.",
    choices: [
      { text: "Kembali ke lobby", next: -1 }
    ]
  }
],

// =================== Normal Ending ======================
[
  {
    name: "Narator",
    bg: "img/bg_family.jpg",
    text: "Kau memilih hidup sebagai manusia biasa, meninggalkan ambisi lama. Kau menemukan keluarga dan sahabat sejati.",
    choices: [
      { text: "Kembali ke lobby", next: -1 }
    ]
  }
],

// =================== Bad Ending ======================
[
  {
    name: "Narator",
    bg: "img/bg_ruins.jpg",
    text: "Ambisi membutakanmu. Kau gagal meraih tahta, dikhianati dan dilupakan. Dunia tenggelam dalam kegelapan baru.",
    choices: [
      { text: "Kembali ke lobby", next: -1 }
    ]
  }
],


  ],
    // =================== ENGLISH ======================
    en: [
    // EPISODE 1
    [
  {
    name: "Narrator",
    bg: "img/bg_school.jpg",
    text: "The whole Demon Lord legend? Old news. But today, that soul wakes up... in the body of a totally regular guy.",
    bgm: "audio/ep1_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_dorm.jpg",
    text: "{name} wakes up in a cramped dorm bed, lowest rank in the school. 'So this is reincarnation? Seriously? What a joke.'",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Senior",
    bg: "img/bg_corridor.jpg",
    char: "img/char/senior.png",
    text: "\"Hey, bottom-ranker! Get lost, don’t embarrass our school!\"",
    choices: [
      { text: "Lower your head, say sorry", next: 3, moral: +1 },
      { text: "Just glare at him", next: 4 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_corridor.jpg",
    char: "img/char/mc_normal.png",
    text: "I swallow my anger. Being human sucks sometimes.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "{name}",
    bg: "img/bg_corridor.jpg",
    char: "img/char/mc_sly.png",
    text: "One day, they’ll find out who I really am.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_dorm.jpg",
    text: "Back at the dorm, some student actually says hi.",
    choices: [{ text: "Say hi back", next: 6, moral: +1 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Hey! I’m Leo. Guess we’re roommates!\"",
    choices: [
      { text: "Act friendly", next: 7, moral: +1 },
      { text: "Ignore him", next: 8, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Hope we can be friends.\" Leo gives a big smile.",
    choices: [{ text: "Continue", next: 9 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"If you ever need help, just let me know!\"",
    choices: [{ text: "Continue", next: 9 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_school.jpg",
    text: "Your first day at magic school is rough. But hey, this adventure is just getting started.",
    choices: [
      { text: "End episode", next: 10 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_school.jpg",
    text: "Episode 1 done! Ready for the next chapter?",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 2 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_schoolhall.jpg",
    text: "Day two. All the students are called for the caste placement test. Everyone looks stressed out.",
    bgm: "audio/ep2_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Caste Teacher",
    bg: "img/bg_schoolhall.jpg",
    char: "img/char/teacher.png",
    text: "\"From now on, your grades and your morals decide your future!\"",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_class.jpg",
    text: "The magic test starts. You see a student fail, and everyone laughs at him.",
    choices: [
      { text: "Help that student", next: 3, moral: +1 },
      { text: "Laugh along", next: 4, moral: -1 }
    ]
  },
  {
    name: "Weak Student",
    bg: "img/bg_class.jpg",
    char: "img/char/weak_student.png",
    text: "\"T-thank you... you’re really nice...\"",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_class.jpg",
    text: "Your laugh is kinda harsh. The student looks down and walks away.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_class.jpg",
    char: "img/char/friend.png",
    text: "\"You’re kinda weird, y’know! But I like your guts!\"",
    choices: [
      { text: "Joke back at Leo", next: 6 },
      { text: "Just ignore him", next: 7 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Heh, gotta survive somehow, man.\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_normal.png",
    text: "Gotta be careful. This world is tough.",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolhall.jpg",
    text: "At the end of the exam, a mysterious teacher gives you a long, serious look.",
    choices: [{ text: "End episode", next: 9 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolhall.jpg",
    text: "Episode 2 finished. New caste, new problems.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 3 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "After class, some rich students come up to you.",
    bgm: "audio/ep3_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Rich Student",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/rich_kid.png",
    text: "\"You think you can climb ranks that easy? Don’t dream!\"",
    choices: [
      { text: "Keep cool", next: 2, moral: +1 },
      { text: "Fight back with a small spell", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_normal.png",
    text: "Patience is real strength.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Rich Student",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/rich_kid.png",
    text: "\"What?! You...\" They’re mad, but finally leave.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_library.jpg",
    text: "At the library, you read old magic books.",
    choices: [
      { text: "Learn the secrets of magic", next: 5, moral: +1 },
      { text: "Just nap", next: 6 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_library.jpg",
    char: "img/char/mc_focus.png",
    text: "My old knowledge comes back. I start remembering my past life.",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "{name}",
    bg: "img/bg_library.jpg",
    char: "img/char/mc_sleep.png",
    text: "Nothing wrong with a little nap.",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "That night, a mysterious voice whispers threats to you.",
    choices: [{ text: "End episode", next: 8 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 3 over. More and more people are watching you.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 4 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_dorm.jpg",
    text: "It’s midnight. A mysterious student sneaks into your dorm.",
    bgm: "audio/ep4_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Old Minion",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"My king... Is that really you?\" he whispers.",
    choices: [
      { text: "Admit your identity", next: 2 },
      { text: "Hide your identity", next: 3, moral: +1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Don’t call me king! Here I’m just a normal student!\"",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_normal.png",
    text: "\"Wrong person... I’m just a regular guy.\"",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Old Minion",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"I’ll always support you, my king...\"",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Who was that? You know him?\"",
    choices: [
      { text: "Be honest with Leo", next: 6, moral: +1 },
      { text: "Lie to Leo", next: 7, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_sad.png",
    text: "\"Just an old friend... Not important.\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Nobody important, really!\" Leo laughs a little.",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Morning comes. A new secret is hanging over your head.",
    choices: [
      { text: "End episode", next: 9 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 4 over. Time to plan your next moves.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 5 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_class.jpg",
    text: "The big magic exam starts. Sylas, a rich kid, shows up as the new star.",
    bgm: "audio/ep5_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_class.jpg",
    char: "img/char/sylas.png",
    text: "\"I’ll prove only purebloods deserve to be king!\"",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Teacher",
    bg: "img/bg_class.jpg",
    char: "img/char/teacher.png",
    text: "\"{name}, your turn!\" Everyone stares at you.",
    choices: [
      { text: "Show your power", next: 3, moral: +1 },
      { text: "Hide your power", next: 4 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_power.png",
    text: "Everyone is shocked at your unusual power.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_normal.png",
    text: "You play it safe and keep your power hidden.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_class.jpg",
    char: "img/char/sylas.png",
    text: "\"Who are you, really?\"",
    choices: [
      { text: "Reply casually", next: 6 },
      { text: "Reply with a challenge", next: 7, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_smile.png",
    text: "\"Just a normal student, promise.\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "{name}",
    bg: "img/bg_class.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Just wait, one day I’ll surpass you!\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "A new rivalry begins. Who will be the next king?",
    choices: [
      { text: "End episode", next: 9 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 5 over.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 6 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_dorm.jpg",
    text: "You start building a secret network among the lower-ranked students.",
    bgm: "audio/ep6_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Old Minion",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"Lots of people are loyal to you, my king. They’re just waiting for your signal.\"",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_library.jpg",
    text: "In the library, you see Leo talking secretly with a teacher. Can you trust him?",
    choices: [
      { text: "Trust Leo", next: 3, moral: +1 },
      { text: "Be suspicious", next: 4, moral: -1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"I was talking about a scholarship for you. You can do it!\"",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Leo",
    bg: "img/bg_library.jpg",
    char: "img/char/friend.png",
    text: "\"Uh... just homework stuff!\" Leo looks nervous.",
    choices: [{ text: "Continue", next: 5 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_night.jpg",
    text: "At night, your network starts to move: sabotage, rumors, building power.",
    choices: [
      { text: "Win them over", next: 6, moral: +1 },
      { text: "Threaten them", next: 7, moral: -1 }
    ]
  },
  {
    name: "Normal Student",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Thank you, {name}! We follow you because we believe in you.\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "Normal Student",
    bg: "img/bg_dorm.jpg",
    char: "img/char/weak_student.png",
    text: "\"Fine... we’ll help, just don’t hurt our families!\"",
    choices: [{ text: "Continue", next: 8 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Your secret network grows, but so do the risks.",
    choices: [
      { text: "End episode", next: 9 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 6 over. The road to the throne is wide open now.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 7 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "The annual magic competition starts! Everyone’s fighting to move up a rank.",
    bgm: "audio/ep7_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Teacher",
    bg: "img/bg_arena.jpg",
    char: "img/char/teacher.png",
    text: "\"No cheating. Everything’s under magic surveillance!\"",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_arena.jpg",
    char: "img/char/sylas.png",
    text: "\"This time I’m gonna beat you in front of everyone, {name}!\"",
    choices: [{ text: "Continue", next: 3 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "Your match starts, but someone throws a sneaky potion at you!",
    choices: [
      { text: "Keep fighting fair", next: 4, moral: +1 },
      { text: "Cheat back", next: 5, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_focus.png",
    text: "You stick with pure magic and impress everyone.",
    choices: [{ text: "Continue", next: 6 }]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_dark.png",
    text: "You use a sneaky trick, Sylas slips and gets humiliated.",
    choices: [{ text: "Continue", next: 6 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "Leo looks uneasy. ‘You’ve changed... or were you always like this?’",
    choices: [
      { text: "Ignore Leo", next: 7, moral: -1 },
      { text: "Explain yourself", next: 8, moral: +1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "Leo looks disappointed and walks away.",
    choices: [{ text: "Continue", next: 9 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"I just want you to stay my friend, not become another monster...\"",
    choices: [{ text: "Continue", next: 9 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "The competition’s over. Your win is all anyone talks about.",
    choices: [
      { text: "End episode", next: 10 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "Episode 7 over. Winning doesn’t always mean peace.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 8 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_night.jpg",
    text: "Rumors about you are everywhere. Everyone’s curious who you really are.",
    bgm: "audio/ep8_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Old Minion",
    bg: "img/bg_dorm.jpg",
    char: "img/char/loyal_minion.png",
    text: "\"It’s time, my king. So many will follow you if you reveal who you are.\"",
    choices: [
      { text: "Admit you’re the Demon Lord", next: 2, moral: -1 },
      { text: "Keep it secret, stay a student", next: 3, moral: +1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"From now on, I’m taking back my throne!\"",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "I decide to live with two identities and wait for the right time.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "The next day, people start to suspect you. Your biggest enemy is making a move.",
    choices: [
      { text: "End episode", next: 5 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "Episode 8 over. Your identity is now the school’s biggest secret.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 9 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_schoolyard.jpg",
    text: "A mysterious monster attacks the school! Everyone’s freaking out.",
    bgm: "audio/ep9_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/sylas.png",
    text: "\"You’re a coward, right? Show us your courage now!\"",
    choices: [
      { text: "Save the other students", next: 2, moral: +1 },
      { text: "Use the chaos for your own gain", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_hero.png",
    text: "You save lots of students, and they start to respect you.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_dark.png",
    text: "You use dark magic, making the chaos worse so the teachers and seniors are weakened.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Leo",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/friend.png",
    text: "\"Are you a hero... or a brand new monster?\"",
    choices: [
      { text: "I’m just trying to survive", next: 5 },
      { text: "I want power", next: 6 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_sad.png",
    text: "You start doubting your own goals.",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "{name}",
    bg: "img/bg_schoolyard.jpg",
    char: "img/char/mc_dark.png",
    text: "Ambition is right in front of you. Nothing can stop you now.",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_ruins.jpg",
    text: "The monster is defeated. But the school will never be the same.",
    choices: [
      { text: "End episode", next: 8 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_ruins.jpg",
    text: "Episode 9 over. Your reputation is a mystery.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 10 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_dorm.jpg",
    text: "Leo and a few friends confront you. 'Are you still our friend, or have you turned into a monster?'",
    bgm: "audio/ep10_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Leo",
    bg: "img/bg_dorm.jpg",
    char: "img/char/friend.png",
    text: "\"Pick, {name}. Us or the throne?\"",
    choices: [
      { text: "Choose your friends", next: 2, moral: +1 },
      { text: "Ignore them for the throne", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_smile.png",
    text: "\"You guys are my new family... Sorry about all my stupid ambitions.\"",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_dorm.jpg",
    char: "img/char/mc_dark.png",
    text: "\"Nothing matters more than the throne... not even you all.\"",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_throne.jpg",
    text: "A senior teacher tests your loyalty with a secret mission.",
    choices: [
      { text: "Accept honestly", next: 5, moral: +1 },
      { text: "Trick the teacher for your own gain", next: 6, moral: -1 }
    ]
  },
  {
    name: "Senior Teacher",
    bg: "img/bg_throne.jpg",
    char: "img/char/teacher.png",
    text: "\"I’ll remember your sincerity. Hope you’ll be wise in the future.\"",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Senior Teacher",
    bg: "img/bg_throne.jpg",
    char: "img/char/teacher.png",
    text: "\"You think I’m stupid? Don’t ever mess with me!\"",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_throne.jpg",
    text: "You’ve finished the test of morals and loyalty. Your choices lead to the ending.",
    choices: [
      { text: "End episode", next: 8 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_throne.jpg",
    text: "Episode 10 done. Ready for your biggest enemy?",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 11 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "Final duel time. All the students, teachers, even the royal family are watching.",
    bgm: "audio/ep11_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Sylas",
    bg: "img/bg_arena.jpg",
    char: "img/char/sylas.png",
    text: "\"This is your last chance. Prove who you are!\"",
    choices: [
      { text: "Fight fair", next: 2, moral: +1 },
      { text: "Fight dirty", next: 3, moral: -1 }
    ]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_hero.png",
    text: "The duel is super intense.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "{name}",
    bg: "img/bg_arena.jpg",
    char: "img/char/mc_dark.png",
    text: "You use dark magic, and Sylas nearly gets seriously hurt.",
    choices: [{ text: "Continue", next: 4 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"You won... but at what cost!\"",
    choices: [
      { text: "Hug Leo", next: 5, moral: +1 },
      { text: "Ignore him", next: 6, moral: -1 }
    ]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"I’ll always be your friend, no matter what happens.\"",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Leo",
    bg: "img/bg_arena.jpg",
    char: "img/char/friend.png",
    text: "\"Congrats, {name}. Hope you find what you’re looking for.\"",
    choices: [{ text: "Continue", next: 7 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "The duel’s over. Now everyone’s waiting for the coronation... or maybe disaster.",
    choices: [
      { text: "End episode", next: 8 }
    ]
  },
  {
    name: "Narrator",
    bg: "img/bg_arena.jpg",
    text: "Episode 11 finished. The end is right in front of you.",
    choices: [
      { text: "Go to next episode", next: "next-episode" },
      { text: "Back to episode menu", next: -1 }
    ]
  }
],

// =================== EPISODE 12 ======================
[
  {
    name: "Narrator",
    bg: "img/bg_ceremony.jpg",
    text: "All the students gather in the hall. This is it. Decision day.",
    bgm: "audio/ep12_bgm.mp3",
    choices: [{ text: "Continue", next: 1 }]
  },
  {
    name: "Headmaster",
    bg: "img/bg_ceremony.jpg",
    char: "img/char/principal.png",
    text: "\"After all these trials, only those with a big heart can be king.\"",
    choices: [{ text: "Continue", next: 2 }]
  },
  {
    name: "Narrator",
    bg: "img/bg_ceremony.jpg",
    text: "You look at the throne. Every choice you made—good or bad—flashes through your mind.",
    choices: [
      { text: "Accept your fate", next: "ending-check" }
    ]
  }
],

// =================== TRUE ENDING ======================
[
  {
    name: "Narrator",
    bg: "img/bg_throne.jpg",
    text: "With a changed heart and high morals, you’re crowned king. The world is reborn with hope and justice.",
    choices: [
      { text: "Back to lobby", next: -1 }
    ]
  }
],

// =================== NORMAL ENDING ======================
[
  {
    name: "Narrator",
    bg: "img/bg_family.jpg",
    text: "You choose to live as a normal person, leaving old ambitions behind. You find true friends and family.",
    choices: [
      { text: "Back to lobby", next: -1 }
    ]
  }
],

// =================== BAD ENDING ======================
[
  {
    name: "Narrator",
    bg: "img/bg_ruins.jpg",
    text: "Blinded by ambition, you fail to take the throne, betrayed and forgotten. The world sinks into new darkness.",
    choices: [
      { text: "Back to lobby", next: -1 }
    ]
  }
]
  ]
    };
   

    let lang = "id";
    let playerName = "";
    let scene = 0;
    let episode = 0;
    let typewriterTimeout;
    let currentBGM = null;
    let moral = 0; 
    let unlockedEpisode = 1;



    let userId = null;


  unlockedEpisode = parseInt(localStorage.getItem("vn_unlockedEpisode") || "1");

// Login anonymous ke Firebase
auth.signInAnonymously()
  .then((user) => { userId = user.user.uid; })
  .catch((err) => { alert("Firebase login gagal: " + err.message); });

// Fungsi SAVE ke Cloud
async function saveToDatabase() {
  if (!userId) return alert("Autentikasi gagal, reload halaman dulu!");
  await db.collection("vn_saves").doc(userId).set({
    lang, playerName, scene, episode, time: new Date(), unlockedEpisode
  });
  alert(lang === "id" ? "Progress berhasil disimpan ke database!" : "Progress saved to cloud!");
}


// Fungsi LOAD dari Cloud
async function loadFromDatabase() {
  if (!userId) return alert("Autentikasi gagal, reload halaman dulu!");
  const snap = await db.collection("vn_saves").doc(userId).get();
  if (snap.exists) {
    const save = snap.data();
    lang = save.lang;
    playerName = save.playerName;
    scene = save.scene;
    episode = save.episode;
    unlockedEpisode = save.unlockedEpisode || 1;
    localStorage.setItem("vn_unlockedEpisode", unlockedEpisode); // biar local juga ikut update
    document.getElementById("lang-btn").innerText = lang === "id" ? "English" : "Indonesia";
    if (document.getElementById("episode-menu").style.display === "flex") renderEpisodeMenu();
    render();
    alert(lang === "id" ? "Progress berhasil di-load dari database!" : "Progress loaded from cloud!");
  } else {
    alert(lang === "id" ? "Data tidak ditemukan di cloud." : "No saved data found in cloud.");
  }
}


    
    // DOM SELECTOR
    const vnBg = document.getElementById("vn-bg");
    const vnChar = document.getElementById("vn-character");
    const vnName = document.getElementById("vn-name");
    const vnText = document.getElementById("vn-text");
    const choicesBox = document.querySelector(".choices");
    const bgmAudio = document.getElementById("bgm");
    const lobbyBgm = document.getElementById("lobby-bgm");
    
    // Lobby BGM on click
    document.getElementById("lobby").addEventListener("click", function startLobbyBgmOnce() {
        if (lobbyBgm.paused) {
          lobbyBgm.currentTime = 0;
          lobbyBgm.volume = 0.2;
          lobbyBgm.play().catch(()=>{});
        }
        document.getElementById("lobby").removeEventListener("click", startLobbyBgmOnce);
      });
    
    // SEMBUNYIKAN DI AWAL
    vnBg.style.display = "none";
    vnChar.style.display = "none";
    document.getElementById("vn-ui").style.display = "none";
    
    // ----- MODIFIKASI LOBBY → EPISODE MENU -----
    document.getElementById("start-btn").onclick = function() {
      document.getElementById("lobby").style.display = "none";
      document.getElementById("episode-menu").style.display = "flex";
      renderEpisodeMenu();
      lobbyBgm.pause();
      lobbyBgm.currentTime = 0;
    };
    
    // Episode Menu
    function renderEpisodeMenu() {
      unlockedEpisode = parseInt(localStorage.getItem("vn_unlockedEpisode") || "1");
      const container = document.getElementById("episode-select-buttons");
      container.innerHTML = "";
      for (let i = 0; i < stories[lang].length; i++) {
  const btn = document.createElement("button");
  btn.innerText = lang === "id" ? "Episode " + (i + 1) : "Ep. " + (i + 1);
  btn.className = "ep-btn";
  if (i >= unlockedEpisode) {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
    btn.title = lang === "id" ? "Selesaikan episode sebelumnya untuk membuka." : "Finish previous episode to unlock.";
  } else {
    btn.onclick = () => {
      moral = 0;
      episode = i; scene = 0;
      document.getElementById("episode-menu").style.display = "none";
      vnBg.style.display = "block";
      vnChar.style.display = "block";
      document.getElementById("vn-ui").style.display = "block";
      render();
    };
  }
  container.appendChild(btn);
}

    }
    
    document.getElementById("back-lobby").onclick = function() {
      document.getElementById("episode-menu").style.display = "none";
      document.getElementById("lobby").style.display = "flex";
      lobbyBgm.currentTime = 0;
      lobbyBgm.play().catch(()=>{});
    };
    
    // TYPEWRITER EFFECT
    function stopTypewriter() {
      if (typewriterTimeout) clearTimeout(typewriterTimeout);
    }
    function showTextTypewriter(text, callback) {
      stopTypewriter();
      vnText.innerHTML = "";
      let i = 0;
      function type() {
        if (i <= text.length) {
          vnText.innerHTML = text.slice(0, i);
          i++;
          typewriterTimeout = setTimeout(type, 18);
        } else if (callback) {
          callback();
        }
      }
      type();
    }

    document.getElementById("lobby").style.display = "none";
document.getElementById("episode-menu").style.display = "none";
vnBg.style.display = "none";
vnChar.style.display = "none";
document.getElementById("vn-ui").style.display = "none";
document.getElementById("name-input-panel").style.display = "flex";

document.getElementById("set-mc-name-btn").onclick = function () {
  const val = document.getElementById("mc-name-input").value.trim();
  if (!val) {
    alert("Isi dulu nama karaktermu!");
    document.getElementById("mc-name-input").focus();
    return;
  }
  playerName = val;
  // Tampilkan lobby setelah nama diisi
  document.getElementById("name-input-panel").style.display = "none";
  document.getElementById("lobby").style.display = "flex";
};


    
    // RENDER SCENE
    function setBackground(bg) { vnBg.innerHTML = bg ? `<img src="${bg}">` : ""; }
    function setCharacter(char) { vnChar.innerHTML = char ? `<img src="${char}">` : ""; }
    function playBGM(bgmFile) {
        if (!bgmFile) { bgmAudio.pause(); bgmAudio.currentTime = 0; return; }
        if (bgmAudio.src.indexOf(bgmFile) === -1) {
          bgmAudio.src = bgmFile; bgmAudio.loop = true; bgmAudio.volume = 0.5;
          playBgmWhenAllowed();
        } else if (bgmAudio.paused) {
          playBgmWhenAllowed();
        }
      }
    
    function playBgmWhenAllowed() {
        bgmAudio.play().catch(()=>{});
    }
    document.addEventListener('click', ()=>{
        if (bgmAudio.src && bgmAudio.paused) {
          bgmAudio.play().catch(()=>{});
        }
    }, {once: true});
    
    function stopBGM() { bgmAudio.pause(); bgmAudio.currentTime = 0; }
    
    function render() {
      stopTypewriter();
      const story = stories[lang][episode];
      const sceneData = story[scene];
    
      // Nama MC otomatis
      let showName = sceneData.name ? sceneData.name.replace(/{name}/g, playerName || (lang === "id" ? "???" : "???")) : "";
      let showText = sceneData.text ? sceneData.text.replace(/{name}/g, playerName || (lang === "id" ? "???" : "???")) : "";
    
      setBackground(sceneData.bg);
      setCharacter(sceneData.char);
      vnName.innerText = showName;
    
      // BGM (opsional, boleh kosong di scene tertentu)
      if (sceneData.bgm) playBGM(sceneData.bgm); else stopBGM();
    
      // Mesin tik untuk text
      choicesBox.innerHTML = "";
    
      // Input nama MC
      if (sceneData.inputName) {
        vnText.innerHTML = lang === "id"
          ? "Masukkan nama MC kamu:<br><input id='inputName' type='text' maxlength='18'><button id='setNameBtn'>OK</button>"
          : "Enter your MC's name:<br><input id='inputName' type='text' maxlength='18'><button id='setNameBtn'>OK</button>";
        choicesBox.innerHTML = "";
        setTimeout(() => {
          document.getElementById('inputName').focus();
        }, 50);
        document.getElementById('setNameBtn').onclick = () => {
          const val = document.getElementById('inputName').value.trim();
          playerName = val || (lang === "id" ? "Raja Iblis" : "Demon Lord");
          scene++;
          render();
        };
        document.getElementById('inputName').addEventListener('keyup', function (e) {
          if (e.key === "Enter") document.getElementById('setNameBtn').click();
        });
        return;
      }
    
      // Typewriter hanya jalan jika BUKAN input nama
      showTextTypewriter(showText, () => {
        renderChoices(sceneData);
      });
    }
    
    // RENDER PILIHAN
    function renderChoices(sceneData) {
  choicesBox.innerHTML = "";
  if (sceneData.choices && sceneData.choices.length > 0) {
    sceneData.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => {
        // ====== BAGIAN PENTING: Moral ======
        if (typeof choice.moral === 'number') moral += choice.moral;

        // ====== Cek untuk scene ending-check ======
        if (choice.next === "ending-check") {
          // Cek moral untuk menentukan ending
          if (moral >= 4) {
            episode = 13; // index TRUE ENDING di array stories
            scene = 0;
          } else if (moral <= -3) {
            episode = 15; // index BAD ENDING di array stories
            scene = 0;
          } else {
            episode = 14; // index NORMAL ENDING di array stories
            scene = 0;
          }
          render();
          return;
        }
        // ====== Lanjut seperti biasa ======
        if (choice.next === "next-episode") {
  if ((episode + 1) > unlockedEpisode) {
    unlockedEpisode = episode + 1;
    localStorage.setItem("vn_unlockedEpisode", String(unlockedEpisode));
  }
  episode++;
  scene = 0;
  render();
  return;
        } else if (choice.next < 0) {
          // Kembali ke lobby/menu
          vnBg.style.display = "none";
          vnChar.style.display = "none";
          document.getElementById("vn-ui").style.display = "none";
          document.getElementById("lobby").style.display = "flex";
          lobbyBgm.currentTime = 0;
          lobbyBgm.play().catch(()=>{});
        } else {
          scene = choice.next;
          render();
        }
      };
      choicesBox.appendChild(btn);
    });
  }
}

document.getElementById("back-ep-btn").onclick = function () {
  // Sembunyikan UI VN dan tampilkan menu episode
  document.getElementById("vn-ui").style.display = "none";
  document.getElementById("vn-bg").style.display = "none";
  document.getElementById("vn-character").style.display = "none";
  document.getElementById("episode-menu").style.display = "flex";
  renderEpisodeMenu();
  stopBGM();
};


    
    // EVENT PILIH BAHASA
    document.getElementById("lang-btn").onclick = function () {
      lang = lang === "id" ? "en" : "id";
      this.innerText = lang === "id" ? "English" : "Indonesia";
      // Jika di episode select menu, update button
      if (document.getElementById("episode-menu").style.display === "flex") renderEpisodeMenu();
      render();
    };
    
    // SAVE/LOAD
    document.getElementById("save-btn").onclick = function () {
      localStorage.setItem("vn_save", JSON.stringify({ lang, playerName, scene, episode, moral }));
      saveToDatabase();
    };
    document.getElementById("load-btn").onclick = function () {
      // Load dari localStorage (boleh dihapus kalau ingin cloud only)
      const save = JSON.parse(localStorage.getItem("vn_save") || "null");
      if (save) {
        lang = save.lang;
        playerName = save.playerName;
        scene = save.scene;
        episode = save.episode;
        moral = save.moral;
        document.getElementById("lang-btn").innerText = lang === "id" ? "English" : "Indonesia";
        if (document.getElementById("episode-menu").style.display === "flex") renderEpisodeMenu();
        render();
      }
      // Load dari database (cloud)
      loadFromDatabase();
    };

render();

// Hanya untuk developer/testing
// function resetUnlock() {
//   unlockedEpisode = 1;
//   localStorage.setItem("vn_unlockedEpisode", "1");
// }
