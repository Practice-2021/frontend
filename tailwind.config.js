module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'lavender': '#eaeff4',
                'seashell': '#FEF4EB',
            }
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}