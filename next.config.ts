import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // применимо ко всем маршрутам
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src https://www.google.com https://widgets.2gis.com https://2gis.kz https://maps.google.com ;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
