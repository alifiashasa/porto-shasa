import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "self-studio-photo",
    companyName: "Self Studio Photo",
    positions: [
      {
        id: "self-studio-photo-parttime",
        title: "Part-Time staff",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",
        description: `- Melayani pelanggan dalam sesi pemotretan di studio dengan berbagai konsep dan kebutuhan.
- Mengoperasikan peralatan fotografi serta membantu pengaturan pencahayaan dan komposisi visual.
- Mengelola hasil foto dasar (seleksi dan pengorganisasian file) sebelum proses editing lanjutan.`,
        icon: "design",
        skills: ["Fotografi", "Customer Service", "Photo Editing", "Visual Composition"],
      },
    ],
  },
  {
    id: "wedding-content-creator",
    companyName: "Freelance Wedding Content Creator",
    positions: [
      {
        id: "wedding-content-creator-freelance",
        title: "Content Creator",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Freelance",
        description: `- Mengabadikan dan mengelola dokumentasi foto/video pada acara pernikahan sesuai kebutuhan klien.
- Berkoordinasi dengan klien dan tim untuk memastikan hasil dokumentasi sesuai konsep dan ekspektasi.
- Mengatur alur pengambilan gambar serta memastikan hasil visual tersusun rapi dan siap untuk proses editing.`,
        icon: "design",
        skills: ["Videografi", "Content Creation", "Video Editing", "Komunikasi"],
      },
    ],
  },
  {
    id: "erafone",
    companyName: "Erafone – Erajaya Group",
    positions: [
      {
        id: "erafone-frontliner",
        title: "Frontliner (Sales Associate)",
        employmentPeriod: {
          start: "2022",
          end: "2023",
        },
        employmentType: "Full-time",
        description: `- Melayani pelanggan dalam proses pembelian produk serta memberikan informasi terkait fitur dan spesifikasi produk.
- Membantu pelanggan dalam memilih produk sesuai kebutuhan dan preferensi melalui komunikasi langsung.
- Menangani pertanyaan dan kendala pelanggan serta berkoordinasi dengan tim store untuk memastikan pelayanan berjalan lancar.`,
        icon: "business",
        skills: ["Sales", "Customer Service", "Komunikasi", "Problem Solving"],
      },
    ],
  },
  {
    id: "henc",
    companyName: "Harkat English Club (HENC)",
    companyLogo: "/p/henc.svg",
    positions: [
      {
        id: "henc-creative-team",
        title: "Tim Kreatif",
        employmentPeriod: {
          start: "2024",
          end: "2025",
        },
        employmentType: "Volunteer",
        description: `- Berkontribusi dalam pembuatan konten kreatif dan kegiatan organisasi.
- Membimbing anggota dalam pembelajaran dasar programming melalui sesi praktik dan diskusi.
- Berkolaborasi dalam pelaksanaan kegiatan dan pengembangan komunitas belajar.`,
        icon: "design",
        skills: ["Content Creation", "Programming Mentoring", "Teamwork", "Community Building"],
      },
    ],
  },
  {
    id: "pkkmb-2024",
    companyName: "Panitia PKKMB 2024",
    positions: [
      {
        id: "pkkmb-2024-staff",
        title: "Panitia Divisi Komunikasi",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Volunteer",
        description: `- Menghubungkan komunikasi antara panitia dan peserta secara efektif.
- Menangani kendala teknis dan non-teknis dalam kelompok.
- Mengembangkan kemampuan komunikasi, teamwork, dan problem solving.`,
        icon: "business",
        skills: ["Event Management", "Communication", "Teamwork", "Problem Solving"],
      },
    ],
  },
];

export const EDUCATION: Experience[] = [
  {
    id: "education",
    companyName: "Pendidikan",
    positions: [
      {
        id: "education-universitas-harkat-negeri",
        title: "Universitas Harkat Negeri — Sarjana Terapan Teknik Informatika (D4)",
        employmentPeriod: {
          start: "09.2023",
        },
        description: `- Mahasiswi semester 6 dengan IPK 3,83 / 4,0.
- Mata Kuliah Relevan: Pemrograman Web, Pemrograman Mobile, Basis Data, Big Data, Computer Vision, Pengujian Perangkat Lunak, Rekayasa Perangkat Lunak, Kecerdasan Buatan.`,
        icon: "education",
        skills: [
          "Pemrograman Web",
          "Pemrograman Mobile",
          "Basis Data",
          "Big Data",
          "Computer Vision",
          "Pengujian Perangkat Lunak",
          "Rekayasa Perangkat Lunak",
          "Kecerdasan Buatan",
        ],
      },
    ],
  },
];
