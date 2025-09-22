import localFont from "next/font/local";

export const volkswagen = localFont({
  src: "/fonts/Volkswagen-Regular.ttf", // ✅ always start with /
  variable: "--font-volkswagen",
  weight: "400",
  style: "normal",
});
