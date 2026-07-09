/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Kumeiy:D",
  photo: "./img/kumeiy.jpg",       // Place your photo in the img/ folder
  music: "./music/wave to earth - bad (Official Lyric Video).mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Believe it or not, this is the first time I've ever created this for someone btw!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! :D",
    },
    {
      type: "chatbox",
      message:
        "HAPPY BIRTHDAY MEIIIYYYYY🥳🎊!!! Makin tua aja ya lu AKWKWKAWK. Nyangka ga lu gw buat beginian? ga nyangka kan? SAMA. Gw awalnya tu cuma mau post di story kek orang2 biasanya, tapi pas lu bilang klo lu selalu deactive ig pas di hari ultahlu, jadinya gw mikir lagi mau kasi apa ke elu. Trs h-2 baru kepikiran buat kek gini AKAWKAKWKAKW. Mumet dikit tp gpp, gw sangat amat tulus membuat ini (anjay so tulus). Emmm apalagi yak..Gw berharap lu bisa jadi orang lebih baik lagi daripada hari kemarin. JANGAN ASING LAGI PLSSS, LU GA KASIAN SAMA GW APA TIAP HARI GALAU MULU!!😔. Hehe udh si itu aja keknya, klo ada tambahan nnti di chat ajah😹",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do.",
        "But then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "Because,",
        "U are Special <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "I hope life treats u well and if not, I hope u treat urself well. (If u cant, I'll treat u well instead 😜)",
      author: "Cheeseburger :3",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May the best things happen to u ❣️",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, now come back and tell me if yo u liked it.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
