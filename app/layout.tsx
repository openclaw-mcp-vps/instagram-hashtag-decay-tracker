import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashDecay — Track When Hashtags Stop Working",
  description: "Monitor Instagram hashtag performance over time. Get alerts when reach drops and discover fresh alternatives before your engagement tanks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8d48fecf-d6cb-4f28-b6fe-9a93bd8ce14f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
