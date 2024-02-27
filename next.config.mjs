/** @type {import('next').NextConfig} */
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
    swSrc: 'app/sw.ts', // Where te service worker src is
    swDest: 'public/sw.js' // Where the service worker code will end up
});
export default withSerwist({
//     Next.js config options
    
});
// const nextConfig = {};
//
// export default nextConfig;
