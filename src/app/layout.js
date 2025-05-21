import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shaswat Raj - Developer, Designer, Dreamer",
  description: "Portfolio of Shaswat Raj - A developer, designer, and dreamer building thoughtful digital experiences and powerful tools.",
  keywords: ["developer", "portfolio", "web development", "frontend", "backend", "full-stack", "design", "open-source", "JavaScript", "TypeScript", "React", "Next.js", "UI/UX"],
  creator: "Shaswat Raj",
  authors: [{ name: "Shaswat Raj", url: "https://shaswat.live" }],
  metadataBase: new URL("https://shaswat.live"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shaswat.live",
    title: "Shaswat Raj - Developer, Designer, Dreamer",
    description: "Portfolio of Shaswat Raj - A developer, designer, and dreamer building thoughtful digital experiences and powerful tools.",
    siteName: "Shaswat Raj's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shaswat Raj - Developer, Designer, Dreamer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswat Raj - Developer, Designer, Dreamer",
    description: "Portfolio of Shaswat Raj - A developer, designer, and dreamer building thoughtful digital experiences and powerful tools.",
    creator: "@SH20RAJ",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
