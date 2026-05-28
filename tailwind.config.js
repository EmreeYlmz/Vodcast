// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                urbanist: ['Urbanist', 'sans-serif'],
            },
            colors: {
                background: '#353A40',     // Tüm sayfa arka planı
                navbar: '#282C30',         // Navbar ve sidebarlar için
                button: '#058DD9',         // Tüm butonlar için
                card: '#2D3136',
                primary: '#1E90FF',
                link: '#00AEEF',
            }

        },
    },
    plugins: [],
}
