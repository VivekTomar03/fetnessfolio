import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Abhishek Sharma - Fitness Coach & Online Trainer",
    description: "Professional fitness coach and online trainer helping clients achieve their fitness goals through personalized training plans and expert guidance.",
    keywords: ["fitness coach", "online trainer", "personal training", "fitness transformation", "workout plans"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
