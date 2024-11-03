// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st2.depositphotos.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'st3.depositphotos.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.azulweb.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'academy.kodigo.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'innovacioneducativa.upc.edu.pe',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dplnews.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zonadeobras.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bogota.gov.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'techsenati.edu.pe',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
