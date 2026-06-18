import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "smart-caregiver",
    title: "Smart Caregiver — Mobile Front-end Developer",
    period: {
      start: "09.2025",
    },
    link: "https://github.com/alifiashasa/smart-caregiver",
    skills: [
      "Flutter",
      "GetX",
      "Figma",
      "Google Stitch",
      "Face Recognition",
      "InsightFace Buffalo",
    ],
    description: `Mengembangkan antarmuka aplikasi mobile lintas platform menggunakan Flutter GetX yang dirancang khusus untuk memfasilitasi caregiver dalam memantau parameter kesehatan dan mengelola perawatan lansia secara efisien. Mengintegrasikan dengan backend FastAPI dan fitur keamanan Face Recognition (InsightFace Buffalo) untuk sinkronisasi antarmuka secara real-time.`,
    isExpanded: true,
  },
  {
    id: "alysa",
    title: "Alysa — Mobile Front-end Developer",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/alifiashasa/alysa-mobile",
    skills: [
      "Flutter",
      "Figma",
      "Flask",
      "SQLAlchemy",
      "Flask-JWT-Extended",
      "Gemini API",
      "Easy OCR",
    ],
    description: `Melakukan slicing desain UI/UX ke dalam komponen Flutter yang responsif untuk aplikasi preparation IELTS, serta menerapkan state management untuk memastikan kelancaran interaksi aplikasi. Mengintegrasikan REST API untuk menghubungkan antarmuka mobile dengan layanan AI fungsional, termasuk chatbot NLP dan fitur Computer Vision penerjemah gambar ke teks (EasyOCR).`,
  },
  {
    id: "heal",
    title: "Heal — Front-end Developer",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/alifiashasa/heal",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google AI SDK",
      "Clerk",
      "Zustand",
    ],
    description: `Melakukan slicing desain antarmuka menjadi komponen web yang responsif dan interaktif menggunakan Next.js, TypeScript, dan Tailwind CSS untuk membangun dashboard kesehatan dan fitur chat.`,
    logo: "/p/heal.png",
  },
  {
    id: "dya-collection",
    title: "Dya Collection — Front-end Developer",
    period: {
      start: "11.2024",
      end: "02.2025",
    },
    link: "https://github.com/alifiashasa/dya-collection",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "PostgreSQL",
      "Clerk",
      "Zustand",
    ],
    description: `Membangun antarmuka web katalog produk yang type-safe, responsif, dan modern menggunakan Next.js dan TypeScript, serta mempercepat proses slicing UI menggunakan kombinasi Tailwind CSS dan komponen dari Shadcn/ui.`,
    logo: "/p/dya.svg",
  },
  {
    id: "crystal-escape",
    title: "Crystal Escape — 3D Game Developer",
    period: {
      start: "06.2024",
    },
    link: "https://github.com/alifiashasa/crystal-escape",
    skills: ["Unity", "C#"],
    description: `Mengembangkan game puzzle 3D menggunakan Unity dan C# dengan mekanisme pengumpulan crystal dan penyelesaian puzzle. Mengimplementasikan sistem pergerakan karakter, interaksi objek, deteksi tabrakan, dan perpindahan level. Mengintegrasikan aset 3D, animasi, UI, dan audio untuk mendukung pengalaman bermain yang interaktif. Melakukan pengujian, perbaikan bug, dan optimasi performa guna meningkatkan kualitas permainan.`,
  },
];
