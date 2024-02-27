import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Next-PWA AMP Test Project',
        short_name: 'Benjis Donuts PWA',
        description: ' Serwist w/ Next.js',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/logo-transparent-bg.webp',
                sizes: '200x200',
                type: 'image/webp',
            },
        ],
    };
}