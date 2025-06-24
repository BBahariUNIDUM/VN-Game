const stories = {
    id: [
    // =================== EPISODE 1 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_castle.jpg",
        char: "",
        text: "Dahulu kala, Raja Iblis ditakuti seluruh dunia, hingga akhirnya dikalahkan oleh para pahlawan. Namun ia bersumpah akan kembali...",
        bgm: "audio/bgm_ep1.mp3",
        choices: [{ text: "Lanjut", next: 1 }]
      },
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Ribuan tahun kemudian, kau terbangun di tubuh manusia biasa. Masukkan nama karaktermu:",
        inputName: true
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_normal.png",
        text: "Hah...? Aku... hidup lagi? Tapi... tubuhku lemah sekali...",
        choices: [
          { text: "Periksa sekeliling", next: 3 },
          { text: "Coba sihir", next: 4 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_normal.png",
        text: "Aku berada di kamar sederhana... Tak ada kekuatan, tak ada pelayan. Benarkah aku manusia sekarang?",
        choices: [{ text: "Keluar rumah", next: 5 }]
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_focus.png",
        text: "Aku coba mengumpulkan mana... Nihil. Semua kekuatan benar-benar hilang!",
        choices: [{ text: "Keluar rumah", next: 5 }]
      },
      {
        name: "Gadis Kecil",
        bg: "img/bg_village.jpg",
        char: "img/char/little_girl.png",
        text: "\"Kak, kamu sudah bangun? Ibu lagi masak, lho!\" Gadis kecil tersenyum ramah.",
        choices: [
          { text: "Balas senyum", next: 6 },
          { text: "Diam saja", next: 7 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_smile.png",
        text: "\"Selamat pagi...\" Untuk pertama kali, aku merasa hangat di dunia baru ini.",
        choices: [{ text: "Akhiri episode", next: 8 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_cold.png",
        text: "Aku membuang muka. Tapi entah kenapa, perutku tiba-tiba lapar.",
        choices: [{ text: "Akhiri episode", next: 8 }]
      },
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Akhir Episode 1! Siap lanjut ke episode berikutnya?",
        choices: [
          { text: "Lanjut ke Episode berikutnya", next: "next-episode" },
          { text: "Kembali ke menu episode", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 2 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_farm.jpg",
        char: "",
        text: "Hari-hari berlalu. {name} mulai terbiasa hidup sederhana, membantu warga desa.",
        bgm: "audio/bgm_ep2.mp3",
        choices: [{ text: "Bantu petani", next: 1 }, { text: "Coba berlatih sihir", next: 2 }]
      },
      {
        name: "{name}",
        bg: "img/bg_farm.jpg",
        char: "img/char/mc_happy.png",
        text: "Petani memuji kerja kerasmu. \"Terima kasih, {name}! Kamu cepat belajar!\"",
        choices: [{ text: "Lanjut", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_forest.jpg",
        char: "img/char/mc_concentrate.png",
        text: "Aku coba mantra sederhana. Tidak berhasil... Tapi kurasakan getaran aneh di ujung jariku.",
        choices: [{ text: "Lanjut", next: 3 }]
      },
      {
        name: "Pria Misterius",
        bg: "img/bg_forest.jpg",
        char: "img/char/mystery_man.png",
        text: "\"Kau bukan orang biasa, bukan?\" Suara misterius memecah keheningan hutan.",
        choices: [{ text: "Siapa dia?", next: 4 }]
      },
      {
        name: "Pria Misterius",
        bg: "img/bg_forest.jpg",
        char: "img/char/mystery_man.png",
        text: "\"Berhati-hatilah. Dunia manusia tidak sesederhana yang kau kira.\"",
        choices: [{ text: "Akhiri episode", next: 5 }]
      },
      {
        name: "Narator",
        bg: "img/bg_forest.jpg",
        char: "",
        text: "Akhir Episode 2! Siap lanjut ke episode berikutnya?",
        choices: [
          { text: "Lanjut ke Episode berikutnya", next: "next-episode" },
          { text: "Kembali ke menu episode", next: -1 }
        ]
      }
    ],
    // =================== EPISODE 3 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_night.jpg",
        char: "",
        text: "Beberapa malam terakhir, desa diganggu makhluk bayangan. Warga resah.",
        bgm: "audio/bgm_ep3.mp3",
        choices: [
          { text: "Patroli malam", next: 1 },
          { text: "Abaikan", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_field_night.jpg",
        char: "img/char/mc_alert.png",
        text: "Di ladang, kulihat sesosok makhluk hitam besar... Rasanya familiar...",
        choices: [{ text: "Dekati makhluk", next: 3 }]
      },
      {
        name: "Narator",
        bg: "img/bg_field.jpg",
        char: "",
        text: "Keesokan harinya, ladang rusak parah. Warga menuduhmu pembawa sial.",
        choices: [{ text: "Akhiri episode", next: -1 }]
      },
      {
        name: "Makhluk Bayangan",
        bg: "img/bg_field_night.jpg",
        char: "img/char/shadow_beast.png",
        text: "\"Raja Iblis... kau kembali?\" bisik makhluk itu dengan suara bergetar.",
        choices: [{ text: "Tanya siapa dia", next: 4 }]
      },
      {
        name: "Makhluk Bayangan",
        bg: "img/bg_field_night.jpg",
        char: "img/char/shadow_beast.png",
        text: "\"Aku dulu prajuritmu... Tapi sekarang aku hanya ingin melindungi desa ini.\"",
        choices: [{ text: "Akhiri episode", next: 5 }]
      },

      {
        name: "Narator",
        bg: "img/bg_field.jpg",
        char: "",
        text: "Akhir Episode 3! Siap lanjut ke episode berikutnya?",
        choices: [
          { text: "Lanjut ke Episode berikutnya", next: "next-episode" },
          { text: "Kembali ke menu episode", next: -1 }
        ]
      }
    ],
    // =================== EPISODE 4 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_forest.jpg",
        char: "",
        text: "Setelah kejadian itu, kenangan dan sedikit kekuatan lama mulai bangkit.",
        bgm: "audio/bgm_ep4.mp3",
        choices: [
          { text: "Latihan di hutan", next: 1 },
          { text: "Sembunyikan kekuatan", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_forest.jpg",
        char: "img/char/mc_focus.png",
        text: "Energi gelap dalam diriku perlahan terasa kembali. Tapi... apakah aku harus menggunakannya?",
        choices: [{ text: "Lanjut", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_think.png",
        text: "Aku memilih berbaur dan hidup seperti manusia biasa. Tapi perasaan itu tak pernah hilang.",
        choices: [{ text: "Akhiri episode", next: -1 }]
      },
      {
        name: "Narator",
        bg: "img/bg_bird.jpg",
        char: "",
        text: "Seekor burung pesan datang: ancaman besar mendekati desa.",
        choices: [{ text: "Akhiri episode", next: 4 }]
      },
      
      {
        name: "Narator",
        bg: "img/bg_bird.jpg",
        char: "",
        text: "Akhir Episode 4! Siap lanjut ke episode berikutnya?",
        choices: [
          { text: "Lanjut ke Episode berikutnya", next: "next-episode" },
          { text: "Kembali ke menu episode", next: -1 }
        ]
      }
    ],
    // =================== EPISODE 5 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Desa diserang monster besar. Semua berharap padamu.",
        bgm: "audio/bgm_ep5.mp3",
        choices: [
          { text: "Lindungi desa", next: 1 },
          { text: "Biarkan saja", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_battle.jpg",
        char: "img/char/mc_dark.png",
        text: "Kekuatan lamaku bangkit! Dengan mudah aku mengalahkan monster itu. Tapi semua orang menatapku dengan ketakutan...",
        choices: [{ text: "Lanjut", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_sad.png",
        text: "Aku menolak bertarung. Desa hancur, dan aku dijauhi semua orang.",
        choices: [{ text: "Akhiri episode", next: -1 }]
      },
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Desa selamat, tapi mereka mulai bertanya-tanya, siapa kamu sebenarnya?",
        choices: [{ text: "Akhiri episode", next: 4 }]
      },
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Akhir Episode 5! Siap lanjut ke episode berikutnya?",
        choices: [
          { text: "Lanjut ke Episode berikutnya", next: "next-episode" },
          { text: "Kembali ke menu episode", next: -1 }
        ]
      }
    ],
    // =================== EPISODE 6 ======================
    [
      {
        name: "Narator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Identitasmu sebagai Raja Iblis semakin mencurigakan. Saatnya memilih: mengaku atau berbohong.",
        bgm: "audio/bgm_ep6.mp3",
        choices: [
          { text: "Mengaku", next: 1 },
          { text: "Bohong", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_resolute.png",
        text: "\"Ya... Aku memang Raja Iblis yang dulu. Tapi aku hanya ingin hidup damai.\"",
        choices: [{ text: "Lanjut", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_nervous.png",
        text: "Aku menyangkal segalanya. Tapi perasaan bersalah menghantui setiap malam.",
        choices: [{ text: "Akhiri kisah", next: -1 }]
      },
      // ==== PLOT TWIST ====
      {
        name: "Gadis Kecil",
        bg: "img/bg_mystic.jpg",
        char: "img/char/little_girl_mystic.png",
        text: "\"Ternyata benar... Kau ayahku.\" Gadis kecil itu tersenyum misterius, aura sihir menyelimutinya.",
        choices: [{ text: "Lanjut", next: 4 }]
      },
      {
        name: "Narator",
        bg: "img/bg_mystic.jpg",
        char: "",
        text: "Ternyata gadis kecil itu adalah reinkarnasi pahlawan yang dulu mengalahkanmu, kini jadi anakmu sendiri.",
        choices: [{ text: "Kembali ke menu episode", next: -1 }]
      }
    ]
  ],
    // =================== ENGLISH ======================
    en: [
    // EPISODE 1
    [
      {
        name: "Narrator",
        bg: "img/bg_castle.jpg",
        char: "",
        text: "Long ago, the Demon Lord was feared across the world, until finally defeated by the heroes. But he vowed to return...",
        bgm: "audio/bgm_ep1.mp3",
        choices: [{ text: "Continue", next: 1 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Thousands of years later, you awake in the body of a mere human. Enter your character's name:",
        inputName: true
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_normal.png",
        text: "\"Huh...? I'm alive again? But... this body is so weak...\"",
        choices: [
          { text: "Look around", next: 3 },
          { text: "Try magic", next: 4 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_normal.png",
        text: "I see a simple room... No power, no servants. Am I really human now?",
        choices: [{ text: "Leave the house", next: 5 }]
      },
      {
        name: "{name}",
        bg: "img/bg_room.jpg",
        char: "img/char/mc_focus.png",
        text: "I try to gather mana... Nothing. All my powers are truly gone!",
        choices: [{ text: "Leave the house", next: 5 }]
      },
      {
        name: "Little Girl",
        bg: "img/bg_village.jpg",
        char: "img/char/little_girl.png",
        text: "\"Brother, you're awake? Mom's making breakfast!\" The little girl smiles.",
        choices: [
          { text: "Smile back", next: 6 },
          { text: "Ignore her", next: 7 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_smile.png",
        text: "\"Good morning...\" For the first time, I feel a warmth in this new world.",
        choices: [{ text: "End episode", next: 8 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_cold.png",
        text: "I turn away. But for some reason, my stomach growls.",
        choices: [{ text: "End episode", next: 8 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "End of Episode 1! Ready to go to the next episode?",
        choices: [
          { text: "Next Episode", next: "next-episode" },
          { text: "Back to episode menu", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 2 ======================
    [
      {
        name: "Narrator",
        bg: "img/bg_farm.jpg",
        char: "",
        text: "Days pass. {name} gets used to a simple life, helping the villagers.",
        bgm: "audio/bgm_ep2.mp3",
        choices: [{ text: "Help the farmer", next: 1 }, { text: "Try practicing magic", next: 2 }]
      },
      {
        name: "{name}",
        bg: "img/bg_farm.jpg",
        char: "img/char/mc_happy.png",
        text: "The farmer praises your work. \"Thank you, {name}! You learn fast!\"",
        choices: [{ text: "Continue", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_forest.jpg",
        char: "img/char/mc_concentrate.png",
        text: "I try a simple spell. It doesn't work... but I feel a strange tingling in my fingers.",
        choices: [{ text: "Continue", next: 3 }]
      },
      {
        name: "Mysterious Man",
        bg: "img/bg_forest.jpg",
        char: "img/char/mystery_man.png",
        text: "\"You're not an ordinary person, are you?\" A mysterious voice breaks the silence.",
        choices: [{ text: "Who is he?", next: 4 }]
      },
      {
        name: "Mysterious Man",
        bg: "img/bg_forest.jpg",
        char: "img/char/mystery_man.png",
        text: "\"Be careful. The human world isn't as simple as you think.\"",
        choices: [{ text: "End episode", next: 5 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_forest.jpg",
        char: "",
        text: "End of Episode 2! Ready to go to the next episode?",
        choices: [
          { text: "Next Episode", next: "next-episode" },
          { text: "Back to episode menu", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 3 ======================
    [
      {
        name: "Narrator",
        bg: "img/bg_night.jpg",
        char: "",
        text: "For several nights, the village is disturbed by shadowy creatures. The villagers are worried.",
        bgm: "audio/bgm_ep3.mp3",
        choices: [
          { text: "Patrol at night", next: 1 },
          { text: "Ignore", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_field_night.jpg",
        char: "img/char/mc_alert.png",
        text: "In the fields, I see a huge, dark creature... It feels familiar...",
        choices: [{ text: "Approach the creature", next: 3 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_field.jpg",
        char: "",
        text: "The next morning, the fields are badly damaged. The villagers blame you as a bringer of misfortune.",
        choices: [{ text: "End episode", next: -1 }]
      },
      {
        name: "Shadow Creature",
        bg: "img/bg_field_night.jpg",
        char: "img/char/shadow_beast.png",
        text: "\"Demon Lord... you have returned?\" the creature whispers in a trembling voice.",
        choices: [{ text: "Ask who it is", next: 4 }]
      },
      {
        name: "Shadow Creature",
        bg: "img/bg_field_night.jpg",
        char: "img/char/shadow_beast.png",
        text: "\"I was once your soldier... But now, I just want to protect this village.\"",
        choices: [{ text: "End episode", next: 5 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_field.jpg",
        char: "",
        text: "End of Episode 3! Ready to go to the next episode?",
        choices: [
          { text: "Next Episode", next: "next-episode" },
          { text: "Back to episode menu", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 4 ======================
    [
      {
        name: "Narrator",
        bg: "img/bg_forest.jpg",
        char: "",
        text: "After that incident, old memories and a bit of power begin to reawaken.",
        bgm: "audio/bgm_ep4.mp3",
        choices: [
          { text: "Train in the forest", next: 1 },
          { text: "Hide your power", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_forest.jpg",
        char: "img/char/mc_focus.png",
        text: "The dark energy inside me slowly returns. But... should I use it?",
        choices: [{ text: "Continue", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_think.png",
        text: "I choose to blend in and live like a normal human. But the feeling never goes away.",
        choices: [{ text: "End episode", next: -1 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_bird.jpg",
        char: "",
        text: "A messenger bird arrives: a great threat approaches the village.",
        choices: [{ text: "End episode", next: 4 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_bird.jpg",
        char: "",
        text: "End of Episode 4! Ready to go to the next episode?",
        choices: [
          { text: "Next Episode", next: "next-episode" },
          { text: "Back to episode menu", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 5 ======================
    [
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "The village is attacked by a giant monster. Everyone is counting on you.",
        bgm: "audio/bgm_ep5.mp3",
        choices: [
          { text: "Protect the village", next: 1 },
          { text: "Let it be", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_battle.jpg",
        char: "img/char/mc_dark.png",
        text: "My old power awakens! I easily defeat the monster. But now, everyone looks at me in fear...",
        choices: [{ text: "Continue", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_sad.png",
        text: "I refuse to fight. The village is destroyed, and everyone avoids me.",
        choices: [{ text: "End episode", next: -1 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "The village is saved, but they begin to question who you really are.",
        choices: [{ text: "End episode", next: 4 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "End of Episode 5! Ready to go to the next episode?",
        choices: [
          { text: "Next Episode", next: "next-episode" },
          { text: "Back to episode menu", next: -1 }
        ]
      }
    ],
  
    // =================== EPISODE 6 ======================
    // EPISODE 6 (TWIST!)
    [
      {
        name: "Narrator",
        bg: "img/bg_village.jpg",
        char: "",
        text: "Your identity as the Demon Lord is more suspicious than ever. Time to choose: confess or lie.",
        bgm: "audio/bgm_ep6.mp3",
        choices: [
          { text: "Confess", next: 1 },
          { text: "Lie", next: 2 }
        ]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_resolute.png",
        text: "\"Yes... I am the Demon Lord from long ago. But I only wish for peace.\"",
        choices: [{ text: "Continue", next: 3 }]
      },
      {
        name: "{name}",
        bg: "img/bg_village.jpg",
        char: "img/char/mc_nervous.png",
        text: "I deny everything. But guilt haunts me every night.",
        choices: [{ text: "End story", next: -1 }]
      },
      // === TWIST ===
      {
        name: "Little Girl",
        bg: "img/bg_mystic.jpg",
        char: "img/char/little_girl_mystic.png",
        text: "\"It's true... You are my father.\" The little girl smiles mysteriously, surrounded by a magical aura.",
        choices: [{ text: "Continue", next: 4 }]
      },
      {
        name: "Little Girl",
        bg: "img/bg_mystic.jpg",
        char: "img/char/little_girl_mystic.png",
        text: "\"It's true... You are my father.\" The little girl smiles mysteriously, surrounded by a magical aura.",
        choices: [{ text: "Continue", next: 4 }]
      },
      {
        name: "Narrator",
        bg: "img/bg_mystic.jpg",
        char: "",
        text: "It turns out, the little girl is the reincarnation of the hero who once defeated you—now, your own daughter.",
        choices: [{ text: "Back to episode menu", next: -1 }]
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

    let userId = null;

// Login anonymous ke Firebase
auth.signInAnonymously()
  .then((user) => { userId = user.user.uid; })
  .catch((err) => { alert("Firebase login gagal: " + err.message); });

// Fungsi SAVE ke Cloud
async function saveToDatabase() {
  if (!userId) return alert("Autentikasi gagal, reload halaman dulu!");
  await db.collection("vn_saves").doc(userId).set({
    lang, playerName, scene, episode, time: new Date()
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
      const container = document.getElementById("episode-select-buttons");
      container.innerHTML = "";
      for (let i = 0; i < stories[lang].length; i++) {
        const btn = document.createElement("button");
        btn.innerText = lang === "id" ? "Episode " + (i + 1) : "Ep. " + (i + 1);
        btn.className = "ep-btn";
        btn.onclick = () => {
          episode = i; scene = 0; playerName = "";
          document.getElementById("episode-menu").style.display = "none";
          vnBg.style.display = "block";
          vnChar.style.display = "block";
          document.getElementById("vn-ui").style.display = "block";
          render();
        };
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
              if (choice.next === "next-episode") {
                if (episode < stories[lang].length - 1) {
                  episode++;
                  scene = 0;
                  render();
                } else {
                  // === TAMBAHAN: Balik ke lobby ===
                  vnBg.style.display = "none";
                  vnChar.style.display = "none";
                  document.getElementById("vn-ui").style.display = "none";
                  document.getElementById("lobby").style.display = "flex";
                  lobbyBgm.currentTime = 0;
                  lobbyBgm.play().catch(()=>{});
                }
              } else if (choice.next < 0) {
                // Balik ke menu episode
                vnBg.style.display = "none";
                vnChar.style.display = "none";
                document.getElementById("vn-ui").style.display = "none";
                document.getElementById("episode-menu").style.display = "flex";
                renderEpisodeMenu();
              } else {
                scene = choice.next;
                render();
              }
            };
            choicesBox.appendChild(btn);
          });
        }
    }
    
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
      localStorage.setItem("vn_save", JSON.stringify({ lang, playerName, scene, episode }));
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
        document.getElementById("lang-btn").innerText = lang === "id" ? "English" : "Indonesia";
        if (document.getElementById("episode-menu").style.display === "flex") renderEpisodeMenu();
        render();
      }
      // Load dari database (cloud)
      loadFromDatabase();
    };
    
// PILIH EPISODE
function renderEpisodeSelect() {
  const epSelect = document.getElementById("epSelect");
  epSelect.innerHTML = "";
  for (let i = 0; i < stories[lang].length; i++) {
    const btn = document.createElement("button");
    btn.innerText = lang === "id" ? "Episode " + (i + 1) : "Ep. " + (i + 1);
    btn.onclick = () => {
      episode = i; scene = 0; playerName = ""; render();
    };
    epSelect.appendChild(btn);
  }
}

// INIT
renderEpisodeSelect();
render();