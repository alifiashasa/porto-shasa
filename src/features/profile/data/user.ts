import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Alifia Shafa",
  lastName: "Shabrina",
  displayName: "Shasa",
  username: "alifiashasa",
  gender: "female",
  pronouns: "she/her",
  bio: "Mahasiswi semester 6 Teknik Informatika dengan keahlian utama dalam Mobile Development (Flutter) dan Front-End Web Development. Berpengalaman merancang dan mengembangkan antarmuka aplikasi lintas platform yang responsif, interaktif, dan user-friendly. Memiliki pemahaman mendalam terkait implementasi UI/UX, state management (seperti GetX), serta integrasi REST API untuk menciptakan pengalaman pengguna yang mulus.",
  address: "Tegal, Jawa Tengah, Indonesia",
  phoneNumber: "KzYyODc4NDIyMzEyODk=", // E.164 format, base64 encoded
  email: "YWxpZmlhc2hhc2EzMEBnbWFpbC5jb20=", // base64 encoded
  website: "https://shasa.web.id",
  jobTitle: "UI/UX Designer & Mobile Developer",
  flipSentences: ["UI/UX Designer", "Mobile Developer"],

  jobs: [
    {
      title: "UI/UX Designer & Mobile Developer",
      // company: "Freelance",
      // website: "https://fadils.web.id",
    },
  ],
  about: `
Hello, World! Saya **Alifia Shafa Shabrina** — mahasiswi semester 6 Teknik Informatika yang berfokus pada UI/UX Designer & Mobile Developer.

Saya memiliki pengalaman dalam merancang dan mengembangkan antarmuka aplikasi lintas platform yang responsif, interaktif, dan *user-friendly*. Saya terbiasa menggunakan *state management* (seperti GetX), mengintegrasikan REST API, serta membangun solusi *frontend* modern dengan dukungan *AI-assisted tools* untuk mempercepat proses pengembangan.

Mari terhubung dan berkolaborasi!
`,
  avatar: "/p/shasa.jpg",
  ogImage: "/p/shasa_og.png",
  namePronunciationUrl: "/p/shasa.mp3",
  keywords: [
    "Alifia Shafa Shabrina",
    "Alifia Shasa",
    "Shasa",
    "Alifia",
    "Shabrina",
    "alifiashasa",
    "Alifia Shafa Shabrina Portfolio",
    "Mobile Developer",
    "Front-End Developer",
    "Flutter Developer",
    "Web Developer Indonesia",
    "Tegal Developer",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  dateCreated: "2026-06-05", // YYYY-MM-DD
};
