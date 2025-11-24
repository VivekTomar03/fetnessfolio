import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0066ff',
                    dark: '#0052cc',
                    light: '#3385ff',
                },
                secondary: {
                    DEFAULT: '#00d4ff',
                    dark: '#00a8cc',
                },
                accent: '#7c3aed',
                dark: {
                    DEFAULT: '#0a0a0f',
                    light: '#12121a',
                    lighter: '#1a1a2e',
                },
                light: '#f5f5f5',
                gray: '#888',
                success: '#00ff88',
            },
        },
    },
    plugins: [],
};
export default config;
