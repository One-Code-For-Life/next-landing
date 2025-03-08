import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://mrcarwash.app"),
  title: {
    default:
      "MrCarWash - Platform Manajemen Bisnis Cuci Mobil & Motor Terlengkap",
    template: "%s | MrCarWash",
  },
  description:
    "MrCarWash adalah platform SaaS lengkap untuk manajemen bisnis cuci mobil dan motor. Kelola operasional, karyawan, pelanggan, dan keuangan bisnis Anda dengan mudah dan efisien.",
  keywords: [
    "manajemen cuci mobil",
    "software cuci motor",
    "aplikasi kasir cuci mobil",
    "CRM cuci mobil",
    "POS cuci mobil",
    "sistem manajemen karyawan",
    "laporan keuangan bisnis",
    "MrCarWash",
    "platform SaaS cuci mobil",
  ],
  authors: [
    {
      name: "MrCarWash Team",
      url: "https://mrcarwash.app/about"
    }
  ],
  creator: "MrCarWash",
  publisher: "MrCarWash",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },
  openGraph: {
    title:
      "MrCarWash - Platform Manajemen Bisnis Cuci Mobil & Motor Terlengkap",
    description:
      "MrCarWash adalah platform SaaS lengkap untuk manajemen bisnis cuci mobil dan motor. Kelola operasional, karyawan, pelanggan, dan keuangan bisnis Anda dengan mudah dan efisien.",
    url: "https://mrcarwash.app",
    siteName: "MrCarWash",
    images: [
      {
        url: "https://ucarecdn.com/50a59e34-b7bc-42a1-9e8f-592117047ddb/-/preview/1200x630/",
        width: 1200,
        height: 630,
        alt: "MrCarWash - Platform Manajemen Bisnis Cuci Mobil & Motor Terlengkap",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MrCarWash - Platform Manajemen Bisnis Cuci Mobil & Motor Terlengkap",
    description:
      "MrCarWash adalah platform SaaS lengkap untuk manajemen bisnis cuci mobil dan motor. Kelola operasional, karyawan, pelanggan, dan keuangan bisnis Anda dengan mudah dan efisien.",
    images: [
      "https://ucarecdn.com/7197b9a2-27a8-4ab6-a3e2-8ccbc9de37e3/-/preview/1200x630/",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/favicon.ico",
    apple: "/images/logo/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logo/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
};
