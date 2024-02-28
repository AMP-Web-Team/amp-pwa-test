import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sir Benjis Donuts - AMP PWA',
        short_name: 'Benjis Donuts PWA',
        description: 'Download PWA to view the menu offline and order through the app',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#000000',
        theme_color: '#474747',
        icons: [
            {
                src: '/logo-transparent-bg.webp',
                sizes: '200x200',
                type: 'image/webp',
            },
            {
                src: '/logo-transparent-bg.webp',
                sizes: '520x520',
                type: 'image/webp',
            },
        ],
    };
}