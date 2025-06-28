import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://shaswat.live",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth darkexport default StartupSection dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
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
