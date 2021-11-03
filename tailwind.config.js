module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'lavender': '#eaeff4',
                'seashell': '#FEF4EB',
                'roof-terracotta': '#9f2d20',
                'brown': '#a72d20',
                'saddle-brown': '#7f241a'
            }
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}