import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            screens:{
                xs:"390px"
            },
            fontFamily: {
                heading: ["Prata",'serif'],
                text: ["Hind", 'sans-serif'],
            },
            colors:{
                primary:{
                    400:"#fff"
                },
                secondary:{
                    400:"#ccc"
                },
                fontLight:{
                    400:"#fff"
                },
                fontDark:{
                    400:"#ccc"
                }
                
            }
        },
    },

    plugins: [forms],
};
